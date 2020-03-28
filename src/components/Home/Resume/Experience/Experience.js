import React from 'react';
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import StepContent from "@material-ui/core/StepContent";
import Step from "@material-ui/core/Step";
import {Stepper} from "@material-ui/core";
import './Experience.scss';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import resumeData from "../../../../resume";
import Grid from "@material-ui/core/Grid";

const experience = (props) => {

    function generateBullets(bullets) {
        return (
            bullets.map((bullet, index) => {
                return (
                    <li key={index}>
                        {bullet}
                    </li>
                )
            })
        );
    }

    function Job(props) {
        return (
            <Step active={true} orientation="vertical">
                <StepLabel StepIconComponent={FiberManualRecordIcon}>
                    <Typography variant="h6">{props.experience.title}</Typography>
                    {props.experience.company} {props.experience.dates}
                </StepLabel>
                <StepContent>
                    <ul>
                        {generateBullets(props.experience.bullets)}
                    </ul>
                </StepContent>
            </Step>
        );
    }

    function generateExperience() {
        return props.experience.map((job, index) => {
            return (
                <Job experience={job} key={index}/>
            )
        })
    }

    return (
        <React.Fragment>
            <Typography variant="h6">Experience</Typography>
            <Stepper orientation="vertical" className="nji-resume-exp">
                {generateExperience()}
                <Step><StepLabel><br/><br/></StepLabel></Step>
            </Stepper>
        </React.Fragment>

    );
};

export default experience;
