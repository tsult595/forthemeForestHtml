import { useEffect, useRef } from 'react';



const SimpleAnimatedText = ({ texts = [], speed = 60 , deletingSpeed = 30 , pauseAfterDelete = 700, }) => {
  const spanRef = useRef(null);
  
  
  useEffect(() => {
    let wordIdx = 0;
    let i = 0;
    let forward = true;

    const animate = () => {
      if (!spanRef.current || texts.length === 0) return;
      const text = texts[wordIdx];
      if (forward) {
        if (i <= text.length) {
          spanRef.current.textContent = text.slice(0, i);
          i++;
          setTimeout(animate, speed);
        } else {
          forward = false;
          setTimeout(animate, speed);
        }
      } else {
        if (i >= 0) {
          spanRef.current.textContent = text.slice(0, i);
          i--;
          setTimeout(animate, deletingSpeed);
        } else {
          // Следующее слово
          wordIdx = (wordIdx + 1) % texts.length;
          forward = true;
          i = 0;
          setTimeout(animate, pauseAfterDelete);
        }
      }
    };
   console.log(spanRef);
    animate();
    // Нет необходимости в cleanup, setTimeout рекурсивный
  }, [texts, speed, deletingSpeed, pauseAfterDelete]);

  return <span ref={spanRef}></span>;
};


export default SimpleAnimatedText;