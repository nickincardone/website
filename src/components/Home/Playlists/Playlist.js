import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Skeleton from '@material-ui/lab/Skeleton';
import { Hidden } from "@material-ui/core";
import tagData from "../../../tags";

const playlist = (props) => {

  function Iframe(uri) {
    return (
      <Grid item sm={12} md={4}>
        <div className="nji-relative" style={{ height: "100%", "min-height": "175px" }}>
          <Skeleton variant="rect" animation="wave"/>
          <iframe src={"https://open.spotify.com/embed/playlist/" + uri} width="300"
                  height="380" frameBorder="0" allowTransparency="true"
                  allow="encrypted-media"
                  title={uri}/>
        </div>
      </Grid>
    );
  }

  function hiddenOnXs(uri) {
    return (
      <Hidden smDown>
        {Iframe(uri)}
      </Hidden>
    )
  }

  function showOnXs(uri) {
    return (
      <Hidden mdUp>
        {Iframe(uri)}
      </Hidden>
    )
  }

  function generateChips(tags) {
    return tags.map((tag, index) => {
      const tagInfo = tagData.find(data => {
        return tag === data.id;
      });
      return (
        <Chip key={index} variant="outlined" size="small" label={tagInfo.name}/>
      );
    })
  }

  return (
    <React.Fragment>
      {props.even ? Iframe(props.playlist.spotifyURI) : showOnXs(props.playlist.spotifyURI)}
      <Grid item sm={12} md={8} className="nji-relative">
        <Typography variant="h4">{props.playlist.name}</Typography>
        <Typography variant="body1">{props.playlist.description}</Typography>
        <Grid container className="nji-playlists-chips">
          <Grid item sm={12}>
            {generateChips(props.playlist.tags)}
          </Grid>
        </Grid>
      </Grid>
      {!props.even ? hiddenOnXs(props.playlist.spotifyURI) : null}
    </React.Fragment>
  );
};

export default playlist;
