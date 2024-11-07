import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import Avatar from '@mui/material/Avatar';
import Build from '@mui/icons-material/Build';
import Hidden from '@mui/material/Hidden';
import Settings from '@mui/icons-material/SettingsApplications';
import Warning from '@mui/icons-material/Warning';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)


import PageDeco from '~/components/Decoration/PageDeco';
import { useSpacing, useTextAlign, useText } from '~/theme/common';
import brand from '~/public/text/brand';

function Maintenance() {
  const { classes, cx } = useSpacing();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.retail.name + ' - Maintenance' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.colouredPage}>
        <Hidden mdDown>
          <PageDeco />
        </Hidden>
        <Container maxWidth="md">
          <div className={classes.fullScreenContainer}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item md={12} className={align.textCenter}>
                <Box display="flex" justifyContent="center">
                  <Avatar className={cx(classes.primaryIcon, classes.maintenanceIcon)}><Build /></Avatar>
                  <Hidden smDown>
                    <Avatar className={cx(classes.secondaryIcon, classes.maintenanceIcon)}><Settings /></Avatar>
                  </Hidden>
                  <Hidden smDown>
                    <Avatar className={cx(classes.accentIcon, classes.maintenanceIcon)}><Warning /></Avatar>
                  </Hidden>
                </Box>
                <div className={align.textCenter}>
                  <h3 className={text.title2}>
                    util_maintenance
                  </h3>
                  <h5 className={text.subtitle2}>
                    util_maintenance_dec
                  </h5>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)

export default Maintenance;
