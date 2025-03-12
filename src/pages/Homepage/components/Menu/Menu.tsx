import { Divider, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

import MenuItem from './components/MenuItem/MenuItem';
import { TabLabel } from './Menu.types';
import { menuData } from './Menu.utils';
import { twMerge } from 'tailwind-merge';

const tabLabels: TabLabel[] = [
  { label: 'Popular Breakfast', description: 'Popular', icon: <i className="fas fa-coffee !h-[40px]"></i> },
  { label: 'Special Lunch', description: 'Special', icon: <i className="fas fa-hamburger"></i> },
  { label: 'Lovely Dinner', description: 'Lovely', icon: <i className="fas fa-utensils"></i> },
];

const MenuTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const menuCategories = ['breakfast', 'lunch', 'dinner'];

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full p-3 text-center">
      <div className="mb-4 flex flex-row items-center justify-center gap-2">
        <Divider orientation="horizontal" className={twMerge('h-[2px] w-[45px] !border-none bg-primary')} />
        <span className="!font-mochiy !text-xl text-primary">Food Menu</span>
        <Divider orientation="horizontal" className={twMerge('h-[2px] w-[45px] !border-none bg-primary')} />
      </div>
      <span className={twMerge('text-text !text-[40px] !font-bold')}>Most Popular Items</span>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="menu categories" centered>
          {tabLabels.map((tab, index) => (
            <Tab
              key={index}
              label={
                <div className="flex flex-row">
                  <span>{tab.icon}</span>
                  <div className="flex flex-col gap-2">
                    <span>{tab.description}</span>
                    <span>{tab.label}</span>
                  </div>
                </div>
              }
            />
          ))}
        </Tabs>
      </div>
      <div className="relative mt-10">
        {menuCategories.map((category, index) => (
          <div
            key={index}
            className={twMerge(
              'absolute inset-0 transform transition-all duration-500 ease-in-out',
              value === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
            )}>
            <div className="flex w-full flex-col items-center gap-8 px-5 md:flex-row md:px-48">
              <div className="flex flex-1 flex-col gap-4">
                {menuData[category].map((item, idx) => (
                  <MenuItem key={idx} item={item} />
                ))}
              </div>
              <div className="flex flex-1 flex-col gap-4">
                {menuData[category].map((item, idx) => (
                  <MenuItem key={idx} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
