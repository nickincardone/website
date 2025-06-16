import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Skeleton from "@mui/material/Skeleton";
import { Hidden } from "@mui/material";
import tagData from "../../../tags";
import type { Playlist as PlaylistType } from "../../../data/playlists";

interface PlaylistProps {
  playlist: PlaylistType;
  even: boolean;
}

const Playlist: React.FC<PlaylistProps> = (props) => {
  function Iframe(uri: string) {
    return (
      <Grid item sm={12} md={4}>
        <div
          className="nji-relative"
          style={{ height: "100%", minHeight: "175px" }}
        >
          <Skeleton variant="rectangular" animation="wave" />
          <iframe
            src={"https://open.spotify.com/embed/playlist/" + uri}
            width="300"
            height="380"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"
            title={uri}
          />
        </div>
      </Grid>
    );
  }

  function hiddenOnXs(uri: string) {
    return <Hidden smDown>{Iframe(uri)}</Hidden>;
  }

  function showOnXs(uri: string) {
    return <Hidden mdUp>{Iframe(uri)}</Hidden>;
  }

  function generateChips(tags: number[]) {
    return tags.map((tag, index) => {
      const tagInfo = tagData.find((data) => tag === data.id);
      return (
        <Chip
          key={index}
          variant="outlined"
          size="small"
          label={tagInfo?.name}
        />
      );
    });
  }

  return (
    <React.Fragment>
      {props.even
        ? Iframe(props.playlist.spotifyURI)
        : showOnXs(props.playlist.spotifyURI)}
      <Grid item sm={12} md={8} className="nji-relative">
        <Typography variant="h4">{props.playlist.name}</Typography>
        <Typography variant="body1">{props.playlist.description}</Typography>
        <Grid container className="nji-playlists-chips">
          <Grid item sm={12}>
            {generateChips(props.playlist.tags)}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Playlist;
