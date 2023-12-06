import React from 'react';
import { useTrail, animated } from 'react-spring';

const YourComponent: React.FC = () => {
  const items = ['Элемент 1', 'Элемент 2', 'Элемент 3'];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 800 }, // Длительность анимации
  });

  return (
    <div>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default YourComponent;