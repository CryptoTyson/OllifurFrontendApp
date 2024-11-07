import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';

import { Box, Grid, ListItemButton, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStyles from '../sidenav-style';
import navMenu from '../data/multiple';
import imgAPI from '../../../public/images/imgAPI';

function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const [expand, setExpand] = useState({});

  const handleToggle = (id) => {
    setExpand({
      ...expand,
      [id]: !expand[id],
    });
  };

  const childMenu = (menu, item) => (
    <Collapse in={menu[item.id] || false} timeout="auto" unmountOnExit>
      <List
        className={classes.sideGroup}
        component="div"
        disablePadding
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 0px 0px 0px',
          paddingBottom: item.name === 'Services' ? '0px' : '24px',
        }}
      >
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
              component="a"
              href={subitem.link}
              sx={{ padding: '12px 16px' }}
            >
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                flexWrap="nowrap"
                style={{ width: '100%', gap: '16px' }}
              >
                <Grid item xs={1}>
                  <img
                    src={imgAPI.dropdownImg[subitem.id]}
                    alt="Crematoriums"
                  />
                </Grid>
                <Grid item xs={11}>
                  <Stack direction="column">
                    <Typography
                      style={{
                        color: 'var(--gray-900, #101828)',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                      }}
                    >
                      {subitem.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'var(--gray-600, #475467)',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '20px',
                        textWrap: 'wrap',
                      }}
                    >
                      {subitem.desc}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </ListItemButton>
          );
        })}
        {item.name === 'Services' && (
          <Box
            sx={{
              padding: '24px',
              borderRadius: '8px',
              background: '#F9FAFB',
              padding: '32px 16px',
            }}
          >
            <img
              src="/images/Navbar-pic.png"
              alt="Crematoriums"
              style={{
                borderRadius: '8px',
                flexShrink: '0',
                objectFit: 'cover',
                width: '100%',
                marginBottom: '24px',
              }}
            />
            <Typography
              sx={{
                color: 'var(--Gray-900, #101828)',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24px',
              }}
            >
              Navigating the Loss of Your Loyal Companion
            </Typography>
            <Typography
              sx={{
                color: 'var(--Gray-600, #475467)',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '20px',
              }}
            >
              Read about how to give your companion a loving & dignified
              goodbye.
            </Typography>
            <Stack direction="row" sx={{ marginTop: '12px' }}>
              <Typography
                color="primary"
                sx={{
                  color: 'var(--Primary-600, #D77F33)',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px',
                  cursor: 'pointer',
                }}
              >
                Read More
              </Typography>
              <ArrowForwardIcon
                sx={{
                  marginLeft: '8px',
                  height: '20px',
                  width: '20px',
                  color: '#D77F33',
                  cursor: 'pointer',
                }}
              />
            </Stack>
          </Box>
        )}
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
            // className={classes.sideMultilv}
          >
            {navMenu.map((item, index) => {
              if (item.child) {
                return (
                  <div key={index.toString()}>
                    <ListItemButton
                      sx={{ padding: '12px 16px', marginBottom: '8px' }}
                      onClick={() => handleToggle(item.id)}
                    >
                      {/* <ListItemText
                        className={classes.menuList}
                        primary={item.name}
                      /> */}
                      <Stack
                        direction="row"
                        width="100%"
                        justifyContent="space-between"
                      >
                        <Typography
                          sx={{
                            color: 'var(--Gray-900, #101828)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '24px',
                          }}
                        >
                          {item.name}
                        </Typography>
                        {expand[item.id] ? <ExpandLess /> : <ExpandMore />}
                      </Stack>
                    </ListItemButton>
                    {childMenu(expand, item)}
                  </div>
                );
              }
              return (
                <ListItemButton
                  key={index.toString()}
                  href={item.link}
                  sx={{ padding: '12px 16px', marginBottom: '8px' }}
                >
                  <Typography
                    sx={{
                      color: 'var(--Gray-900, #101828)',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '24px',
                    }}
                  >
                    {item.name}
                  </Typography>
                </ListItemButton>
              );
            })}
          </List>
          {/* <Divider /> */}
          {/* <List className={classes.userMenu}>
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
          </List> */}
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
