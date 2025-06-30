import React from "react";
import { Box, Container, Typography, Divider, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TabNavigation from "./TabNavigation";
import { Route, Routes } from "react-router";
import Travel from "../../pages/Travel/Travel";
import theme from "../../theme";
import Resume from "../../pages/Resume/Resume";
import Projects from "../../pages/Projects/Projects";
import Playlists from "../../pages/Playlists/Playlists";
import me from "../../assets/me.jpg";

function ProfileHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={6}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <Avatar
        src="https://www.nickincardone.com/images/prof.jpg"
        alt="Me"
        sx={{
          width: 280,
          height: 280,
          borderRadius: 0,
          boxShadow: 0,
          borderWidth: 1,
          borderColor: theme.palette.custom.border,
          borderStyle: "solid",
        }}
        variant="square"
      />
      <Box
        sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
        flexDirection={"column"}
        display={"flex"}
      >
        <Typography variant="h2" mb={0.2} ml={-0.2}>
          Nick Incardone
        </Typography>
        <Typography
          color="text.secondary"
          mb={0}
          fontSize={16}
          fontWeight={400}
        >
          Software Engineer
        </Typography>
        <Typography fontWeight={500} fontSize={14}>
          Movies, traveling, and learning new things.
        </Typography>
      </Box>
    </Box>
  );
}

export default function Home() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        background: "#fff",
        mt: 2.5,
        mb: 4,
        borderRadius: 0,
        boxShadow: 0,
        borderWidth: 0,
        p: 0,
      }}
    >
      <Box px={0} pt={3.5}>
        <ProfileHeader />
      </Box>
      <Box mt={2.5}>
        <Divider
          sx={{ borderWidth: 0.5, borderColor: theme.palette.custom.border }}
        />
        <TabNavigation />
      </Box>
      <Box sx={{ background: theme.palette.primary.light }}>
        <Routes>
          <Route path="/" element={<Travel />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </Container>
  );
}
