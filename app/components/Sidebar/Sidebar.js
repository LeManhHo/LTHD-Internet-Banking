import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
// import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
// import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Danh sách tài khoản',
      href: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Thiết lập danh sách người nhận',
      href: '/sign-in',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Chuyển khoản',
      href: '/users',
      icon: <PeopleIcon />,
    },
    {
      title: 'Chuyển tiền trong ngân hàng',
      href: '/users',
      icon: <PeopleIcon />,
    },
    {
      title: 'Chuyển tiền liên ngân hàng',
      href: '/products',
      icon: <ShoppingBasketIcon />,
    },
    {
      title: 'Quản lý nhắc nợ',
      href: '/typography',
      icon: <TextFieldsIcon />,
    },
    {
      title: 'Lịch sử giao dịch',
      href: '/icons',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
