import React from "react";
import { ImgurImage } from "../data/interfaces/imgur.interfaces";
import { useGetCoverImageQuery } from "../data/api/imgur.api";
import { QueryStatus } from "@reduxjs/toolkit/dist/query/react";
import LoadingSpinner from "./LoadingSpinner";
import { Box, Typography } from "@mui/material";

const backgroundColor = "#474a51"; // Define a constant for the background color.

interface GalleryElementProps {
  element: ImgurImage;
}

const GalleryElement = ({ element }: GalleryElementProps) => {
  const result = useGetCoverImageQuery(element?.cover);
  console.log(element.title, element.id);
  let content;

  if (result.isSuccess && result.status === QueryStatus.fulfilled) {
    const source = `http://${result.data.link.split("//")[1]}`;

    if (result.data.link.includes("mp4")) {
      content = (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor,
          }}
        >
          <video
            width="100%"
            style={{
              objectFit: "cover",
            }}
            height="85%"
            controls
          >
            <source src={source} />
          </video>
          <Box sx={{ backgroundColor, maxHeight: "15%" }}>
            <Typography variant="h6" fontSize="1rem" color="white">
              {element?.title}
            </Typography>
          </Box>
        </Box>
      );
    } else {
      content = (
        <Box sx={{ width: "100%", height: "100%", backgroundColor }}>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "85%",
            }}
            src={source}
            alt={element.title} // Provide alt text for accessibility.
          />
          <Box sx={{ backgroundColor }}></Box>
        </Box>
      );
    }
  } else {
    content = <LoadingSpinner />;
  }

  return content;
};

export default React.memo(GalleryElement);
