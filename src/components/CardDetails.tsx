import { Box, Typography, Divider } from "@mui/material";
import React from "react";

const CardDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#474a51",
        maxHeight: "15%",
        position: "absolute",
        zIndex: 10,
        bottom: 0,
        width: "100%",
        height: "10%",
      }}
    >
      <Divider />
      <Typography variant="h6" fontSize="1rem" color="white">
        {"Reactions will be here"}
      </Typography>
    </Box>
  );
};

export default CardDetails;
