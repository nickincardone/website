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
import portfolioData from '../../../data/portfolio';

const portfolio = (props) => {

  return (
    <Grid className="nji-temp nji-portfolio" container spacing={5}>
      {portfolioData.map((portfolioItem, index) => {
        return (
          <Grid item xs={12} md={6}>
            <Card>
              <a href={portfolioItem.demoLink}>
                <CardHeader title={portfolioItem.title}/>
                <CardMedia image={portfolioItem.image}/>
              </a>
              <CardContent>{portfolioItem.description}</CardContent>
              <CardActions disableSpacing className="left-card">
                <div>{portfolioItem.technologies.join(', ')}</div>
              </CardActions>
              <CardActions disableSpacing className="right-card">
                <a href={portfolioItem.githubLink}>
                  <IconButton aria-label="go to repo">
                    <GitHub/>
                  </IconButton>
                </a>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default portfolio;
