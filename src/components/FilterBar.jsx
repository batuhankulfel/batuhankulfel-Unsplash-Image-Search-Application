import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import {
  Sort as SortIcon,
  TrendingUp,
  AccessTime,
  LocalFireDepartment,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";

function FilterBar({ sortBy, setSortBy, orderBy, setOrderBy, imageCount }) {
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleOrderChange = () => {
    setOrderBy(orderBy === "asc" ? "desc" : "asc");
  };

  if (imageCount === 0) {
    return null;
  }

  const sortOptions = [
    { value: "relevance", label: "Most Relevant", icon: SortIcon },
    { value: "latest", label: "Latest", icon: LocalFireDepartment },
    { value: "popular", label: "Most Popular", icon: TrendingUp },
    { value: "oldest", label: "Oldest", icon: AccessTime },
    { value: "ss", label: "ss", icon: AccessTime },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        py: 3,
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "8px",
                  px: 2,
                  py: 0.5,
                  color: "white",
                  fontWeight: 700,
                }}
              >
                {imageCount}
              </Box>
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: 400 }}
              >
                beautiful images found
              </Typography>
            </Typography>

            <Button
              onClick={handleOrderChange}
              variant="outlined"
              startIcon={
                orderBy === "asc" ? <ArrowUpward /> : <ArrowDownward />
              }
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  borderColor: "primary.dark",
                  backgroundColor: "primary.light",
                  color: "white",
                },
                transition: "all 0.3s ease",
              }}
            >
              {orderBy === "asc" ? "Ascending" : "Descending"}
            </Button>
          </Box>

          <Divider sx={{ borderColor: "rgba(0,0,0,0.05)" }} />

          <Box>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.75rem",
              }}
            >
              Sort By
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {sortOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = sortBy === option.value;
                return (
                  <Chip
                    key={option.value}
                    label={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Icon fontSize="small" />
                        {option.label}
                      </Box>
                    }
                    onClick={() => handleSortChange(option.value)}
                    clickable
                    sx={{
                      height: "40px",
                      borderRadius: "20px",
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      ...(isSelected
                        ? {
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #5568d3 0%, #6a3f91 100%)",
                              transform: "translateY(-2px)",
                              boxShadow: 4,
                            },
                          }
                        : {
                            backgroundColor: "white",
                            border: "2px solid",
                            borderColor: "grey.300",
                            color: "text.primary",
                            "&:hover": {
                              borderColor: "primary.main",
                              backgroundColor: "primary.50",
                              transform: "translateY(-2px)",
                              boxShadow: 2,
                            },
                          }),
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default FilterBar;
