import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Typography, Grid } from '@material-ui/core';
import VideoElement from './VideoElement';
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
class VideoList extends Component {
  render() {
    const {classes}=this.props;
    return (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {this.props.videos.map(video=> (
              <VideoElement key={video} video={video} />
            ))}
          </Grid>
        </Container>
    );
  }
}
export default withStyles(styles,  { withTheme: true })(VideoList);
