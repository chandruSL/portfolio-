import { useState, useEffect } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="cursor-dot"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            />
            <div
                className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            />
        </>
    );
}
