import React, {Component} from 'react';
import axios from 'axios';
//import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import { CloudUpload, VideoLibrary }from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Container, IconButton, Typography, Grid , AppBar, Toolbar } from '@material-ui/core';
import Upload from './components/Upload';
//import Videos from './components/Videos';
const styles =  theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  videoInsert: {
    width: 250
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos :  []
    };
  };

  componentDidMount() {
      axios
      .get(`http://localhost:3030/upload`)
      .then(res => {
      this.setState({videos: res.data});
      })
  };

  render() {
    const {classes}=this.props;
    return (
      <Container>
        <AppBar >
          <Toolbar>
            <IconButton variant="contained" color = "primary" href="/">
              <VideoLibrary color="secondary" />
            </IconButton>
            <IconButton variant="contained" color = "primary" href="/upload">
              <CloudUpload color="secondary" />
            </IconButton>
            <Typography variant="h2" component="h2" align="center" variant="h5" >
              VideoUpload 
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Route exact path="/Upload" component={Upload} />
        </Router>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {this.state.videos.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                  >
              <video className={classes.videoInsert} controls >
                <source src={`http://localhost:3030/${card}`}
                  type="video/webm" />
                Sorry, your browser doesn't support embedded videos.
              </video>
                    </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    );
  }
}
export default withStyles(styles,  { withTheme: true })(App);
//export default  App;
