import React, { useEffect } from 'react';

const version = '1.0';

const Renderer = () => {
  const canvasRef = React.useRef(null);

  const draw = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'yellow';
    ctx.fillRect(x - 1, y - 1, 3, 3);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'yellow';
    ctx.fillText(version, 10, 10);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={(e) => {
        if (e.buttons === 1) {
          draw(e.clientX, e.clientY);
        }
      }}
      onTouchMove={(e) => {
        draw(e.clientX, e.clientY);
      }}
    />
  );
};

export default Renderer;
