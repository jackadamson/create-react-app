import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { TitleContext } from '../../../contexts';
import useStyles from './styles';

const TopBar = ({ open, handleToggle }) => {
  const classes = useStyles();
  const { title } = useContext(TitleContext);
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggle}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
export default TopBar;
