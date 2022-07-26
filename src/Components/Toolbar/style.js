import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    zIndex: -2,
    borderRight: "none",
  },
  listItemText: {
    fontSize: "14px",
  },
  btn: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  boxLogin: {
    display: "grid",
    justifyItems: "center",
  },
  copyright: {
    textAlign: "center",
  }
}));