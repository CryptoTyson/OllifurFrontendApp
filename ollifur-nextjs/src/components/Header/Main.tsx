'use client';

import React, { useReducer } from 'react';
import uiState from '@/lib/config'; // Updated path
import Mixed from './Mixed';
import Mega from './Mega';
import DropList from './DropList';
import NavScroll from './NavScroll';
import Search from './Search';
import Basic from './Basic';
import Blog from './BlogHeader';
import Hamburger from './Hamburger';

// Define state and props types
type HeaderType =
  | 'mixed'
  | 'droplist'
  | 'mega'
  | 'navscroll'
  | 'hamburger'
  | 'basic'
  | 'search'
  | 'blog';

interface HeaderState {
  header: HeaderType;
}

interface MainProps {
  home?: boolean;
  onToggleDark: () => void; // Assuming simple toggle functions
  onToggleDir: () => void; // Assuming simple toggle functions
}

// Simple reducer that just returns the initial state
function headerReducer(state: HeaderState): HeaderState {
  return state;
}

const initialState: HeaderState = {
  header: uiState.header as HeaderType, // Cast to ensure type safety
};

function Main(props: MainProps) {
  // Use the reducer correctly
  const [state] = useReducer(headerReducer, initialState);
  const { home, onToggleDark, onToggleDir } = props;

  // Determine which header component to render based on state
  let HeaderComponent;
  switch (state.header) {
    case 'mixed':
      HeaderComponent = (
        <Mixed
          home={home}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
      );
      break;
    case 'mega':
      HeaderComponent = (
        <Mega onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
      );
      break;
    case 'droplist':
      HeaderComponent = (
        <DropList onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
      );
      break;
    case 'navscroll':
      HeaderComponent = (
        <NavScroll
          home={home}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
      );
      break;
    case 'search':
      HeaderComponent = (
        <Search onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
      );
      break;
    case 'basic':
      HeaderComponent = (
        <Basic onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
      );
      break;
    case 'blog':
      HeaderComponent = (
        <Blog onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
      );
      break;
    case 'hamburger':
      HeaderComponent = (
        <Hamburger
          home={home}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
      );
      break;
    default:
      HeaderComponent = null; // Or a default header
  }

  return <div>{HeaderComponent}</div>;
}

// Removed PropTypes

Main.defaultProps = {
  home: false,
};

export default Main;
