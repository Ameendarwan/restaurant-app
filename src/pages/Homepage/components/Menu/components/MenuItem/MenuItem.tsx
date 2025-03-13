import React, { FC } from 'react';

import { Divider } from '@mui/material';
import { MenuItem } from '../../Menu.types';

interface MenuItemsProps {
  item: MenuItem;
}
const MenuItemCard: FC<MenuItemsProps> = ({ item }) => {
  return (
    <div className="flex w-full flex-row gap-6">
      <img src={item.image} alt="food" className="h-[80px] w-[80px]" />
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-row justify-between">
          <span className="flex-1 text-start text-xl font-bold text-text">{item.title}</span>
          <span className="flex-1 text-end text-xl font-bold text-primary">{item.price}</span>
        </div>
        <Divider orientation="horizontal" />
        <span className="text-start text-sm text-secondary">{item.description}</span>
      </div>
    </div>
  );
};

export default MenuItemCard;
