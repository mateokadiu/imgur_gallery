import { Box } from "@mui/material";
import React from "react";
import CardError from "./CardError";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails/CardDetails";

interface CardContainerProps {
  title?: string;
  children?: React.ReactNode;
  isError?: boolean;
  description?: {
    upvotes: number;
    score: number;
    views: number;
    downvotes: number;
    commentCount: number | null;
  };
}

const CardContainer = ({
  title = "",
  children,
  isError = false,
  description,
}: CardContainerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#474a51",
        position: "relative",
        transition: "opacity 0.3s ease-in-out",
        "&:hover": {
          opacity: 0.7,
        },
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      {isError ? (
        <CardError />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "85%",
              position: "absolute",
              top: "10%",
            }}
          >
            {children}
          </Box>
          <CardTitle title={title} />
          <CardDetails description={description} />
        </>
      )}
    </Box>
  );
};

export default CardContainer;
