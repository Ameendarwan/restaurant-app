import React from 'react';

const ScrollTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex w-full flex-row justify-end">
      <div
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm bg-primary"
        onClick={handleScrollToTop}>
        <i className="fa-solid fa-arrow-up text-white"></i>
      </div>
    </div>
  );
};

export default ScrollTop;
