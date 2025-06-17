import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { images, Image } from "../../data/images";
import ImageCard from "./components/ImageCard";

export default function Travel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        background: "#fff",
        mx: -1,
      }}
    >
      {images.map((image: Image) => (
        <ImageCard
          key={image.id}
          src={image.src}
          location={image.location}
          type={image.type}
          altText={image.altText}
        />
      ))}
    </Box>
  );
}
