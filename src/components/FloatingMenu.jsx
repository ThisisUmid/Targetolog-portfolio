// FloatingMenu.jsx
import React, { useState } from 'react';
import { FiPhone, FiX } from 'react-icons/fi';
import { FaViber, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-center space-y-3">
      {isOpen && (
        <>
          <a href="tel:+1234567890" className="bg-blue-600 p-3 rounded-full shadow-lg">
            <FiPhone className="text-white" />
          </a>
          <a href="viber://chat?number=%2B1234567890" className="bg-purple-600 p-3 rounded-full shadow-lg">
            <FaViber className="text-white" />
          </a>
          <a href="https://wa.me/1234567890" className="bg-green-500 p-3 rounded-full shadow-lg">
            <FaWhatsapp className="text-white" />
          </a>
          <a href="https://t.me/username" className="bg-blue-400 p-3 rounded-full shadow-lg">
            <FaTelegramPlane className="text-white" />
          </a>
        </>
      )}
      <button onClick={toggleMenu} className="bg-blue-500 p-3 rounded-full shadow-lg">
        {isOpen ? <FiX className="text-black" /> : <FiPhone className="text-black" />}
      </button>
    </div>
  );
};

export default FloatingMenu;
