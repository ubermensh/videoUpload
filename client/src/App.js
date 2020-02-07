import React, {Component} from 'react';
import axios from 'axios';
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
const BASE_URL = process.env.REACT_APP_BASE_URL;

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos :  []
    };
    this.setVideos = this.setVideos.bind(this);
  };

  componentDidMount() {
      axios
      .get(`${BASE_URL}/files`)
      .then(res => {
      this.setState({videos: res.data});
      })
  };
  setVideos(videos) {
    this.setState({videos});
    }

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
            <Typography  component="h2" align="center" variant="h5" >
              VideoUpload 
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Route exact path="/upload" >
          <Upload setVideos= {this.setVideos} />
        </Route>
        </Router>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {this.state.videos.map(video=> (
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
      </Container>
    );
  }
}
export default withStyles(styles,  { withTheme: true })(App);
