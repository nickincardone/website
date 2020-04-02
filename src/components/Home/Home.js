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
import resumeData from "../../resume";
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  if (value !== 2 && location.hash === '#resume') {
    setValue(2);
  }
  if (value !== 1 && location.hash === '#playlists') {
    setValue(1);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

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

  return (
    <Container maxWidth="md" className="nji-main">
      <Grid container className="nji-topper" spacing={5}>
        <Topper/>
      </Grid>
      <hr/>
      <AppBar className="nji-main-tab" position="static" color="default" variant="outlined">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Travel" {...a11yProps(0)} />
          <Tab label="Playlists" {...a11yProps(1)} />
          <Tab label="Resume" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Travels/>
      </TabPanel>
      <TabPanel className="nji-playlists" value={value} index={1}>
        <Playlists/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Resume resume={resumeData}/>
      </TabPanel>
      <Typography className="nji-bottom-message" variant="subtitle2" component="div">Website created
        by me with React. <a href="https://github.com/nickincardone/website">See the
          code</a>.</Typography>
    </Container>
  );
}

export default Home;
