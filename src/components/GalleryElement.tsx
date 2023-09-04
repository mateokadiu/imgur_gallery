import React from "react";
import { ImgurImage } from "../data/interfaces/imgur.interfaces";
import { useGetCoverImageQuery } from "../data/api/imgur.api";
import { QueryStatus } from "@reduxjs/toolkit/dist/query/react";
import LoadingSpinner from "./LoadingSpinner";
import { Box, Typography } from "@mui/material";
import CardVideo from "./CardVideo";
import CardImage from "./CardImage";
import CardContainer from "./CardContainer";
// Define a constant for the background color.

interface GalleryElementProps {
  element: ImgurImage;
}

const GalleryElement = ({ element }: GalleryElementProps) => {
  const result = useGetCoverImageQuery(element?.cover);
  console.log(element.title, element.id);
  let content;

  if (result.isSuccess && result.status === QueryStatus.fulfilled) {
    const source = `http://${result.data.link.split("//")[1]}`;

    content = (
      <CardContainer title={element.title}>
        {result?.data?.link?.includes("mp4") ? (
          <CardVideo source={source} />
        ) : (
          <CardImage source={source} title={element.title} />
        )}
      </CardContainer>
    );
  } else if (result.isError) {
    content = <CardContainer isError={true} />;
  } else {
    content = (
      <CardContainer>
        <LoadingSpinner />
      </CardContainer>
    );
  }

  return content;
};

export default React.memo(GalleryElement, (prev, next) => {
  return prev.element.id === next.element.id;
});
