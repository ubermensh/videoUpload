import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Typography, Grid } from '@material-ui/core';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const styles =  theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '10%', 
    paddingLeft: '5px',
  },
  cardContent: {
    flexGrow: 1,
  },
  videoInsert: {
    width: 250
  }
});
class Header extends Component {
  render() {
    const {classes}=this.props;
    return (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {this.props.videos.map(video=> (
              <Grid item key={video} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                  >
              <video className={classes.videoInsert} controls >
                <source src={`${BASE_URL}/video/${video}`}
                  type="video/webm" />
                Sorry, your browser doesn't support embedded videos.
              </video>
                    </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {video}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    );
  }
}
export default withStyles(styles,  { withTheme: true })(Header);
