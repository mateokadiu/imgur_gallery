import React from "react";
import { ImgurImage } from "../data/api/types";
import { useGetCoverImageQuery } from "../data/api/imgur.api";
import { QueryStatus } from "@reduxjs/toolkit/dist/query/react";

interface GalleryElementProps {
  element: ImgurImage;
}
const GalleryElement = ({ element }: GalleryElementProps) => {
  const result = useGetCoverImageQuery(element?.cover);
  console.log(result);
  return (
    <div>
      {result.isSuccess && result.status === QueryStatus.fulfilled ? (
        <img src={`http://${result.data.data.link.split("//")[1]}`} />
      ) : null}
    </div>
  );
};

export default GalleryElement;
