import React from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { useStyles } from './style';
import { Menu } from '@material-ui/icons';


function TopBar() {
const classes = useStyles();

    return(
        <div className={classes.root}>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default TopBar;