import React from 'react';
import useStyles from './decoration-style';

export default function FormDeco() {
  const { classes } = useStyles();
  return (
    <div className={classes.formDeco}>
      <div className={classes.leftDeco} />
      <div className={classes.rightDeco} />
    </div>
  );
}
