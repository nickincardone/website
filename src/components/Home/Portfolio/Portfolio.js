import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { GitHub } from '@material-ui/icons';
import './Portfolio.scss';

const portfolio = (props) => {

  return (
    <Grid className="nji-temp nji-portfolio" container spacing={5}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Website"/>
          <CardMedia image="http://nickincardone.com/images/website.png"/>
          <CardContent>This site right here. A static React application that generates my website
            from some JSON files.</CardContent>
          <CardActions disableSpacing>
            <a href="http://nickincardone.com">
              <IconButton aria-label="go to repo">
                <GitHub/>
              </IconButton>
            </a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Conjugator"/>
          <CardMedia image="http://nickincardone.com/images/conjugator.png"/>
          <CardContent>Practice Spanish conjugations and definitions with over 1000 verbs. MVP of a
            larger Spanish App that I am working on. </CardContent>
          <CardActions disableSpacing>
            <a href="http://nickincardone.com">
              <IconButton aria-label="go to repo">
                <GitHub/>
              </IconButton>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default portfolio;
