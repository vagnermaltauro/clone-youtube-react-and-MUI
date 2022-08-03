import React from 'react';
import { useStyles } from './style';
import { Inbox, Mail } from '@material-ui/icons';
import { Drawer, Toolbar, ListItem, ListItemText, Divider, List} from '@material-ui/core';

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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItem>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItem>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItem>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItem>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    )
}

export default HomePage;