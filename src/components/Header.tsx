
import imageHeader from '../assets/01.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';


const menuItems = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const [userScroll, setuserScroll] = useState(0);
  const scrollThreshold = 40; // px, можно увеличить для "N scrolla"

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currScroll = window.scrollY;
          if (currScroll - userScroll > scrollThreshold) {
            setShow(false); // скроллим вниз — скрыть
            setuserScroll(currScroll);
          } else if (userScroll - currScroll > scrollThreshold) {
            setShow(true); // скроллим вверх — показать
            setuserScroll(currScroll);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [userScroll]);

  return (
    <header
      className={`w-full bg-amber-100 px-15 flex items-center justify-between h-35 sm:h-20 lg:h-48 py-4 transition-transform duration-500 ease-in-out z-50 fixed top-0 left-0 
     ${show ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ willChange: 'transform' }}
    >
      <div className='w-auto h-auto min-w-2xs'>
        <img src={imageHeader} alt="pic" />
      </div>
      <nav className='w-[30%] sm:hidden md:block'>
        <ul className='flex items-center text-lg font-medium text-gray-700 justify-between md:text-2xl'>
          {menuItems.map((item, idx) => (
            <li
              key={item}
              className='cursor-pointer hover:text-gray-900 transition-colors duration-300 text-2xl flex items-center'
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {item} <FontAwesomeIcon icon={["fas", hovered === idx ? "chevron-up" : "chevron-down"]} className="ml-2" />
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button className='bg-amber-500 text-white px-18 py-4 rounded-md hover:bg-amber-600 transition-colors duration-300'>Buy Now</button>
      </div>
    </header>
  );
};

export default Header