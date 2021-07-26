import React from "react";
import { makeStyles, Button, Grid } from "@material-ui/core";

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6} className={classes.heroMain}>
        <p>다른 개발자들은 어떤 포트폴리오를 만들었을까?</p>
        <img className={classes.logo} src="assets/logo.png" alt="logo" />
        <p className={classes.heroMessage}>개발자 포트폴리오 큐레이션 서비스</p>
        <div className={classes.mdHidden}>
          <img className={classes.heroImage} src="assets/hero.jpg" alt="hero" />
        </div>
        <p className={classes.smHidden}>
          선배・동료 개발자들의 포트폴리오 혹은 토이 프로젝트를 한눈에 모아보고,
          좋은 프로젝트는 더 많은 사람들과 공유해보세요.
        </p>
        <Button
          color="primary"
          variant="contained"
          href="https://page.stibee.com/subscriptions/129317"
          target="_blank"
          onClick={() => window.gtag("event", "서비스 오픈 알림 클릭")}
          className={classes.button}
        >
          서비스 오픈 알림 받기
        </Button>
        <Button
          color="secondary"
          variant="contained"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdXQaXRohcJHLI1rh4lNQsCPGTMMplppgg7bCGS6WOlxVCi2Q/viewform"
          target="_blank"
          onClick={() => window.gtag("event", "프로젝트 공유 클릭")}
          className={classes.button}
        >
          프로젝트 공유하기
        </Button>
        <p className={classes.mdHidden}>
          선배・동료 개발자들의 개인 프로젝트를 한눈에 모아보고, 좋은 프로젝트는
          더 많은 사람들과 공유해보세요.
        </p>
      </Grid>
      <Grid item xs={12} md={6} className={classes.smHidden}>
        <img className={classes.heroImage} src="assets/hero.jpg" alt="hero" />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "100%",
    margin: "20px auto",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      margin: "40px auto 20px auto",
    },
  },
  heroMain: {
    marginTop: "auto",
    marginBottom: "auto",
    "& p": {
      fontSize: "18px",
    },
  },
  heroMessage: {
    fontWeight: "bold",
    fontSize: "24px !important",
    marginBottom: "48px",
  },
  heroImage: {
    width: "100%",
  },
  button: {
    marginTop: "36px",
    marginRight: "12px",
    marginBottom: "12px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  mdHidden: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  smHidden: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default Hero;
