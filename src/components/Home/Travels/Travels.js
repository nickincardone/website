import React from 'react';
import Grid from "@mui/material/Grid";
import images from "../../../data/images";
import TravelImage from "./TravelImage/TravelImage";
import "./Travels.scss";

const travels = (props) => {

  function generateImages() {
    return (
      images.map((image, index) => {
        return (
          <TravelImage key={image.id} image={image}/>
        )
      })
    );

  }

  return (
    <Grid className="nji-temp nji-images" container spacing={5}>
      {generateImages()}
    </Grid>
  );
};

export default travels;
