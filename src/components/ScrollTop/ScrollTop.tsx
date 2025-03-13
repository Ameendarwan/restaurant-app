import React from 'react';

const ScrollTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex w-full flex-row justify-end">
      <div
        className="flex cursor-pointer items-center justify-center rounded-sm bg-primary p-4"
        onClick={handleScrollToTop}>
        <i className="fa-solid fa-arrow-up text-white"></i>
      </div>
    </div>
  );
};

export default ScrollTop;
