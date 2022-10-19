import { Box, TextField, Typography } from "@mui/material";

const Nav = ({ searchValue, setSearchValue }) => {
  return (
    <Box className="site-nav">
      <Typography variant="h4">Wookie Movies</Typography>

      <Box>
        <TextField
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search a Movie..."
        />
      </Box>
    </Box>
  );
};

export default Nav;
