import React from 'react';
import cx from 'classnames';
import { Grid } from 'gatsby-theme-carbon/src/components/Grid';
import { main, padded } from './Main.module.scss';

const Main = (props) => (
  <Grid 
    className={cx(main, {
      [padded]: props.padded,
    })}
    {...props}
  />
);

export default Main;
