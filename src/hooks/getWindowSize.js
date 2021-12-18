import { useState, useEffect } from 'react';

const getWindowSize = () => {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

const WindowSizeInfo = () => {
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {

    const handleSize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleSize);
    
    return () => window.removeEventListener('resize', handleSize);

  }, []);

  return windowSize;
}

export default WindowSizeInfo;