import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from '@material-ui/core';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const styles =  theme => ({
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
class VideoElement extends Component {
  render() {
    const {classes}=this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia} >
            <video className={classes.videoInsert} controls >
              <source src={`${BASE_URL}/video/${this.props.video}`}
                type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.video}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
export default withStyles(styles,  { withTheme: true })(VideoElement);
