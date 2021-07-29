import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      className={classes.root}
    >
      <Toolbar>
        <p>DevFolio 2021</p>
        <p>모든 컨텐츠의 저작권은 Respository 소유자에게 있습니다.</p>
        <p>문의하기: devfolio.help@gmail.com</p>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

const useStyles = makeStyles({
  root: {
    padding: "36px 0",
    "& .MuiToolbar-root": {
      flexDirection: "column",
      margin: "auto",
      "& p": {
        margin: "initial",
      },
    },
  },
});
