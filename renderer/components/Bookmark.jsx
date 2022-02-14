import * as Icons from "@mui/icons-material";
import { Card, Grid, styled } from "@mui/material";
import React from "react";

const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "120px"
});

const StyledGridContent = styled(Grid)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "25px"
});

const StyledTypography = styled(Grid)({
  marginTop: "15px"
});

export const Bookmark = ({ details }) => {
  const DynamicIcon = Icons[details.img];

  return (
    <Grid>
      <Card variant="outlined">
        <StyledGrid>
          <StyledGridContent>
            <DynamicIcon />
            <StyledTypography>{details.name}</StyledTypography>
          </StyledGridContent>
        </StyledGrid>
      </Card>
    </Grid>
  );
};
