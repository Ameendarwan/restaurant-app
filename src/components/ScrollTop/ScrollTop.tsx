import React from 'react';
import SVGIcon from '../SVGIcon';

const ScrollTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex w-full flex-row justify-end">
      <div
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm bg-primary"
        onClick={handleScrollToTop}>
        <SVGIcon icon="arrow-up" />
      </div>
    </div>
  );
};

export default ScrollTop;
