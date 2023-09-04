import { Box, Typography } from "@mui/material";
import React from "react";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";

interface CardContainerProps {
  title?: string;
  children?: React.ReactNode;
  isError?: boolean;
}

const CardContainer = ({
  title = "",
  children,
  isError = false,
}: CardContainerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#474a51",
        position: "relative",
      }}
    >
      {isError ? (
        <Typography
          variant="h6"
          fontSize="1rem"
          width="100%"
          height="300px"
          color="white"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Error loading image or video
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "80%",
              position: "absolute",
              top: "10%",
            }}
          >
            {children}
          </Box>
          <CardTitle title={title} />
          <CardDetails />
        </>
      )}
    </Box>
  );
};

export default CardContainer;
