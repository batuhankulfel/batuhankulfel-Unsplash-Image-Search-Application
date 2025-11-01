import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";

function ImageModal({ image, open, onClose, onFavorite, isFavorite }) {
  if (!image) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(image.urls.full);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `unsplash-${image.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.95)",
          color: "white",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "white",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxHeight: "90vh",
          }}
        >
          <Box
            component="img"
            src={image.urls.regular}
            alt={image.alt_description || "Unsplash image"}
            sx={{
              width: { xs: "100%", md: "70%" },
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
              display: "block",
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflowY: "auto",
              maxHeight: { xs: "40vh", md: "90vh" },
            }}
          >
            <Box>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <IconButton
                  onClick={onFavorite}
                  sx={{
                    color: isFavorite ? "#ff6b6b" : "white",
                    border: "2px solid",
                    borderColor: isFavorite ? "#ff6b6b" : "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton
                  onClick={handleDownload}
                  sx={{
                    color: "white",
                    border: "2px solid white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </Stack>

              <Typography variant="h6" sx={{ mb: 2 }}>
                {image.alt_description || "Untitled Photo"}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
                <Chip
                  icon={<FavoriteBorderIcon />}
                  label={`${image.likes} likes`}
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                />
                <Chip
                  label={image.width + " × " + image.height}
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                />
              </Stack>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PersonIcon sx={{ color: "white" }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {image.user.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    @{image.user.username}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {image.description && (
              <Box>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
                  {image.description}
                </Typography>
              </Box>
            )}

            <Box>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                Photo ID: {image.id}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ImageModal;

