import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import axios from 'axios';

import CloudUpload from '@material-ui/icons/CloudUpload';
import { Avatar, Button, CssBaseline,  Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none',
  },
});

class Upload extends Component {

  constructor(props) {
    super(props);
  };

   onFileChangeHandler = async  (e) => {
    e.preventDefault();
    console.log(this.props.setVideos);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const res = await axios({
    method: 'post',
    url: 'http://localhost:3030/upload',
    data: formData,
    headers: {'Content-Type': 'multipart/form-data' }
    });
     console.log('res',res);
    this.props.setVideos(res.data);
    //fetch('http://localhost:3030/upload', {
      //method: 'post',
      //body: formData
    //}).then(res => {
      //console.log(res.data);
        //alert(res.data);
    //});
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CloudUpload />
          </Avatar>
          <form method='post' action='upload' encType="multipart/form-data" className={classes.form} onSubmit={this.onSubmit}>
            <input
              accept="video/*"
              className={classes.input}
              id="raised-button-file"
              type="file"
              onChange={this.onFileChangeHandler}
            />
            <label htmlFor="raised-button-file">
              <Button raised="true" component="span" className={classes.submit}
                fullWidth
                variant="contained"
                color="primary"
              >
                Upload video
              </Button>
            </label>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles,  { withTheme: true })(Upload));
