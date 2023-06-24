// import React from 'react';
// import HambugerMenu from '../Icons/HamburgerMenu';
// import Image from 'next/image';
// // import logoSvg from '../../../public/WIREDBROSVG.svg';

// export const Headers = () => {
//   return (
//     <div className="bg-white text-black w-full pl-4 h-20">
//       <div className="relative">
//         <div className="flex flex-row items-start h-0">
//           {/* <Image src={logoSvg} alt="Logo" className="h-20 w-20" /> */}
//         </div>

//         <div className="hidden lg:block absolute top-6 left-1/3 text-2xl font-semibold ">
//           <div className="flex flex-row gap-x-10 ">
//             <div className="relative group">
//               <p className="cursor-pointer hover:bg-yellow-400 pb-2 px-3">Generator</p>
//               <div className="absolute top-8 left-0 bg-white border z-20 text-base border-gray-200 hidden group-hover:block">
//                 <p className="px-4 py-2  hover:bg-yellow-400 ">IT Service 1</p>
//                 <p className="px-4 py-2  hover:bg-yellow-400">IT Service 2</p>
//               </div>
//             </div>
//             <div className="relative group">
//               <p className="cursor-pointer hover:bg-yellow-400 pb-2 px-3">Generator</p>
//               <div className="absolute top-8 left-0 bg-white border z-20 text-base border-gray-200 hidden group-hover:block">
//                 <p className="px-4 py-2 hover:text-white hover:bg-yellow-400 ">IT Service 1</p>
//                 <p className="px-4 py-2 hover:text-black hover:bg-yellow-400 ">IT Service 2</p>
//               </div>
//             </div>
//             <p className="relative group cursor-pointer hover:bg-yellow-400 pb-2 px-3 ">
//             Generator
//             </p>
//             <p  className="relative group cursor-pointer hover:bg-yellow-400 pb-2 px-3">
//             Generator
//             </p>
//           </div>
          
//         </div>
//         <div className=' capitalize absolute right-10 pt-3 lg:flex lg:flex-col hidden'>
//                 <div className=''>
//                 Need an Electrician?
//             </div>
//             <div>
//                 (919) 557-4477
//             </div>
//         </div>
//       </div>

//       <div className="text-center lg:hidden">
//         <div className="flex justify-end">
//           <HambugerMenu />
//         </div>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import Image from 'next/image';
import {HamburgerMenu} from "../Icons";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const Headers = () => {
  return (
    <div className={`bg-color3 text-black w-full pl-4 h-20 ${inter.className}`}>
      <div className="relative">
        <div className="flex flex-row items-start h-0">
          {/* <Image src={logoSvg} alt="Logo" className="h-20 w-20" /> */}
        </div>

        <div className="hidden lg:block absolute top-6 left-1/3 text-2xl font-semibold">
          <div className="flex flex-row gap-x-10">
            <div className="relative group">
              <p className="cursor-pointer hover:bg-color2 pb-2 px-3">Services</p>
              <div className="absolute top-10 left-0 bg-white border z-20 text-base border-gray-200 hidden group-hover:block">
                <p className="px-4 py-2 hover:bg-color2">Shape-Up</p>
                <p className="px-4 py-2 hover:bg-color2">Fade Top</p>
              </div>
            </div>
            <div className="relative group">
              <p className="cursor-pointer hover:bg-color2 pb-2 px-3">Meet Our Barbers</p>
              <div className="absolute top-10 left-0 bg-white border z-20 text-base border-gray-200 hidden group-hover:block">
                <p className="px-4 py-2 hover:text-black hover:bg-color2">Linwood</p>
                <p className="px-4 py-2 hover:text-black hover:bg-color2">Gerald</p>
              </div>
            </div>
            <p className="relative group cursor-pointer hover:bg-color2 pb-2 px-3">
              About Us
            </p>
          </div>
        </div>

        <div className="capitalize absolute right-10 pt-3 xlg:flex lg:flex-col hidden">
          <div>Need a Barber?</div>
          <div>(919) 773-8525</div>
        </div>
      </div>

      <div className="text-center lg:hidden">
        <div className="flex justify-end">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};
