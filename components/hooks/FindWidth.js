export const FindWidth = () => {
    window.addEventListener('resize', handleWidth, {passive: true});

    return () => {
        window.removeEventListener('resize', handleWidth);
    }; 
}