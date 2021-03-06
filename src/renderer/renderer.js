import React, { useEffect } from 'react';

const version = '1.0.1';

const Renderer = () => {
  const canvasRef = React.useRef(null);

  const draw = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'yellow';
    ctx.fillRect(x - 1, y - 1, 3, 3);
  };

  const handleMove = (e) => {
    if (e.buttons === 1) {
      draw(e.clientX, e.clientY);
    }
  }

  const handleTouch = (e) => {
    const touches = e.touches;
    for (let i = 0; i < touches.length; i++) {
      const t = touches[i];
      draw(t.pageX, t.pageY);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'yellow';
    ctx.fillText(version, 10, 10);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ touchAction: 'none' }}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMove}
      onTouchMove={handleTouch}
    />
  );
};

export default Renderer;
