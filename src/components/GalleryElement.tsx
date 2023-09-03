import React from "react";
import { ImgurImage } from "../data/interfaces/imgur.interfaces";
import { useGetCoverImageQuery } from "../data/api/imgur.api";
import { QueryStatus } from "@reduxjs/toolkit/dist/query/react";

interface GalleryElementProps {
  element: ImgurImage;
}

const GalleryElement = ({ element }: GalleryElementProps) => {
  const result = useGetCoverImageQuery(element?.cover);

  if (
    result.isSuccess &&
    result.status === QueryStatus.fulfilled &&
    result.data.link
  ) {
    const isVideo = result.data.link.includes("mp4");

    if (isVideo) {
      return (
        <video width="100%" height="100%" controls>
          <source src={`http://${result.data.link.split("//")[1]}`} />
        </video>
      );
    } else {
      return (
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src={`http://${result.data.link.split("//")[1]}`}
          alt=""
        />
      );
    }
  }

  return null;
};

export default React.memo(GalleryElement);
