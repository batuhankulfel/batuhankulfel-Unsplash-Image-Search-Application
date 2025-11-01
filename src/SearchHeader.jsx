import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (valueInput.trim()) {
      search(valueInput);
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: { xs: 4, md: 6 },
        boxShadow: 3,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            🔍 Unsplash Image Search
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: "rgba(255,255,255,0.9)",
              fontWeight: 300,
              fontSize: { xs: "0.9rem", md: "1.2rem" },
            }}
          >
            Discover beautiful free images
          </Typography>
          <Paper
            component="form"
            onSubmit={handleFormSubmit}
            elevation={6}
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              background: "white",
              maxWidth: 600,
              mx: "auto",
              "&:focus-within": {
                transform: "translateY(-3px)",
                boxShadow: 8,
              },
              transition: "all 0.3s ease",
            }}
          >
            <TextField
              fullWidth
              placeholder="Search for beautiful images..."
              value={valueInput}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#667eea", ml: 1 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                px: 2,
                "& .MuiInputBase-input": {
                  fontSize: "1rem",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  background: "linear-gradient(135deg, #5568d3 0%, #6a3f91 100%)",
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                transition: "all 0.3s ease",
              }}
            >
              Search
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default SearchHeader;
