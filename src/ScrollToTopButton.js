import React, { useState, useEffect, useRef } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const scrollTimeout = useRef(null);

  const handleScroll = () => {
    setShowButton(false);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setShowButton(true), 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowButton(false);
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed 
            right-5 
            bottom-10 
            w-12 
            h-12 
            rounded-full 
            border-2 
             border-text 
            flex 
            justify-center 
            items-center 
            cursor-pointer 
            z-50
            transform 
            transition 
            duration-200 
            hover:scale-110 
            active:scale-95 
            active:shadow-inner
          "
        >
          <img src="/img/up-btn.png" alt="Scroll to top" className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
