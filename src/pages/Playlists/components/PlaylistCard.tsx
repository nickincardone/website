import React, { useState } from "react";
import { Box, Typography, Chip, useTheme, Skeleton } from "@mui/material";
import type { Playlist as PlaylistType } from "../../../data/playlists";
import tags from "../../../data/tags";
import { useInViewOnce } from "../../../hooks/useInViewOnce";

interface PlaylistCardProps {
  playlist: PlaylistType;
  even: boolean;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, even }) => {
  const theme = useTheme();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [boxRef, inView] = useInViewOnce<HTMLDivElement>(0.1);

  // Tag chips
  const chips = playlist.tags.map((tag, idx) => {
    const tagInfo = tags.find((data) => tag === data.id);
    return (
      <Chip
        key={idx}
        variant="outlined"
        size="small"
        label={tagInfo?.name}
        sx={{ mr: 1, mb: 1 }}
      />
    );
  });

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
      <Box
        ref={boxRef}
        sx={{
          position: "relative",
          display: "flex",
          width: { xs: "100%", md: "360px" },
          height: "154px",
          order: { xs: 2, md: even ? 1 : 2 },
          pl: { xs: 0, md: even ? 0 : 2 },
          pr: { xs: 0, md: even ? 2 : 0 },
          flexShrink: 0,
        }}
      >
        {(!iframeLoaded || !inView) && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              bgcolor: "#e0e0e0",
              zIndex: 1,
            }}
          />
        )}
        {inView && (
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlist.spotifyURI}`}
            width="100%"
            height="152px"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={playlist.spotifyURI}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: 0,
              zIndex: 2,
              opacity: iframeLoaded ? 1 : 0,
              transition: "opacity 0.3s",
              width: "100%",
              height: "100%",
            }}
            onLoad={() => setIframeLoaded(true)}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 0, md: 2 },
          order: { xs: 1, md: even ? 2 : 1 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#de7c79",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {playlist.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {playlist.description}
        </Typography>
        <Box sx={{ mt: 1, mb: 2 }}>{chips}</Box>
      </Box>
    </Box>
  );
};

export default PlaylistCard;
