import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import React from 'react';
import logo from '@app/assets/logo/logo.png';
import { paths } from '@app/routes/Routes.utils';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <div className="hidden w-full flex-row flex-wrap items-center justify-between md:flex">
        <div className="flex flex-row items-center gap-1">
          <img src={logo} alt="logo" className="h-[310px] w-[310px] md:h-auto md:w-auto" />
          <span className="font-mochiy text-3xl text-primary">FoodFront</span>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center gap-10">
            <span
              onClick={() => navigate(paths.homepage)}
              className={`cursor-pointer hover:text-primary ${pathname === paths.homepage ? 'text-primary' : 'text-white'} `}>
              Home
            </span>
            <span
              onClick={() => navigate(paths.contactUs)}
              className={`cursor-pointer hover:text-primary ${pathname === paths.contactUs ? 'text-primary' : 'text-white'} `}>
              Contact
            </span>
          </div>
          <Button variant="contained">Book A Table</Button>
        </div>
      </div>
      <div className="hidden max-sm:flex">
        <AppBar position="absolute" color="transparent" className="shadow-none">
          <Toolbar className="flex justify-between px-6 lg:px-16">
            <h1 className="text-xl font-bold text-orange-400">FoodFront</h1>
            <div className="hidden space-x-6 md:flex">
              <Button className="text-white">Home</Button>
              <Button className="text-white">Contact</Button>
              <Button className="rounded-md bg-orange-400 px-4 py-2 text-white">Book A Table</Button>
            </div>
            <IconButton className="text-white md:hidden" onClick={() => setMobileOpen(true)}>
              {/* <MenuIcon /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <List>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Book A Table" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
