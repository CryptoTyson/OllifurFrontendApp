import React from 'react';
import useStyles from './decoration-style';

export default function PageDeco() {
  const { classes } = useStyles();
  return (
    <div className={classes.pageDeco}>
      <div className={classes.leftDeco} />
      <div className={classes.rightDeco} />
    </div>
  );
}
