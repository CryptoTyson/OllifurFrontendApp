import React, { useState, useEffect, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo';
import link from '../../public/text/link';
import UserMenu from './TopNav/UserMenu';
import useStyles from './header-style';
import multiple from './data/multiple';
import MultiLevel from './TopNav/MultiLevelHover';
import MobileMenu from './SideNav/MultiMobile';
import { Button } from "../../components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon } from 'lucide-react';

interface HeaderProps {
  onToggleDark(...args: unknown[]): unknown;
  onToggleDir(...args: unknown[]): unknown;
}

function Header(props: HeaderProps) {
  const [fixed, setFixed] = useState(false);

  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const { classes, cx }: any = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const navItems = [
    { label: "Home", hasDropdown: false, link: "/" },
    { label: "Services", hasDropdown: true, link: "/services" },
    { label: "Resources", hasDropdown: true, link: "/resources" },
    { label: "About us", hasDropdown: false, link: "/contact-us" },
  ];

  return (
    <Fragment>
      {isMobile && (
        <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
      )}
      <AppBar
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer,
        )}
      >
          <div className={`flex justify-between items-center ${isDesktop ? 'w-full' : null} h-16 ${fixed ? 'm-0' : 'm-6'} ${(fixed && isDesktop)? 'px-6' : null}`}>
            
          <div className={`flex justify-between items-center ${fixed ? "w-full px-6" : "w-[92%]"} h-16`}>
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  className="w-8 h-8 object-cover"
                  alt="Ollifur removebg"
                  src="/ollifur.png"
                />
              </div>
              <div className={`font-bold ${fixed ? 'text-[#252b37]' : 'text-white'} text-4xl`}>
                Ollifur
              </div>
            </div>

            {/* Navigation */}
            {isDesktop && (
              <div className="w-[611px] h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex max-sm:flex-row items-center justify-between sm:p-4 sm:px-6">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <span className="font-semibold text-gray-600 text-base leading-6" onClick={() => window.location.href = item.link}>
                          {item.label}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </div>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                className="bg-[#d77f33e6] border-[#d77f33] text-white rounded-lg"
                size="sm"
              >
                Immediate need
              </Button>
            </div>
            )}
          </div>
            {isMobile && (
              <div className="w-12 h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex items-center justify-center">
              <IconButton
                onClick={handleOpenDrawer}
                className={cx(
                  'hamburger hamburger--spin',
                  classes.mobileMenu,
                  openDrawer && 'is-active',
                )}
                size="large"
              >
                <span className="hamburger-box">
                  <span className={cx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
            </div>
            )}
          </div>
      </AppBar>
    </Fragment>
  );
}

export default Header;
