import React from 'react';
import Grid from "@mui/material/Grid";
import "./TravelImage.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Hidden } from "@mui/material";

class TravelImage extends React.Component {
  size = 4;
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      size: 4
    };

    if (props.image.type === 1) {
      this.state.size = 4;
    } else if (props.image.type === 2) {
      this.state.size = 6;
    } else if (props.image.type === 3) {
      this.state.size = 12;
    } else {
      this.state.size = 8;
    }
  };

  handleClick = () => {
    this.setState((oldState, props) => {
      if (oldState.class !== '') {
        return { class: ''};
      } else {
        return { class: 'show-overlay'};
      }
    });
  };

  innerGridItem = () => {
    return (
      <Grid item sm={this.state.size} onClick={this.handleClick}>
        <div className={"nji-travel-image " + this.state.class}>
          <LazyLoadImage alt={this.props.image.location + ": " + this.props.image.altText} src={this.props.image.src}
                         effect="blur"/>
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
      return (
        <Hidden xsDown>{this.innerGridItem()}</Hidden>
      )
    }
    return this.innerGridItem();
  }
}

export default TravelImage;
