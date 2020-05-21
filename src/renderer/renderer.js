import React from 'react';

const Renderer = () => {
  const canvasRef = React.useRef(null);

  const draw = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'yellow';
    ctx.fillRect(x - 1, y - 1, 3, 3);
  };

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
    />
  );
};

export default Renderer;
