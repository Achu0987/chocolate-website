'use client';

import { useEffect, useRef, useState } from 'react';
import { frames } from './frames';

export default function ScrollSequence({ onProgress, onLoadingComplete }) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const onProgressRef = useRef(onProgress);
    const onLoadingCompleteRef = useRef(onLoadingComplete);

    useEffect(() => {
        onProgressRef.current = onProgress;
    }, [onProgress]);

    useEffect(() => {
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [onLoadingComplete]);

    const frameCount = 240;
    const currentFrameRef = useRef(0);
    const targetFrameRef = useRef(0);

    useEffect(() => {
        const loadedImages = [];
        let count = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();

            img.src = frames[i].src;

            img.onload = () => {
                count++;
                setLoadedCount(count);
                if (onProgressRef.current) onProgressRef.current(count, frameCount);
                if (count === frameCount) {
                    setIsLoading(false);
                    if (onLoadingCompleteRef.current) onLoadingCompleteRef.current();
                }
            };

            img.onerror = () => {
                count++;
                setLoadedCount(count);
                if (onProgressRef.current) onProgressRef.current(count, frameCount);
                if (count === frameCount) {
                    setIsLoading(false);
                    if (onLoadingCompleteRef.current) onLoadingCompleteRef.current();
                }
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, []);

    useEffect(() => {
        if (isLoading || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            
            // Normalize coordinate system to use CSS pixels
            ctx.scale(dpr, dpr);
            
            drawFrame(Math.round(currentFrameRef.current));
        };

        const drawFrame = (index) => {
            const img = images[index];
            if (!img || !img.complete) return;

            const logicalWidth = window.innerWidth;
            const logicalHeight = window.innerHeight;
            const imgWidth = img.width;
            const imgHeight = img.height;

            const imgRatio = imgWidth / imgHeight;
            const canvasRatio = logicalWidth / logicalHeight;

            let drawWidth, drawHeight, drawX, drawY;

            if (canvasRatio > imgRatio) {
                drawWidth = logicalWidth;
                drawHeight = logicalWidth / imgRatio;
                drawX = 0;
                drawY = (logicalHeight - drawHeight) / 2;
            } else {
                drawHeight = logicalHeight;
                drawWidth = logicalHeight * imgRatio;
                drawX = (logicalWidth - drawWidth) / 2;
                drawY = 0;
            }

            ctx.clearRect(0, 0, logicalWidth, logicalHeight);
            
            // Force ultra-high quality rendering
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const mainEl = document.querySelector('main');
            const maxScroll = mainEl ? mainEl.scrollHeight - (window.innerHeight * 1.5) : document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

            targetFrameRef.current = Math.min(frameCount - 1, Math.max(0, scrollPercent * (frameCount - 1)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        let animationFrameId;
        const updateFrame = () => {
            const ease = 0.15;
            const diff = targetFrameRef.current - currentFrameRef.current;

            if (Math.abs(diff) > 0.05) {
                currentFrameRef.current += diff * ease;
                drawFrame(Math.round(currentFrameRef.current));
            }

            animationFrameId = requestAnimationFrame(updateFrame);
        };

        updateFrame();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLoading, images]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full object-cover z-0 bg-[#000]"
        />
    );
}
