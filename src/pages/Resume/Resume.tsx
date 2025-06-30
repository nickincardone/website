import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { PictureAsPdf } from "@mui/icons-material";
import resume from "../../data/resume";

// Contact Row Component
function ContactRow({
  icon,
  content,
  index,
}: {
  icon: React.ReactNode;
  content: React.ReactNode;
  index: number;
}) {
  const isFirst = index === 0;
  const isLast = index === 3;

  return (
    <Box display="flex" borderBottom={isLast ? "none" : "1px solid #4d4d4d"}>
      <Box
        sx={{
          borderRight: "1px solid #4d4d4d",
          paddingY: isFirst ? 0 : 1,
          paddingBottom: isLast ? 0 : 1,
          paddingX: 1,
          width: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          paddingY: isFirst ? 0 : 1,
          paddingBottom: isLast ? 0 : 1,
          paddingX: 1,
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {content}
      </Box>
    </Box>
  );
}

// Skill List Section Component
function SkillListSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; subSkills?: string[] }[];
}) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {items.map((item) => (
          <li key={item.name}>
            <Typography fontWeight={700} fontSize={20}>
              {item.name}
            </Typography>
            {item.subSkills && (
              <ul style={{ paddingLeft: 16, margin: 0 }}>
                {item.subSkills.map((s) => (
                  <li key={s}>
                    <Typography fontSize={17}>{s}</Typography>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
}

// Experience Item Component
function ExperienceItem({
  exp,
  idx,
}: {
  exp: (typeof resume.experience)[number];
  idx: number;
}) {
  return (
    <TreeItem
      key={`experience-${idx}`}
      itemId={`experience-${idx}`}
      sx={{
        [`& .${treeItemClasses.content}[data-selected]`]: {
          backgroundColor: "#fff",
        },
        [`& .${treeItemClasses.content}[data-selected][data-focused]`]: {
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
  );
}

export default function Resume() {
  return (
    <Box px={{ xs: 1, sm: 2, background: "#fff" }} py={4}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            <ContactRow
              icon={<EmailIcon color="disabled" />}
              content={
                <Link
                  href={`mailto:${resume.contact.email}`}
                  underline="hover"
                  fontWeight={600}
                >
                  {resume.contact.email}
                </Link>
              }
              index={0}
            />
            <ContactRow
              icon={<LinkedInIcon color="disabled" />}
              content={
                <Link
                  href={resume.contact.linkedIn}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  fontWeight={600}
                >
                  LinkedIn
                </Link>
              }
              index={1}
            />
            <ContactRow
              icon={<GitHubIcon color="disabled" />}
              content={
                <Link
                  href={resume.contact.github}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  fontWeight={600}
                >
                  GitHub
                </Link>
              }
              index={2}
            />
            <ContactRow
              icon={<PictureAsPdf color="disabled" />}
              content={
                <Link
                  href="https://www.nickincardone.com/assets/Nichlos_Incardone_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  fontWeight={600}
                >
                  Download Resume PDF
                </Link>
              }
              index={3}
            />
          </Box>
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

      <Divider sx={{ borderColor: "#d8d8d8", my: 2 }} />

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
          <ExperienceItem key={idx} exp={exp} idx={idx} />
        ))}
      </SimpleTreeView>

      <Divider sx={{ borderColor: "#d8d8d8", my: 2 }} />

      {/* Skills */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        <SkillListSection
          title="LANGUAGES AND FRAMEWORKS"
          items={resume.languages}
        />
        <SkillListSection title="OTHER SKILLS" items={resume.skills} />
      </Box>
    </Box>
  );
}
