import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Email } from "@material-ui/icons";
import LinkedIn from "@material-ui/icons/LinkedIn";
import './Resume.scss';
import resumeData from '../../../data/resume';
import Experience from "./Experience/Experience";
import OtherSkills from "./OtherSkills/OtherSkills";

const resume = (props) => {

  return (
    <Grid container className="nji-resume">
      <Grid item sm={6}>
        <Grid container>
          <Grid item sm={12} className="nji-resume-about">
            <Typography variant="h6">Contact</Typography>
            <div><Typography variant="body1"><Email
              className="bottom-border"/><b>{resumeData.contact.email}</b></Typography></div>
            <div><Typography variant="body1"><LinkedIn/><a
              href={resumeData.contact.linkedIn}>LinkedIn</a></Typography></div>
            {/*<div><Typography variant="body1"><GitHub/><a href={resumeData.contact.github}>GitHub</a></Typography></div>*/}
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} className="top-margin-mobile">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6">Education</Typography>
            <Typography variant="h6" component="h2">{resumeData.education.school}</Typography>
            <Typography variant="subtitle2"
                        component="h2">Graduated {resumeData.education.date}</Typography>
            <Typography variant="body2">{resumeData.education.degree}
              <br/> {resumeData.education.concentration}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} className="top-margin">
        <Experience experience={resumeData.experience}/>
      </Grid>
      <Grid item sm={6} className="nji-resume-other">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6">Languages and Frameworks</Typography>
          </Grid>
          <Grid item sm={12}>
            <OtherSkills skills={resumeData.languages}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} className="nji-resume-other">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6">Other Skills</Typography>
          </Grid>
          <Grid item sm={12}>
            <OtherSkills skills={resumeData.skills}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default resume;
