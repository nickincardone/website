import React from "react";
import Grid from "@mui/material/Grid";
import "./TravelImage.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Hidden } from "@mui/material";
import { Image } from "../../../../data/images";

interface TravelImageProps {
  image: Image;
}

interface TravelImageState {
  class: string;
  size: number;
}

class TravelImage extends React.Component<TravelImageProps, TravelImageState> {
  constructor(props: TravelImageProps) {
    super(props);
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
    this.state = {
      class: "",
      size,
    };
  }

  handleClick = () => {
    this.setState((oldState) => ({
      class: oldState.class !== "" ? "" : "show-overlay",
    }));
  };

  innerGridItem = () => {
    return (
      <Grid item sm={this.state.size} onClick={this.handleClick}>
        <div className={"nji-travel-image " + this.state.class}>
          <LazyLoadImage
            alt={this.props.image.location + ": " + this.props.image.altText}
            src={this.props.image.src}
            effect="blur"
          />
          <div className="overlay"></div>
          <div className="overlay text-overlay">
            <div className="alt-text">{this.props.image.altText}</div>
            <div className="location">{this.props.image.location}</div>
          </div>
        </div>
      </Grid>
    );
  };

  render() {
    if (this.state.size === 12) {
      return <Hidden xsDown>{this.innerGridItem()}</Hidden>;
    }
    return this.innerGridItem();
  }
}

export default TravelImage;
