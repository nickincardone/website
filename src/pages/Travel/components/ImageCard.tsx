import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ImageCardProps {
  src: string;
  location: string;
  type: number;
  altText: string;
}

const getImageWidth = (type: number) => {
  switch (type) {
    case 1:
      return "33.33%";
    case 2:
      return "50%";
    case 3:
      return "100%";
    case 4:
      return "66.66%";
    default:
      return "33.33%";
  }
};

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  location,
  type,
  altText,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: getImageWidth(type),
        padding: 1,
        position: "relative",
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={altText || location}
        loading="lazy"
        sx={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease",
          margin: "4px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            textAlign: "center",
            padding: "16px",
          }}
        >
          {location}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageCard;
