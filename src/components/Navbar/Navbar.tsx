import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import logo from '@app/assets/logo/logo.png';
import { paths } from '@app/routes/Routes.utils';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-16">
      {/* Desktop Navbar */}
      <div className="hidden w-full flex-row flex-wrap items-center justify-between pt-4 md:flex">
        <div className="flex flex-row items-center gap-1">
          <img src={logo} alt="logo" className="h-[310px] w-[310px] md:h-auto md:w-auto" />
          <span className="font-mochiy text-3xl text-primary">FoodFront</span>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center gap-10">
            <span
              onClick={() => navigate(paths.homepage)}
              className={`cursor-pointer uppercase hover:text-primary ${pathname === paths.homepage ? 'text-primary' : 'text-white'}`}>
              Home
            </span>
            <span
              onClick={() => navigate(paths.contactUs)}
              className={`cursor-pointer uppercase hover:text-primary ${pathname === paths.contactUs ? 'text-primary' : 'text-white'}`}>
              Contact
            </span>
          </div>
          <Button variant="contained">Book A Table</Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="absolute left-0 right-0 flex w-full flex-col">
        <div className="flex w-full items-center justify-between bg-text p-4 md:hidden">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <span className="font-mochiy text-2xl text-primary">FoodFront</span>
          </div>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex cursor-pointer items-center justify-center rounded-sm border border-white border-opacity-55 px-3">
            <i className="fas fa-bars text-xl text-white opacity-55"></i>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`flex w-full flex-col gap-4 bg-text p-4 px-6 text-white`}>
            <span
              onClick={() => {
                navigate(paths.homepage);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer hover:text-primary ${pathname === paths.homepage ? 'text-primary' : 'text-white'}`}>
              Home
            </span>
            <span
              onClick={() => {
                navigate(paths.contactUs);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer hover:text-primary ${pathname === paths.contactUs ? 'text-primary' : 'text-white'}`}>
              Contact
            </span>
            <Button variant="contained" className="max-w-max" onClick={() => setIsMenuOpen(false)}>
              Book A Table
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
