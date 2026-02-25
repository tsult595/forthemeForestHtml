import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import bgImage from '../assets/banner-bg.svg';
import imageHeader from '../assets/01.svg';
import rightTopImg from '../assets/right-top.webp';

const texts = [
  'Industrial Solutions',
  'Innovative Designs',
  'Sustainable Practice',
 
];

const textTest = [
    'company',
    'business',
    'brand',
]

const AnimatedText = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  

  useEffect(() => {
    const el = textRef.current;
    const al = textTest.length;
    if (!el) return;
    if (!al) return;
    // Начальное значение (чтобы не было пустоты в начале)
    el.textContent = texts[0];
    // Removed invalid assignment to al.textContent

    const tl = gsap.timeline({
      repeat: -1,           // бесконечный цикл
      repeatDelay: 2,       // пауза между циклами
      defaults: { ease: 'power2.inOut' },
    });

    texts.forEach((text, index) => {
      const isLast = index === texts.length - 1;

      tl.to(el, {
        opacity: 0,
        y: -12,
        duration: 0.45,
      })
        .set(el, { textContent: text }, '+=0') // мгновенная смена текста
        .to(el, {
          opacity: 1,
          y: 0,
          duration: 0.45,
        })
        // пауза только после последнего — чтобы цикл был ровным
        .to({}, { duration: isLast ? 2 : 0.1 });
    });

    // Cleanup — важно!
    return () => {
      tl.kill();
    };
  }, []); // пустой массив — запускаем один раз

  return (
    <span ref={textRef} className="inline-block min-w-70 text-amber-600 font-bold">
      {/* начальное значение для SSR / первого рендера */}
      {texts[0]}
    </span>
  );
};

const MainPageSection = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col justify-center items-center bg-amber-200/70 backdrop-blur-sm mx-auto w-[60%] max-w-4xl h-[70%] rounded-xl relative z-10 p-8 shadow-2xl">
        <div className="w-64 h-40 border-2 border-gray-300 rounded-md overflow-hidden mb-4">
          <img
            className="w-full h-full object-contain"
            src={imageHeader}
            alt="Header illustration"
          />
        </div>

        <div className="flex gap-4 items-center mb-6">
          <button className="bg-amber-600 text-white px-10 py-4 rounded-lg hover:bg-amber-700 active:scale-95 transition-all duration-300 font-semibold shadow-md">
            Buy Now
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Forest</h1>
        </div>

        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight">
            All In One HTML Template
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-4">
            For <AnimatedText />
          </h2>
        </div>
      </div>

      
      <div className="absolute top-12 right-8 w-64 h-64 md:w-80 md:h-80 opacity-80 blur-[2px] z-0 pointer-events-none">
        <img
          className="w-full h-full object-contain"
          src={rightTopImg}
          alt="Decorative right top"
        />
      </div>
    </div>
  );
};

export default MainPageSection;