import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Skeleton from '@material-ui/lab/Skeleton';

const playlist = (props) => {

    function Iframe(uri) {
        return (
            <Grid item sm={4} >
                <div className="nji-relative">
                    <Skeleton variant="rect" animation="wave"/>
                    <iframe src={"https://open.spotify.com/embed/playlist/" + uri} width="300"
                            height="380" frameBorder="0" allowTransparency="true"
                            allow="encrypted-media"
                            title={uri}/>
                </div>
            </Grid>
        );
    }

    return (
        <React.Fragment>
            {props.even ? Iframe(props.playlist.spotifyURI) : null}
            <Grid item sm={8} className="nji-relative">
                <Typography variant="h4">{props.playlist.name}</Typography>
                <Typography variant="body1">{props.playlist.description}</Typography>
                <Grid container className="nji-playlists-chips">
                    <Grid item sm={12}>
                        <Chip variant="outlined" size="small" label="Chill"/>
                        <Chip variant="outlined" size="small" label="Indie"/>
                        <Chip variant="outlined" size="small" label="Indietronica"/>
                        <Chip variant="outlined" size="small" label="Trip Rock"/>
                    </Grid>
                </Grid>
            </Grid>
            {!props.even ? Iframe(props.playlist.spotifyURI) : null}
        </React.Fragment>
    );
};

export default playlist;
