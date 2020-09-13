import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import useStyles from './styles';

const SideNav = ({ open, handleToggle, routes }) => {
  const classes = useStyles();
  return (
    <Drawer
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      anchor="left"
      variant="permanent"
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map(({ title, icon: PathIcon, path }) => (
          <ListItem button key={path} component={Link} to={path}>
            <ListItemIcon>
              <PathIcon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export const routesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
  }),
);
SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  routes: routesPropType.isRequired,
};
export default SideNav;
