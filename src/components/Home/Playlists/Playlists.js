import React from 'react';
import Grid from "@material-ui/core/Grid";
import playlistsArray from "../../../playlists";
import Playlist from "./Playlist";
import './Playlists.scss';

const playlists = (props) => {

    function hrBlock() {
        return (
            <Grid item sm={12}>
                <hr/>
            </Grid>
        )
    }

    function generatePlaylists() {
        return (
            playlistsArray.map((playlist, index) => {
                const isEven = index % 2 === 0;
                return (
                    <React.Fragment key={playlist.id}>
                        <Playlist even={isEven} playlist={playlist}/>
                        {index + 1 === playlistsArray.length ? null : hrBlock()}
                    </React.Fragment>
                )
            })
        );
    }

    return (
        <Grid className="nji-temp" container spacing={5}>
            {generatePlaylists()}
        </Grid>
    );
};

export default playlists;
