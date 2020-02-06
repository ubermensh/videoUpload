import React, {Component} from 'react';
import axios from 'axios';

import { CloudUpload, VideoLibrary }from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Container, IconButton, Box, Paper, Typography, Grid , AppBar, Toolbar, Button  } from '@material-ui/core';
import Upload from './components/Upload';

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
      console.log(res);
      
    })
  };

  render() {
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
        <Box mt={2}>
          <Paper >
          </Paper>
        </Box>

        <Router>
          <Route exact path="/Upload" component={Upload} />
        </Router>
      </Container>
    );
  }
}
export default App;
