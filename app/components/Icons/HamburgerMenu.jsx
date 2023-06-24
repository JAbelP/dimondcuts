"use client"
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import Link from 'next/link';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSideMenu = () => {
    console.log("isOpen ")
    setIsOpen(!isOpen);
  };

const dropDown = (tabName) =>{
  if(tabName === activeMenu){
    setActiveMenu(null);
  }
  else{
    setActiveMenu(tabName);
  }
}



  return (
    <div >
        <div 
          className={`${styles.navIcon} ${isOpen ? styles.open : ''} z-30`}
          onClick={toggleSideMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
    <div className={`fixed w-2/3 h-full text-black bg-color2 right-0 top-0 duration-300 z-20 transition-transform transform ${isOpen?("-translate-x-0"):("translate-x-full")} text-center text-5xl pt-36`}>
    <ul>

      {/* Example of a drop down */}
      <li className="pb-10">
        {/* <Link href={"/"}> */}
          <p onClick={() => dropDown('home')}>Services</p>
          {activeMenu === 'home' && (
              <ul className=' pt-5 space-y-8 text-4xl'>
                <li>Shape-Up</li>
                <li>Fade</li>
              </ul>
            )}
        {/* </Link> */}
      </li>

      <li className="pb-10">
        {/* <Link href={"/"}> */}
          <p onClick={() => dropDown('meet')}>Meet Our Barbers</p>
          {activeMenu === 'meet' && (
              <ul className=' pt-5 space-y-8 text-4xl'>
                <li>Linwood</li>
                <li>Gerald</li>
              </ul>
            )}
        {/* </Link> */}
      </li>
      {/* Example of Direct link */}
      <li>
        <Link href={"/Book"}>
          <p onClick={toggleSideMenu}>Book Us</p>
        </Link>
      </li>
      </ul>
    </div>
    <div onClick={toggleSideMenu} className={`fixed w-1/3 h-full bg-color5 opacity-75 left-0 top-0 duration-300 z-20 transition-transform transform ${isOpen?("translate-x-0"):("-translate-x-full")} text-center text-5xl pt-36`}/>
    </div>
  );
};

