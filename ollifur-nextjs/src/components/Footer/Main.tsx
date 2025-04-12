'use client';

import React, { useReducer } from 'react';
import uiState from '@/lib/config'; // Updated path
import SiteMap from './SiteMap';
import Blog from './Blog';
import Contact from './Contact';
import Basic from './Basic';

// Define state and props types
interface FooterState {
  footer: 'basic' | 'blog' | 'contact' | 'sitemap';
}

interface MainProps {
  toggleDir?: (dir: string) => void; // Assuming toggleDir takes a string
}

// Simple reducer that just returns the initial state
function footerReducer(state: FooterState): FooterState {
  return state;
}

const initialState: FooterState = {
  footer: uiState.footer as FooterState['footer'],
};

function Main(props: MainProps) {
  // Use the reducer correctly
  const [state] = useReducer(footerReducer, initialState);
  const { toggleDir } = props;

  return (
    <div>
      {state.footer === 'basic' && <Basic />}
      {state.footer === 'blog' && <Blog toggleDir={toggleDir} />}
      {state.footer === 'contact' && <Contact />}
      {state.footer === 'sitemap' && <SiteMap toggleDir={toggleDir} />}
    </div>
  );
}

// Removed PropTypes

Main.defaultProps = {
  toggleDir: () => {},
};

export default Main;
