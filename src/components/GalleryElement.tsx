import React from "react";
import { ImgurImage } from "../data/interfaces/imgur.interfaces";
import { useGetCoverImageQuery } from "../data/api/imgur.api";
import { QueryStatus } from "@reduxjs/toolkit/dist/query/react";
import LoadingSpinner from "./LoadingSpinner";

interface GalleryElementProps {
  element: ImgurImage;
}
const GalleryElement = ({ element }: GalleryElementProps) => {
  const result = useGetCoverImageQuery(element?.cover);
  console.log(result);
  return result.isSuccess &&
    result.status === QueryStatus.fulfilled &&
    !result.data.link.includes("mp4") ? (
    <img
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
      src={`http://${result.data.link.split("//")[1]}`}
    />
  ) : result.isSuccess &&
    result.status === QueryStatus.fulfilled &&
    result.data.link.includes("mp4") ? (
    <video width="100%" height="100%" controls>
      <source src={`http://${result.data.link.split("//")[1]}`} />
    </video>
  ) : (
    <LoadingSpinner />
  );
};

export default React.memo(GalleryElement);
