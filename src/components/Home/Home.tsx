import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Travels from "./Travels/Travels";
import Playlists from "./Playlists/Playlists";
import Resume from "./Resume/Resume";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Topper from "./Topper/Topper";
import "./Home.scss";
import resumeData from "../../data/resume";
import Portfolio from "./Portfolio/Portfolio";
import { useLocation } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  className?: string;
}

function TabPanel(props: TabPanelProps) {
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

const Home: React.FC = () => {
  const location = useLocation();
  const [tabValue, setTabValue] = useState<number>(0);

  useEffect(() => {
    if (location.hash === "#playlists") {
      setTabValue(1);
    } else if (location.hash === "#resume") {
      setTabValue(2);
    } else if (location.hash === "#projects") {
      setTabValue(3);
    }
  }, [location]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };

  return (
    <Container maxWidth="md" className="nji-main">
      <Grid container className="nji-topper" spacing={5}>
        <Topper />
      </Grid>
      <hr className="nji-topper-hr" />
      <AppBar
        className="nji-main-tab"
        position="static"
        color="default"
        variant="outlined"
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Travel" {...a11yProps(0)} />
          <Tab label="Playlists" {...a11yProps(1)} />
          <Tab label="Resume" {...a11yProps(2)} />
          <Tab label="Projects" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <Travels />
      </TabPanel>
      <TabPanel className="nji-playlists" value={tabValue} index={1}>
        <Playlists />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
       <Resume resume={resumeData}/>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <Portfolio />
      </TabPanel>
      <Typography
        className="nji-bottom-message"
        variant="subtitle2"
        component="div"
      >
        Website created by me with React.{" "}
        <a href="https://github.com/nickincardone/website">See the code</a>.
      </Typography>
    </Container>
  );
};

export default Home;
