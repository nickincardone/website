import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import playlistsArray from "../../data/playlists";
import PlaylistCard from "./components/PlaylistCard";

const Playlists: React.FC = () => (
  <Box sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 }, background: "#fff" }}>
    <Grid container spacing={1}>
      {playlistsArray.map((playlist, index) => (
        <React.Fragment key={playlist.id}>
          <PlaylistCard playlist={playlist} even={index % 2 === 0} />
          {index + 1 !== playlistsArray.length && (
            <Divider
              sx={{
                my: { xs: 2, sm: 3 },
                borderColor: "#d8d8d8",
                width: "100%",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Grid>
  </Box>
);

export default Playlists;
