import React from "react";
import { Box, Divider } from "@mui/material";
import CardDetailsUpvote from "./CardDetailsUpvote";
import CardDetailsDownvote from "./CardDetailsDownvote";
import CardDetailsComment from "./CardDetailsComment";
import CardDetailsViews from "./CardDetailsViews";

//#b4b9c2

interface CardDetailsProps {
  description?: {
    upvotes: number;
    score: number;
    views: number;
    downvotes: number;
    commentCount: number | null | undefined;
  };
}

const CardDetails = ({ description }: CardDetailsProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#474a51",
        maxHeight: "15%",
        position: "absolute",
        zIndex: 10,
        bottom: 0,
        width: "100%",
        height: "2.5rem",
        borderRadius: "5px",
      }}
    >
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        paddingX="5%"
        paddingY="3%"
      >
        <Box display="flex" gap="20%">
          <CardDetailsUpvote upvotes={description?.upvotes} />
          <CardDetailsDownvote downvotes={description?.downvotes} />
        </Box>
        <CardDetailsComment comment={description?.commentCount} />
        <CardDetailsViews views={description?.views} />
      </Box>
    </Box>
  );
};

export default CardDetails;
