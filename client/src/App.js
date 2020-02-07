import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Typography, Grid } from '@material-ui/core';
import Upload from './components/Upload';
import Header from './components/Header';
import VideoList from './components/VideoList';
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
        <Header />
        <Router>
          <Route exact path="/upload" >
          <Upload setVideos= {this.setVideos} />
        </Route>
        </Router>
        <VideoList videos={this.state.videos} />
      </Container>
    );
  }
}
export default withStyles(styles,  { withTheme: true })(App);
