import React from 'react';
import Grid from "@mui/material/Grid";
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { GitHub } from '@mui/icons-material';
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
