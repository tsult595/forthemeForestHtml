

import imageHeader from '../assets/01.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const menuItems = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <header className='w-full bg-amber-100 px-15 flex items-center justify-between h-35'>
      <div className='w-auto h-auto'>
        <img src={imageHeader} alt="pic" />
      </div>
      <nav className='w-[30%]'>
        <ul className='flex items-center text-lg font-medium text-gray-700 justify-between'>
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