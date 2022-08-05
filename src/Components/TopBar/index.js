import React from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { useStyles } from './style';
import { Menu, AccountCircle, VideoCall, Apps, MoreVert } from '@material-ui/icons';

function TopBar() {
const classes = useStyles();

    return(
        <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuIcon} color="inherit">
              <Menu />
            </IconButton>
            <img className={classes.logo} src="/images/preto.png" />
            <div className={classes.grow} />
            <IconButton className={classes.menuButton} color="inherit">
              <VideoCall />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit">
              <Apps />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit">
              <MoreVert />
            </IconButton>
            <Button startIcon={<AccountCircle />} variant="outlined" color="primary">Fazer Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default TopBar;