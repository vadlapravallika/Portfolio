import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [innerPos, setInnerPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      setInnerPos({ x: clientX, y: clientY });

      // Delayed movement for outer cursor
      setTimeout(() => {
        setOuterPos({ x: clientX, y: clientY });
      }, 80); // Adjust delay for smoother or faster trailing
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-outer"
        style={{ left: `${outerPos.x}px`, top: `${outerPos.y}px` }}
      />
      <div
        className="cursor-inner"
        style={{ left: `${innerPos.x}px`, top: `${innerPos.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
