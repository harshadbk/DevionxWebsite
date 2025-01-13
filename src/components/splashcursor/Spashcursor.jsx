import React, { useState, useEffect } from 'react';
import './spashcursor.css';

const SplashCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [cursorColor, setCursorColor] = useState('rgba(0, 0, 0, 0.3)');

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    // Change cursor color based on hovering over specific elements
    const handleMouseEnter = (e) => {
      if (e.target.classList.contains('hover-target')) {
        setCursorColor('rgba(255, 0, 0, 0.6)'); // Red when hovering over target
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.classList.contains('hover-target')) {
        setCursorColor('rgba(0, 0, 0, 0.3)'); // Reset to default color
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`splash-cursor ${isMouseOver ? 'active' : ''}`}
      style={{
        left: `${cursorPos.x - 20}px`,
        top: `${cursorPos.y - 20}px`,
        backgroundColor: cursorColor,
      }}
    ></div>
  );
};

export default SplashCursor;
