export const frames = [];
for (let i = 1; i <= 240; i++) {
    const paddedIndex = String(i).padStart(3, '0');
    frames.push({ src: `/chocolate/frame_${paddedIndex}.jpg` });
}
