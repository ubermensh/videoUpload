import React, {Component} from "react";
import { IconButton, Typography, AppBar, Toolbar } from '@material-ui/core';
import { CloudUpload, VideoLibrary }from '@material-ui/icons';
class Header extends Component {

  render() {
    return (
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
    );
  }
}
export default Header;
