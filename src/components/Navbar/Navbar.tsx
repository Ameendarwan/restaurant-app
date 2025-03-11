import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="absolute" color="transparent" className="shadow-none">
        <Toolbar className="flex justify-between px-6 lg:px-16">
          <h1 className="text-xl font-bold text-orange-400">FoodFront</h1>
          <div className="hidden space-x-6 md:flex">
            <Button className="text-white">Home</Button>
            <Button className="text-white">Contact</Button>
            <Button className="rounded-md bg-orange-400 px-4 py-2 text-white">Book A Table</Button>
          </div>
          <IconButton className="text-white md:hidden" onClick={() => setMobileOpen(true)}>
            <MenuIcon />
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
    </>
  );
};

export default Navbar;
