const header = document.querySelector('.header');

const hueRangeStart = 165;
const hueRangeEnd = 180;

window.addEventListener('mousemove', (event) => {
    if (header) {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        const x = event.clientX;
        const y = event.clientY;
    
        const hue = Math.round(Math.pow(x / width, 2) * (hueRangeEnd - hueRangeStart) + hueRangeStart); 
        const saturation = Math.round(Math.sqrt(y / height) * 30) + 60;
        const lightness = 60;
    
        header.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
});
