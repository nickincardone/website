import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Travels from "./Travels/Travels";
import Playlists from "./Playlists/Playlists";
import Resume from "./Resume/Resume";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Topper from "./Topper/Topper";
import './Home.scss';
import resumeData from "../../data/resume";
import Portfolio from './Portfolio/Portfolio';
import { withRouter } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0
    };
    if (props.location.hash === '#playlists') {
      this.state.tabValue = 1;
    }
    if (props.location.hash === '#resume') {
      this.state.tabValue = 2;
    }
    if (props.location.hash === '#projects') {
      this.state.tabValue = 3;
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };

  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  render() {
    return (
      <Container maxWidth="md" className="nji-main">
        <Grid container className="nji-topper" spacing={5}>
          <Topper/>
        </Grid>
        <hr className="nji-topper-hr"/>
        <AppBar className="nji-main-tab" position="static" color="default" variant="outlined">
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Travel" {...this.a11yProps(0)} />
            <Tab label="Playlists" {...this.a11yProps(1)} />
            <Tab label="Resume" {...this.a11yProps(2)} />
            <Tab label="Projects" {...this.a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.tabValue} index={0}>
          <Travels/>
        </TabPanel>
        <TabPanel className="nji-playlists" value={this.state.tabValue} index={1}>
          <Playlists/>
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={2}>
          <Resume resume={resumeData}/>
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={3}>
          <Portfolio/>
        </TabPanel>
        <Typography className="nji-bottom-message" variant="subtitle2" component="div">Website
          created
          by me with React. <a href="https://github.com/nickincardone/website">See the
            code</a>.</Typography>
      </Container>
    )
  };
}

export default withRouter(Home);
