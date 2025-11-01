import {
  Box,
  Container,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function FilterBar({ sortBy, setSortBy, orderBy, setOrderBy, imageCount }) {
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event, newOrder) => {
    if (newOrder !== null) {
      setOrderBy(newOrder);
    }
  };

  if (imageCount === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: 2,
        boxShadow: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" color="text.secondary">
              {imageCount} images found
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="sort-label">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <SortIcon fontSize="small" />
                  Sort By
                </Box>
              </InputLabel>
              <Select
                labelId="sort-label"
                value={sortBy}
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SortIcon fontSize="small" />
                    Sort By
                  </Box>
                }
                onChange={handleSortChange}
              >
                <MenuItem value="relevance">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SortIcon fontSize="small" />
                    Most Relevant
                  </Box>
                </MenuItem>
                <MenuItem value="latest">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTimeIcon fontSize="small" />
                    Latest
                  </Box>
                </MenuItem>
                <MenuItem value="oldest">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTimeIcon fontSize="small" />
                    Oldest
                  </Box>
                </MenuItem>
                <MenuItem value="popular">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <TrendingUpIcon fontSize="small" />
                    Most Popular
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <ToggleButtonGroup
              value={orderBy}
              exclusive
              onChange={handleOrderChange}
              aria-label="sort order"
              size="small"
              fullWidth
            >
              <ToggleButton value="asc" aria-label="ascending">
                ↑ Ascending
              </ToggleButton>
              <ToggleButton value="desc" aria-label="descending">
                ↓ Descending
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FilterBar;

