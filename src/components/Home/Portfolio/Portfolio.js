import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import profilePic from "../../../images/prof.jpg";

const portfolio = (props) => {

  return (
    <Grid className="nji-temp nji-portfolio" container spacing={5}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Website" />
          <CardMedia image="http://nickincardone.com/images/website.png"/>
          <CardContent>This site right here</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Conjugator" />
          <CardMedia image="http://nickincardone.com/images/conjugator.png"/>
          <CardContent>This site right here</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default portfolio;
