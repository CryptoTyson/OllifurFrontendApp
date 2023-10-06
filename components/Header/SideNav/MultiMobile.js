import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import { useTranslation } from 'next-i18next';
import { ListItemButton } from '@mui/material';
import link from '~/public/text/link';
import useStyles from '../sidenav-style';
import navMenu from '../data/multiple';

function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const [expand, setExpand] = useState({});
  const { t, i18n } = useTranslation('common');

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (id) => {
    setExpand({
      ...expand,
      [id]: !expand[id],
    });
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  const childMenu = (menu, item) => (
    <Collapse in={menu[item.id] || false} timeout="auto" unmountOnExit>
      <List className={classes.sideGroup} component="div" disablePadding>
        {item.child.map((subitem, index) => {
          if (subitem.child) {
            return (
              <div key={index.toString()}>
                <ListItemButton
                  className={cx(
                    menu[subitem.id] ? classes.current : '',
                    classes.hasGrandChild,
                  )}
                  onClick={() => handleToggle(subitem.id)}
                >
                  {menu[subitem.id] ? <ArrowDropUp /> : <ArrowDropDown />}
                  <ListItemText
                    className={classes.menuList}
                    primary={subitem.name}
                  />
                </ListItemButton>
                {childMenu(expand, subitem)}
              </div>
            );
          }
          return (
            <ListItemButton
              key={index.toString()}
              className={cx(
                classes.noChild,
                classes.sideGroupLink,
                curURL === curOrigin + langPath + subitem.link
                  ? classes.current
                  : '',
              )}
              component="a"
              href={subitem.link}
            >
              <ListItemText
                className={classes.menuList}
                primary={subitem.name}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Collapse>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav,
      }}
    >
      <div className={classes.mobileNav} role="presentation">
        <div className={open ? classes.menuOpen : ''}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.sideMultilv}
          >
            {navMenu.map((item, index) => {
              if (item.child) {
                return (
                  <div key={index.toString()}>
                    <ListItemButton
                      className={expand[item.id] ? classes.currentParent : ''}
                      onClick={() => handleToggle(item.id)}
                    >
                      <ListItemText
                        className={classes.menuList}
                        primary={item.name}
                      />
                      {expand[item.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {childMenu(expand, item)}
                  </div>
                );
              }
              return (
                <ListItemButton
                  key={index.toString()}
                  className={cx(
                    classes.noChild,
                    curURL === curOrigin + langPath + item.link
                      ? classes.current
                      : '',
                  )}
                  href={item.link}
                >
                  <ListItemText
                    className={classes.menuList}
                    primary={item.name}
                  />
                </ListItemButton>
              );
            })}
          </List>
          <Divider />
          <List className={classes.userMenu}>
            {['login', 'register'].map((text, index) => (
              <ListItem
                key={index.toString()}
                className={cx(
                  classes.noChild,
                  curURL === curOrigin + langPath + '/' + text
                    ? classes.current
                    : '',
                )}
                component="a"
                href={link.retail[text]}
                button
              >
                <ListItemText
                  className={classes.menuList}
                  primary={t('' + text)}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
