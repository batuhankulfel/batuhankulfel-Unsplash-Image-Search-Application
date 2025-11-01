import { Card, CardMedia } from "@mui/material";

function ImageItem({ image, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        image={image.urls?.small || image.urls?.regular}
        alt={image.alt_description || "Unsplash image"}
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Card>
  );
}

export default ImageItem;
