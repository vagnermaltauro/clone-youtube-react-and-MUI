import React from 'react';
import { useStyles } from './style';
import { Home, Whatshot, Subscriptions, VideoLibrary, History } from '@material-ui/icons';
import { Drawer, Toolbar, ListItem, ListItemText, Divider, List, ListItemIcon } from '@material-ui/core';

function HomePage() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<Home />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} 
            primary={"Inicio"} 
            />
          </ListItem>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} 
            primary={"Em Alta"} 
            />
          </ListItem>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} 
            primary={"Inscrições"} 
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} 
            primary={"Biblioteca"} 
            />
          </ListItem>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<History />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} 
            primary={"Histórico"} 
            />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  )
}

export default HomePage;