import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import UploadElement from './components/UploadElement';
import Header from './components/Header';
import VideoList from './components/VideoList';
const BASE_URL = process.env.REACT_APP_BASE_URL;


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
    return (
      <Container>
        <Header />
        <Router>
          <Route exact path="/upload" >
          <UploadElement setVideos= {this.setVideos} />
        </Route>
        </Router>
        <VideoList videos={this.state.videos} />
      </Container>
    );
  }
}
export default App;
