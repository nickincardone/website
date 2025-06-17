import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Link,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import portfolio from "../../data/portfolio";

export default function Projects() {
  return (
    <Box px={{ xs: 1, sm: 2 }} py={4}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {portfolio.map((project) => (
          <Box key={project.title}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 0,
                border: "1.5px solid #e0e0e0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                background: "#fff",
              }}
            >
              <Box px={3} pt={2}>
                <Typography
                  variant="h5"
                  color="#e57373"
                  fontWeight={600}
                  gutterBottom
                >
                  {project.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  background:
                    project.title === "Conjugator" ? "#e0f7fa" : "#e0ecee",
                  px: 2,
                  pt: 2,
                  pb: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    maxWidth: 420,
                    maxHeight: 260,
                    objectFit: "contain",
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    background: "#fff",
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                <Typography variant="body1" sx={{ mt: 2, mb: 2, fontSize: 17 }}>
                  {project.description}
                </Typography>
                <Box mt={1} mb={1}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mr: 1, fontWeight: 500, fontSize: 14 }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  position: "absolute",
                  right: 8,
                  bottom: 8,
                  zIndex: 2,
                }}
              >
                <IconButton
                  component={Link}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  sx={{ color: "#222" }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
