import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid } from '@material-ui/core';
import VideoElement from './VideoElement';
const styles =  theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
