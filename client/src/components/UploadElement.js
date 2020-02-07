import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import axios from 'axios';

import CloudUpload from '@material-ui/icons/CloudUpload';
import { Avatar, Button, CssBaseline,  Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
const BASE_URL = process.env.REACT_APP_BASE_URL;

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

class UploadElement extends Component {

  handleChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios({
        method: 'post',
        url: `${BASE_URL}/files`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      this.props.setVideos(res.data);
      console.log('res', res);
    } catch (error) {
      if (error.response.status === 409) {
        alert('duplicate video');
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CloudUpload />
          </Avatar>
          <form className={classes.form} >
            <input
              accept="video/*"
              className={classes.input}
              id="raised-button-file"
              type="file"
              onChange={this.handleChange}
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

export default withRouter(withStyles(styles,  { withTheme: true })(UploadElement));
