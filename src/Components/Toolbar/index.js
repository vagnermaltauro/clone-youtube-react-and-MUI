import React from 'react';
import { useStyles } from './style';
import { Home, Whatshot, Subscriptions, VideoLibrary, History, AccountCircle, Settings, Help, Feedback } from '@material-ui/icons';
import { Drawer, Toolbar, ListItem, ListItemText, Divider, List, ListItemIcon, Box, Typography, Button, ListSubheader } from '@material-ui/core';

function ToolbarLeft() {
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
        <Box p={7} className={classes.boxLogin}>
          <Typography variant="body2" className={classes.copyright}>
            Faça o seu login para acessar o conteúdo exclusivo
          </Typography>
          <Box nt={2}>
            <Button size="large" variant="outlined" color="primary" startIcon={<AccountCircle/>}>Fazer Login</Button>
          </Box>
        </Box>
        <Divider />
        <ListSubheader component="div" >

            O MELHOR DO YOUTUBE

        </ListSubheader>
        <List>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<Settings />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }}
              primary={"Configurações"}
            />
          </ListItem>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<History />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }}
              primary={"Histórico"}
            />
          </ListItem>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<Help />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }}
              primary={"Ajuda"}
            />
          </ListItem>
          <ListItem button className={classes.btn}>
            <ListItemIcon>{<Feedback />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }}
              primary={"Feedback"}
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default ToolbarLeft;