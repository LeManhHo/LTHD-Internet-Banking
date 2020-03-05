import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  IconButton,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const logoImg = require('../../images/logo.png');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  logo: {
    height: 50,
    width: 70,
    marginRight: 15,
  },
  logoImg: {
    width: '100%',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <RouterLink to="/" className={classes.logo}>
            <img className={classes.logoImg} alt="Logo" src={logoImg} />
          </RouterLink>
          <Typography variant="h6" className={classes.title}>
            TIGER BANK
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
