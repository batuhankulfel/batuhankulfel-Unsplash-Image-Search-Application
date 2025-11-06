import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import { useState, useMemo } from "react";
import ImageList from "./components/ImageList";
import ImageModal from "./components/ImageModal";
import FilterBar from "./components/FilterBar";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#667eea",
    },
    secondary: {
      main: "#764ba2",
      accent: "#ff4081",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("relevance"); // relevance, latest, oldest, popular
  const [orderBy, setOrderBy] = useState("desc"); // asc, desc
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("unsplash_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleToggleFavorite = (image) => {
    let updatedFavorites;
    const isAlreadyFavorite = favorites.some((fav) => fav.id === image.id);

    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== image.id);
    } else {
      updatedFavorites = [...favorites, image];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem(
      "unsplash_favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const isImageFavorite = (image) => {
    return favorites.some((fav) => fav.id === image.id);
  };

  // Sıralama işlemi
  const sortedImages = useMemo(() => {
    const sorted = [...images];

    switch (sortBy) {
      case "latest":
        sorted.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return orderBy === "asc" ? dateA - dateB : dateB - dateA;
        });
        break;
      case "popular":
        sorted.sort((a, b) => {
          return orderBy === "asc" ? a.likes - b.likes : b.likes - a.likes;
        });
        break;
      case "oldest":
        sorted.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return orderBy === "asc" ? dateA - dateB : dateB - dateA;
        });
        break;
      default:
        // relevance - varsayılan sıralama
        break;
    }

    return sorted;
  }, [images, sortBy, orderBy]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <SearchHeader search={handleSubmit} />
        <FilterBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          imageCount={images.length}
        />
        <ImageList
          imagesPlaceholder={sortedImages}
          onImageClick={handleImageClick}
        />
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            open={isModalOpen}
            onClose={handleCloseModal}
            onFavorite={() => handleToggleFavorite(selectedImage)}
            isFavorite={isImageFavorite(selectedImage)}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
