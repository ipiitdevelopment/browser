import { ArrowForward, SearchOutlined } from "@mui/icons-material";
import { Button, IconButton, Paper, styled, TextField } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
  height: "55px",
  left: "13px",
});

export const SearchBar = () => {
  return (
    <Paper>
      <TextField
        fullWidth
        placeholder="Search the Web, your Library, bookmarks and more"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
          endAdornment: (
            <StyledButton variant="contained">
              <ArrowForward />
            </StyledButton>
          ),
        }}
      />
    </Paper>
  );
};
