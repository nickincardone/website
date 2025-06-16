import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Email, GitHub } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import "./Resume.scss";
import Experience from "./Experience/Experience";
import OtherSkills from "./OtherSkills/OtherSkills";

interface ResumeProps {
  resume: {
    contact: {
      email: string;
      linkedIn: string;
      github: string;
    };
    education: {
      school: string;
      date: string;
      degree: string;
      concentration: string;
    };
    experience: {
      title: string;
      company: string;
      dates: string;
      bullets: string[];
    }[];
    languages: any[];
    skills: any[];
  };
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <Grid container className="nji-resume">
      <Grid item sm={6}>
        <Grid container>
          <Grid item sm={12} className="nji-resume-about">
            <Typography variant="h6">Contact</Typography>
            <div><Typography variant="body1"><Email
              className="bottom-border"/><b>{resume.contact.email}</b></Typography></div>
            <div><Typography variant="body1"><LinkedIn/><a
              href={resume.contact.linkedIn}>LinkedIn</a></Typography></div>
            <div><Typography variant="body1"><GitHub/><a href={resume.contact.github}>GitHub</a></Typography></div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} className="top-margin-mobile">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6">Education</Typography>
            <Typography variant="h6" component="h2">{resume.education.school}</Typography>
            <Typography variant="subtitle2"
                        component="h2">Graduated {resume.education.date}</Typography>
            <Typography variant="body2">{resume.education.degree}
              <br/> {resume.education.concentration}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} className="top-margin">
        <Experience experience={resume.experience}/>
      </Grid>
      <Grid item sm={6} className="nji-resume-other">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6">Languages and Frameworks</Typography>
          </Grid>
          <Grid item sm={12}>
            <OtherSkills skills={resume.languages}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} className="nji-resume-other">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6">Other Skills</Typography>
          </Grid>
          <Grid item sm={12}>
            <OtherSkills skills={resume.skills}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
