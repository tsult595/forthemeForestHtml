import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;     // ms на символ при наборе
  deletingSpeed?: number;   // ms на символ при удалении
  pauseDuration?: number;   // пауза после полного слова
  cursorChar?: string;      // символ курсора ('|' или '_' или '▋')
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  words,
  className = "inline-block text-amber-600 font-bold",
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1800,
  cursorChar = '|',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || words.length === 0) return;

    const container = containerRef.current;
    const cursor = cursorRef.current;

    // Мигающий курсор (независимо от текста)
    gsap.to(cursor, {
      autoAlpha: 0,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    let wordIndex = 0;

    const type = () => {
      const targetWord = words[wordIndex];

      if (!isDeleting && charIndex <= targetWord.length) {
        // Набираем
        currentText = targetWord.substring(0, charIndex);
        container.textContent = currentText;
        charIndex++;
        setTimeout(type, typingSpeed);
      } 
      else if (isDeleting && charIndex > 0) {
        // Удаляем
        currentText = targetWord.substring(0, charIndex);
        container.textContent = currentText;
        charIndex--;
        setTimeout(type, deletingSpeed);
      } 
      else if (!isDeleting && charIndex > targetWord.length) {
        // Закончили набирать → пауза → начинаем удалять
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseDuration);
      } 
      else if (isDeleting && charIndex === 0) {
        // Закончили удалять → следующий слово
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setCurrentWordIndex(wordIndex);
        setTimeout(type, 300); // маленькая пауза перед новым набором
      }
    };

    type(); // запуск

    return () => {
      // cleanup не обязателен, т.к. setTimeout рекурсивный, но можно добавить флаг
    };
  }, [words, typingSpeed, deletingSpeed, pauseDuration, cursorChar]);

  return (
    <span className={`relative ${className}`}>
      <span ref={containerRef} className="inline-block min-w-max">
        {words[0]?.[0] || ''} {/* первый символ для SSR */}
      </span>
      <span
        ref={cursorRef}
        className="absolute -right-1 top-0 text-amber-600 font-bold ml-1"
        style={{ transform: 'translateY(-2px)' }} // подстрой под шрифт
      >
        {cursorChar}
      </span>
    </span>
  );
};

export default AnimatedText;