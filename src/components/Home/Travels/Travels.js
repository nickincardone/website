import React from 'react';
import Grid from "@material-ui/core/Grid";
import images from "../../../images";
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
        <Grid className="nji-temp" container spacing={5}>
            {generateImages()}
        </Grid>
    );
};

export default travels;
