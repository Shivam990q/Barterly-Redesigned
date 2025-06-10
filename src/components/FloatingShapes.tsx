import React from 'react';

const FloatingShapes = () => {
  const shapes = [
    { id: 1, size: 100, x: 10, y: 20 },
    { id: 2, size: 150, x: 80, y: 60 },
    { id: 4, size: 120, x: 20, y: 70 },
  ];

  return (
    <div className="floating-shapes">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="floating-shape"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
