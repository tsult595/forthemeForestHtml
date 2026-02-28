import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import bgImage from '../assets/banner-bg.svg';
import imageHeader from '../assets/01.svg';
import rightTopImg from '../assets/right-top.webp';
import SimpleAnimatedText from './SimpleAnimatedText';

const texts = [
  'Industrial Solutions',
  'Innovative Designs',
  'Sustainable Practice',
 
];




const MainPageSection = () => {
  return (
    <>
   
    <div
      className="h-[90vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col h-auto justify-center items-center bg-amber-200/70 backdrop-blur-sm mx-auto w-[60%] max-w-4xl rounded-xl relative z-10 p-8 shadow-2xl">
        <div className="w-64 h-40  rounded-md overflow-hidden mb-4">
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight md:leading-none">
            All In One HTML Template
          </h1>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-4">
            For <SimpleAnimatedText texts={[...texts]}
            
              /> 
            |
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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi ipsum dolorum possimus fugiat perferendis, fuga eius fugit quaerat culpa repudiandae? Incidunt maiores excepturi minima quasi sed cum illum, autem quos expedita ab! Voluptate labore maiores nisi dicta in odit reprehenderit blanditiis iusto. Vero molestiae accusantium totam! Voluptatem, autem adipisci. Magnam dignissimos culpa nostrum a, iste maxime qui inventore, sunt, commodi totam provident illo in fuga harum doloribus laboriosam sed consectetur tempora? Dolorem unde consectetur repellat ullam neque, modi ducimus vitae perspiciatis eos voluptates distinctio sunt iusto mollitia, accusantium voluptate sit eaque? Blanditiis earum hic nihil enim. Perferendis, non tempore optio nihil sequi adipisci labore at reiciendis consectetur sed voluptatum atque placeat magnam dignissimos, fugit quas quidem, eligendi aliquam incidunt quod eius? Sed voluptas officiis sunt mollitia eaque recusandae corporis numquam fugit pariatur rem vero sequi libero nostrum nobis blanditiis, assumenda magni fugiat explicabo earum! Consectetur earum magnam soluta, alias odit porro ex deleniti ducimus laborum ipsum a qui minus dolores nam veniam eaque vitae esse illum. Dicta consequatur fugiat explicabo voluptatibus fugit magni accusamus cumque ex incidunt alias sequi fuga ducimus possimus impedit vero, natus a officia adipisci est minus. Perferendis architecto porro nemo tempore vero animi deleniti eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eaque vitae cupiditate rerum error, ratione, excepturi recusandae dolores obcaecati animi consequuntur. Officiis nesciunt autem possimus consequatur dicta iure quae et quisquam mollitia vitae quidem, quasi molestias, sapiente, suscipit ab dolorem eius. Dolorum nisi asperiores, deleniti beatae earum officia excepturi atque cum, ipsa quas autem praesentium explicabo iste. Praesentium minima quod, facere tempore quis aliquam placeat rem adipisci autem consectetur alias dolore, impedit mollitia modi magnam? Cupiditate dolorem dolorum nihil vero facilis nobis, repellat doloribus dicta sit hic accusantium, eaque nostrum ea veniam dolor a impedit non quod placeat. Consequatur eveniet necessitatibus quidem laudantium pariatur voluptatibus numquam in architecto perspiciatis odio nisi officia atque eligendi provident deleniti enim aperiam ipsam magni at dolores quas eius, assumenda deserunt eum. Culpa aperiam rerum quae laboriosam, quo eaque. Consequatur laudantium ipsam, neque corrupti eos laborum dicta. Sit nam, obcaecati eveniet maiores est dicta, saepe nisi nobis sequi iure magni praesentium nihil aut asperiores quaerat iste rem fugit cumque, odio ipsum ducimus quos. Illo velit, iste temporibus sit dolorum nihil culpa iure qui ut aliquam sequi ipsum officiis a? Impedit dicta accusamus nam nemo ut illo, quas aliquid ullam ex quo sunt nobis, quae rem?</p>
      </>
  );
};

export default MainPageSection;