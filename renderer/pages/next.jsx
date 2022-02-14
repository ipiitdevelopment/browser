import { HelpOutline } from "@mui/icons-material";
import { GlobalStyles, Grid, styled } from "@mui/material";
import React from "react";
import { Bookmarks } from "../components/Bookmarks";
import { SearchBar } from "../components/SearchBar";

const globalStyle = {
  body: {
    margin: "0",
    minWidth: "1000px"
  },
};

const StyledGridWrapper = styled(Grid)({
  background: "#D3D3D3",
  color: "gray",
  height: "100vh",
  alignItems: "start",
});

const StyledGrid = styled(Grid)({
  justifyContent: "center",
});

const StyledGridBookmarksContainer = styled(Grid)({
  marginTop: "50px",
});

const StyledGridHelpContainer = styled(Grid)({
  marginBottom: "50px",
});

const StyledHelpOutline = styled(HelpOutline)({
  marginTop: "15px",
  marginRight: "15px"
});

function Next() {
  return (
    <>
      <GlobalStyles styles={globalStyle} />
      <StyledGridWrapper container>
        <StyledGrid item xs={12} container>
          <StyledGridHelpContainer container direction="row-reverse">
            <StyledHelpOutline />
          </StyledGridHelpContainer>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <StyledGridBookmarksContainer item xs={10}>
            <Bookmarks />
          </StyledGridBookmarksContainer>
        </StyledGrid>
      </StyledGridWrapper>
    </>
  );
}

export default Next;
