import React, { FC, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { menuData, tabLabels } from '@app/mock/data';

import MenuItem from './components/MenuItem/MenuItem';
import SectionHeader from '@app/components/SectionHeader';

const MenuTabs: FC = () => {
  const [value, setValue] = useState(0);
  const menuCategories = ['breakfast', 'lunch', 'dinner'];

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="w-full px-6 pb-16 text-center md:px-48 md:pt-28" id="menu">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:gap-2">
          <SectionHeader title="Food Menu" />
          <span className="text-[28px] !font-bold text-text md:text-[40px]">Most Popular Items</span>
        </div>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="menu categories"
            centered
            className="m-auto max-w-max border-b-[1px]">
            {tabLabels.map((tab, index) => (
              <Tab
                key={index}
                className={`!pl-0 ${index === tabLabels.length - 1 ? '!pr-0' : 'max-sm:!pr-4 md:!pr-7'} `}
                label={
                  <div className="mb-2 flex flex-row gap-3">
                    <i className={`${tab.iconClass}`}></i>
                    <div className="flex flex-col items-start justify-start">
                      <span className="text-sm text-secondary max-sm:text-xs">{tab.description}</span>
                      <span className="text-base font-bold text-text max-sm:text-sm">{tab.label}</span>
                    </div>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="relative mt-10 min-h-[900px] md:min-h-[600px] lg:min-h-[400px]">
        {menuCategories.map((category, index) => (
          <div
            key={index}
            className={`ease-in-out', absolute inset-0 transform transition-all duration-500 ${value === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}>
            <div className="flex w-full flex-col items-center gap-8 md:flex-row">
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
    </section>
  );
};

export default MenuTabs;
