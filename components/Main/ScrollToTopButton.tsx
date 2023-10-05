import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: isVisible ? 'block' : 'none',
        backgroundColor: '#73C7FC',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: '9999',
        width: '50px',
        height: '50px',
        boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.11), 3px 4px 5px 0 rgba(0, 0, 0, 0.11)',
        
      }}
      onClick={scrollToTop}
    >
      <IoIosArrowUp style={{marginTop:'7px',marginLeft:'-2px'}}/>
    </div>
  );
};

export default ScrollToTopButton;
