import ImageItem from "./ImageItem";
import { Box, Container } from "@mui/material";

function ImageList({ imagesPlaceholder }) {
  if (!imagesPlaceholder || imagesPlaceholder.length === 0) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          columns: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
          columnGap: 3,
          "& > *": {
            breakInside: "avoid",
            mb: 3,
          },
        }}
      >
        {imagesPlaceholder.map((image, index) => {
          return <ImageItem key={image.id || index} image={image} />;
        })}
      </Box>
    </Container>
  );
}

export default ImageList;
