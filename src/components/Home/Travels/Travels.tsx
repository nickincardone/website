import React from "react";
import Grid from "@mui/material/Grid";
import images, { Image } from "../../../data/images";
import TravelImage from "./TravelImage/TravelImage";
import "./Travels.scss";

const Travels: React.FC = () => {
  function generateImages() {
    return images.map((image: Image) => (
      <TravelImage key={image.id} image={image} />
    ));
  }

  return (
    <Grid className="nji-temp nji-images" container spacing={5}>
      {generateImages()}
    </Grid>
  );
};

export default Travels;
