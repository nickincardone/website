import { Box } from "@mui/material";
import { images, Image } from "../../data/images";
import ImageCard from "./components/ImageCard";

export default function Travel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        px: { xs: 1, sm: 2 },
        background: "#fff",
        mx: { xs: 0, sm: -1 },
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
