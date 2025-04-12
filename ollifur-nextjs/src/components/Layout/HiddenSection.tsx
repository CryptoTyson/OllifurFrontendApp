'use client';

import { ReactNode } from 'react';
import Hidden from '@mui/material/Hidden';
import { Breakpoint } from '@mui/material/styles';

interface HiddenSectionProps {
  children: ReactNode;
  breakpoint: Breakpoint;
  direction: 'up' | 'down';
}

export default function HiddenSection({
  children,
  breakpoint,
  direction,
}: HiddenSectionProps) {
  const props = {
    [`${direction}`]: breakpoint,
  };

  return <Hidden {...props}>{children}</Hidden>;
}
