import { Box, Typography } from "@mui/material";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface CardContainerProps {
  title?: string;
  children?: React.ReactNode;
  isError?: boolean;
}

const CardContainer = ({
  title,
  children,
  isError = false,
}: CardContainerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#474a51",
      }}
    >
      {isError ? (
        <Typography variant="h6" fontSize="1rem" color="white">
          Error loading image or video
        </Typography>
      ) : (
        children
      )}
      <Box sx={{ backgroundColor: "#474a51", maxHeight: "15%" }}>
        <Typography variant="h6" fontSize="1rem" color="white">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardContainer;
