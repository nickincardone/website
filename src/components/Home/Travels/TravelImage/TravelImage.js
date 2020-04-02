import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./TravelImage.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Hidden } from "@material-ui/core";

const travelImage = (props) => {
  let size = 4;
  if (props.image.type === 1) {
    size = 4;
  } else if (props.image.type === 2) {
    size = 6;
  } else if (props.image.type === 3) {
    size = 12;
  } else {
    size = 8;
  }

  const innerGridItem = (
    <Grid item sm={size}>
      <div className="nji-travel-image">
        <LazyLoadImage alt={props.image.location + ": " + props.image.altText} src={props.image.src}
                       effect="blur"/>
        {/*<img alt={props.image.location + ": " + props.image.altText} src={props.image.src}/>*/}
        <div className="overlay"></div>
        <div className="overlay text-overlay">
          <div className="alt-text">{props.image.altText}</div>
          <div className="location">{props.image.location}</div>
        </div>
      </div>
    </Grid>
  );

  if (size === 12) {
    return (
      <Hidden xsDown>{innerGridItem}</Hidden>
    )
  }
  return innerGridItem;
};

export default travelImage;
