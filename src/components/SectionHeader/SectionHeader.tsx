import React, { FC } from 'react';

import { Divider } from '@mui/material';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  title: string;
  hideLeftDivider?: boolean;
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, hideLeftDivider, className }) => {
  return (
    <div className={`flex flex-row items-center justify-center gap-2 ${className}`}>
      {!hideLeftDivider && (
        <Divider orientation="horizontal" className={twMerge('h-[2px] w-[45px] !border-none bg-primary')} />
      )}
      <span className="!font-mochiy !text-xl text-primary">{title}</span>
      <Divider orientation="horizontal" className={twMerge('h-[2px] w-[45px] !border-none bg-primary')} />
    </div>
  );
};

export default SectionHeader;
