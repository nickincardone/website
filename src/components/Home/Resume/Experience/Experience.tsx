import React from "react";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import StepContent from "@mui/material/StepContent";
import Step from "@mui/material/Step";
import { Stepper } from "@mui/material";
import "./Experience.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = (props) => {
  function generateBullets(bullets: string[]) {
    return bullets.map((bullet, index) => <li key={index}>{bullet}</li>);
  }

  function Job(props: { experience: ExperienceItem }) {
    return (
      <Step active={true}>
        <StepLabel StepIconComponent={FiberManualRecordIcon}>
          <Typography variant="h6">{props.experience.title}</Typography>
          {props.experience.company} {props.experience.dates}
        </StepLabel>
        <StepContent>
          <ul>{generateBullets(props.experience.bullets)}</ul>
        </StepContent>
      </Step>
    );
  }

  function generateExperience() {
    return props.experience.map((job, index) => (
      <Job experience={job} key={index} />
    ));
  }

  return (
    <React.Fragment>
      <Typography variant="h6">Experience</Typography>
      <Stepper orientation="vertical" className="nji-resume-exp">
        {generateExperience()}
      </Stepper>
    </React.Fragment>
  );
};

export default Experience;
