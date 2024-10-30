import React, { useState, useEffect, useRef, Fragment } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'next-i18next';
import useStyles from '../header-style';
import { Box, Grid, Stack, Typography } from '@mui/material';
import imgAPI from '../../../public/images/imgAPI';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface MultiLevelHoverProps {
  dataMenu: unknown[];
}

function MultiLevelHover(props: MultiLevelHoverProps) {
  const { classes, cx }: any = useStyles();
  const { dataMenu } = props;
  const { i18n } = useTranslation('common');

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  // Parent state
  const [open, setOpen] = useState(false);
  const [menuName, setName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef<HTMLLIElement | null>(null);
  const prevOpen = useRef(open);

  // Child state
  const [menuChild, setMenuChild] = useState({});
  const [anchorChild, setAnchorChild] = useState({});

  // Parent function
  const handleToggle = (event: any, name: React.SetStateAction<string>) => {
    setOpen((newOpen) => !newOpen);
    setName(name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setName('');
    setOpen(false);
    setMenuChild({});
    setAnchorChild({});
  };

  // Child function
  const handleToggleChild = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    parent: any,
    id: any,
  ) => {
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      if (parent.child[i].id !== id) {
        menuClose = {
          ...menuClose,
          [parent.child[i].id]: false,
        };
        anchorClose = {
          ...anchorClose,
          [parent.child[i].id]: null,
        };
      }
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
      [id]: true,
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
      [id]: event.currentTarget,
    });
  };

  const handleCloseChild = (event: any, parent: any) => {
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      menuClose = {
        ...menuClose,
        [parent.child[i].id]: false,
      };
      anchorClose = {
        ...anchorClose,
        [parent.child[i].id]: null,
      };
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
    });
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, [open]);

  const childMenu = (
    menu: { [x: string]: any },
    item: { id: string | number; child: any[] },
    anchor: { [x: string]: any },
  ) => (
    <Popper
      anchorEl={anchor[item.id] || null}
      open={menu[item.id] || false}
      placement="right-start"
      transition
      disablePortal
      sx={{
        borderRadius: '12px',
        border: '1px solid var(--Gray-200, #EAECF0)',
        background: 'var(--Base-White, #FFF)',
        boxShadow:
          '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center bottom' : 'center top',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="menu-list-grow">
                {item.child.map((subitem, index) => {
                  if (subitem.child) {
                    return (
                      <MenuItem
                        key={index.toString()}
                        onClick={handleClose}
                        onMouseEnter={(e) =>
                          handleToggleChild(e, item, subitem.id)
                        }
                      >
                        <ListItemText primary={subitem.name} />
                        {childMenu(menuChild, subitem, anchorChild)}
                        <ChevronRightIcon fontSize="small" />
                      </MenuItem>
                    );
                  }
                  return (
                    <MenuItem
                      key={index.toString()}
                      onMouseEnter={(e) => handleCloseChild(e, item)}
                      onClick={handleClose}
                      className={cx(
                        classes.menuList,
                        curURL === curOrigin + langPath + subitem.link
                          ? classes.current
                          : '',
                      )}
                    >
                      <ListItem
                        disableGutters
                        disableRipple
                        className={classes.link}
                        button
                        component="a"
                        href={subitem.link}
                      >
                        <ListItemText primary={subitem.name} />
                      </ListItem>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <ul className={classes.multiMenu}>
      {dataMenu.map(
        (
          item: { id: string; name: string; link: string; child: any },
          index,
        ) => (
          <Fragment key={index.toString()}>
            {item.child ? (
              <li
                onClick={(e) => handleToggle(e, item.name)}
                // onMouseEnter={(e) => handleToggle(e, item.name)}
                onMouseLeave={(e) => handleClose()}
                ref={anchorRef}
              >
                <div>
                  <Button
                    endIcon={
                      menuName === item.name ? (
                        <Icon>expand_more</Icon>
                      ) : (
                        <Icon>expand_less</Icon>
                      )
                    }
                  >
                    {item.name}
                  </Button>
                  <Popper
                    open={menuName === item.name}
                    anchorEl={anchorEl || null}
                    placement="bottom"
                    className={classes.multiMenuRoot}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <Grid
                              container
                              sx={{
                                width:
                                  menuName === 'Services'
                                    ? '640px'
                                    : 'fit-content',
                              }}
                            >
                              <Grid
                                item
                                sx={{
                                  padding: '0px',
                                  width: '336px',
                                }}
                              >
                                <MenuList
                                  autoFocusItem={open}
                                  id="menu-list-grow"
                                >
                                  {item.child.map(
                                    (
                                      subitem: {
                                        child: any;
                                        id: any;
                                        name?: any;
                                        link?: any;
                                        desc?: any;
                                      },
                                      indexChild: {
                                        toString: () =>
                                          | React.Key
                                          | null
                                          | undefined;
                                      },
                                    ) => {
                                      if (subitem.child) {
                                        return (
                                          <MenuItem
                                            key={indexChild.toString()}
                                            onClick={handleClose}
                                            onMouseEnter={(e) =>
                                              handleToggleChild(
                                                e,
                                                item,
                                                subitem.id,
                                              )
                                            }
                                            className={classes.menuList}
                                          >
                                            <ListItemText
                                              primary={subitem.name}
                                            />
                                            {childMenu(
                                              menuChild,
                                              subitem,
                                              anchorChild,
                                            )}
                                            <ChevronRightIcon fontSize="small" />
                                          </MenuItem>
                                        );
                                      }
                                      return (
                                        <MenuItem
                                          key={indexChild.toString()}
                                          onMouseEnter={(e) =>
                                            handleCloseChild(e, item)
                                          }
                                          onClick={handleClose}
                                          className={cx(
                                            classes.menuList,
                                            curURL ===
                                              curOrigin +
                                                langPath +
                                                subitem.link
                                              ? classes.current
                                              : '',
                                          )}
                                        >
                                          <ListItem
                                            disableGutters
                                            className={classes.link}
                                            button
                                            component="a"
                                            href={subitem.link}
                                          >
                                            <Grid
                                              container
                                              direction={'row'}
                                              flexWrap={'nowrap'}
                                              style={{
                                                width: '100%',
                                                minWidth: '240px',
                                                gap: '16px',
                                              }}
                                            >
                                              <Grid item xs={1}>
                                                <img
                                                  src={
                                                    imgAPI.dropdownImg[
                                                      subitem.id
                                                    ]
                                                  }
                                                  alt="Crematoriums"
                                                />
                                              </Grid>
                                              <Grid item xs={11}>
                                                <Stack
                                                  direction={'column'}
                                                  gap={'4px'}
                                                >
                                                  <Typography
                                                    style={{
                                                      color:
                                                        'var(--gray-900, #101828)',
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
                                                      color:
                                                        'var(--gray-600, #475467)',
                                                      fontFamily: 'Inter',
                                                      fontSize: '14px',
                                                      fontStyle: 'normal',
                                                      fontWeight: '400',
                                                      lineHeight: '20px',
                                                      textWrap: 'wrap',
                                                      textTransform: 'none',
                                                      minWidth: '100%',
                                                    }}
                                                  >
                                                    {subitem.desc}
                                                  </Typography>
                                                </Stack>
                                              </Grid>
                                            </Grid>
                                          </ListItem>
                                        </MenuItem>
                                      );
                                    },
                                  )}
                                </MenuList>
                              </Grid>
                              {menuName === 'Services' && (
                                <Grid
                                  item
                                  container
                                  sx={{
                                    padding: '24px',
                                    borderRadius: '8px',
                                    background: '#F9FAFB',

                                    width: '304px',
                                    height: '368px',
                                  }}
                                >
                                  <img
                                    src={'/images/Navbar-pic.png'}
                                    alt="Crematoriums"
                                    style={{
                                      borderRadius: '8px',
                                      width: '240px',
                                      height: '136px',
                                      flexShrink: '0',
                                      objectFit: 'cover',
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
                                    Read about how to give your companion a
                                    loving & dignified goodbye.
                                  </Typography>
                                  <Stack direction={'row'}>
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
                                </Grid>
                              )}
                            </Grid>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </li>
            ) : (
              <li key={index.toString()}>
                <div>
                  <Button href={item.link}>{item.name}</Button>
                </div>
              </li>
            )}
          </Fragment>
        ),
      )}
    </ul>
  );
}

export default MultiLevelHover;
