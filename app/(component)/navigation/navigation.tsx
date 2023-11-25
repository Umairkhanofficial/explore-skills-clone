 // components/NavigationMenu.js
 "use client"
 import { useState } from 'react';
import Link from 'next/link';

 const NavigationMenu = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);
 
   const toggleMenu = () => {
     setMenuOpen(!isMenuOpen);
   };
 
   return (
     <div>
       <button onClick={toggleMenu}>Menu</button>
 
       {isMenuOpen && (
          <nav>
          <Link href="/" className="logo">Xplore
              <i className="fab fa-staylinked"></i>kill
          </Link>
          <div className="nav-links" id="navLinks">
              {/* <!-- reposnive bar open and close --> */}
              {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
              <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/course">Course</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
              </ul>
          </div>
           <i className="fa fa-bars" onClick={toggleMenu}></i>
          {/* <!-- reposnive bar open and close --> */}
      </nav>
       )}
     </div>
   );
 };
 
 export default NavigationMenu;