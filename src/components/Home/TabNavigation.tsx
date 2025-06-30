import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

const tabs = [
  { label: "TRAVEL", path: "/travel" },
  { label: "PLAYLISTS", path: "/playlists" },
  { label: "RESUME", path: "/resume" },
  { label: "PROJECTS", path: "/projects" },
];

export default function TabNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = tabs.findIndex((tab) =>
    location.pathname.startsWith(tab.path)
  );

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(tabs[newValue].path);
  };

  return (
    <Tabs
      value={currentTab === -1 ? 0 : currentTab}
      onChange={handleChange}
      variant="fullWidth"
      sx={{
        ".MuiTabs-indicator": { height: 3 },
        mb: 2,
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.path}
          label={
            <Typography fontWeight={600} fontSize={14}>
              {tab.label}
            </Typography>
          }
        />
      ))}
    </Tabs>
  );
}
