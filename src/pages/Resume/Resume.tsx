import React from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import resume from "../../data/resume";
import { PictureAsPdf } from "@mui/icons-material";

export default function Resume() {
  return (
    <Box px={{ xs: 1, sm: 4, background: "#fff" }} py={4}>
      {/* Top Section: Contact & Education */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          mb: 2,
        }}
      >
        {/* Contact */}
        <Box>
          <Typography variant="h5" gutterBottom>
            CONTACT
          </Typography>
          <List dense>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <EmailIcon color="disabled" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontWeight={600}>
                    {resume.contact.email}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LinkedInIcon color="disabled" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href={resume.contact.linkedIn}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                  >
                    LinkedIn
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <GitHubIcon color="disabled" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href={resume.contact.github}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                  >
                    GitHub
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PictureAsPdf color="disabled" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href={resume.contact.github}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                  >
                    Resume PDF Download
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Box>
        {/* Education */}
        <Box>
          <Typography variant="h5" gutterBottom>
            EDUCATION
          </Typography>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {resume.education.school}
          </Typography>
          <Typography fontWeight={600}>
            Graduated {resume.education.date}
          </Typography>
          <Typography>{resume.education.degree}</Typography>
          <Typography fontSize={15} color="text.secondary">
            {resume.education.concentration}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#e57373", mb: 2 }} />
      {/* Experience */}
      <Typography variant="h5" gutterBottom>
        EXPERIENCE
      </Typography>
      <SimpleTreeView
        defaultExpandedItems={resume.experience
          .map((exp, idx) =>
            exp.collapsed === false ? `experience-${idx}` : null
          )
          .filter((item): item is string => item !== null)}
        sx={{
          [`& .${treeItemClasses.root}`]: {
            [`& .${treeItemClasses.content}`]: {
              padding: "4px 0",
            },
          },
        }}
      >
        {resume.experience.map((exp, idx) => (
          <TreeItem
            key={`experience-${idx}`}
            itemId={`experience-${idx}`}
            sx={{
              [`& .${treeItemClasses.content}[data-selected]`]: {
                backgroundColor: "#fff",
              },
            }}
            label={
              <Box display="flex" flexDirection="column">
                <Typography variant="h6" fontWeight={500}>
                  {exp.title}
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize={14}
                  color="text.secondary"
                  mt={-0.5}
                >
                  {exp.company} {exp.dates && <span>{exp.dates}</span>}
                </Typography>
              </Box>
            }
          >
            <Box
              component="ul"
              sx={{ listStyle: "none", pl: 0, mt: 1, mb: 1, ml: 3 }}
            >
              {exp.bullets.map((bullet, bulletIdx) => (
                <Box
                  key={bulletIdx}
                  component="li"
                  sx={{
                    position: "relative",
                    pl: 3,
                    mb: 1,
                    fontSize: 15,
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: "8px",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      bgcolor: "#222",
                    },
                  }}
                >
                  {bullet}
                </Box>
              ))}
            </Box>
          </TreeItem>
        ))}
      </SimpleTreeView>

      <Divider sx={{ borderColor: "#e57373", my: 2 }} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom>
            LANGUAGES AND FRAMEWORKS
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {resume.languages.map((lang, idx) => (
              <li
                key={lang.name}
                style={{ marginBottom: lang.subSkills ? "12px" : "4px" }}
              >
                <Typography fontWeight={700} fontSize={20}>
                  {lang.name}
                </Typography>
                {lang.subSkills && (
                  <ul style={{ margin: "8px 0 0 0", paddingLeft: "24px" }}>
                    {lang.subSkills.map((s, i) => (
                      <li key={s} style={{ marginBottom: "4px" }}>
                        <Typography fontSize={17}>{s}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            OTHER SKILLS
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {resume.skills?.map((skill) => (
              <li
                key={skill.name}
                style={{ marginBottom: skill.subSkills ? "12px" : "4px" }}
              >
                <Typography fontWeight={700} fontSize={20}>
                  {skill.name}
                </Typography>
                {skill.subSkills && (
                  <ul style={{ margin: "8px 0 0 0", paddingLeft: "24px" }}>
                    {skill.subSkills.map((s, i) => (
                      <li key={s} style={{ marginBottom: "4px" }}>
                        <Typography fontSize={17}>{s}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
