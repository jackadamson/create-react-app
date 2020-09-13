import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import { TitleContext } from '../../../contexts';
import useStyles from './styles';
import TopBar from './TopBar';
import SideNav, { routesPropType } from './SideNav';

const Layout = ({ children, routes }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState('My App');
  const handleToggle = () => setOpen((val) => !val);
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <Box display="flex">
        <TopBar open={open} handleToggle={handleToggle} />
        <SideNav open={open} handleToggle={handleToggle} routes={routes} />
        <div>
          <div className={classes.toolbar} />
          <main className={classes.content}>{children}</main>
        </div>
      </Box>
    </TitleContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  routes: routesPropType.isRequired,
};

export default Layout;
