import React, { useState, useEffect } from 'react';
import './DinoGame.css';

const DinoGame = () => {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={`dino ${isJumping ? 'jump' : ''}`}>
      <div className="dino-body"></div>
    </div>
  );
};

export default DinoGame;