import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Bookmark } from "./Bookmark";

const StyledGrid = styled(Grid)({
  marginTop: "20px",
});

const StyledTypography = styled(Typography)({
  marginRight: "15px",
});

const StyledGridBookmarksContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
});

export const Bookmarks = () => {
  const bookmarks = [
    {
      img: "BookmarkBorder",
      name: "name1",
    },
    {
      img: "BookmarkBorder",
      name: "name2",
    },
    {
      img: "BookmarkBorder",
      name: "name3",
    },
    {
      img: "BookmarkBorder",
      name: "name3",
    },
    {
      img: "BookmarkBorder",
      name: "name3",
    },
    {
      img: "BookmarkBorder",
      name: "name3",
    },
    {
      img: "BookmarkBorder",
      name: "name3",
    },
    {
      img: "BookmarkBorder",
      name: "name3",
    },
  ];

  return (
    <StyledGrid container>
      <Grid container>
        <Grid xs={6} item>
          <Typography>PINNED BOOKMARKS</Typography>
        </Grid>
        <Grid xs={6} item container direction="row-reverse">
          <StyledTypography>+</StyledTypography>
        </Grid>
      </Grid>

      <StyledGridBookmarksContainer container spacing={2} columns={16}>
        {bookmarks.map((item, idx) => {
          return (
            <Grid item xs={2} key={idx}>
              <Bookmark details={item} />
            </Grid>
          );
        })}
      </StyledGridBookmarksContainer>
    </StyledGrid>
  );
};

{
  /* <Grid item xs={6}>
          <Grid container xs={12} item spacing={2}>
            {bookmarks1.map((item, idx) => {
              return (
                <Grid item xs={3} key={idx}>
                  <Bookmark details={item} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container xs={12} item spacing={2}>
            {bookmarks2.map((item, idx) => {
              return (
                <Grid item xs={3} key={idx}>
                  <Bookmark details={item} />
                </Grid>
              );
            })}
          </Grid>
        </Grid> */
}
