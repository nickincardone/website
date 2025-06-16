import React from "react";
import Grid from "@mui/material/Grid";
import profilePic from "../../../images/prof.jpg";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./Topper.scss";

const Topper: React.FC = () => {
  return (
    <React.Fragment>
      <Grid item sm={4}>
        <img alt="Me" src={profilePic} />
      </Grid>
      <Grid item sm={8}>
        <Paper className="nji-topper-header" variant="outlined">
          <Typography variant="h3">Nick Incardone</Typography>
          <Typography variant="subtitle1">Software Engineer</Typography>
          <Typography variant="subtitle2">
            Music, traveling, and learning new things.
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Topper;
