import React from "react";
import { useParams } from "react-router-dom";
import { useGetGalleryByIdQuery } from "../data/api/imgur.api";
import SwipperComponent from "../components/SwipperComponent";

const ImageDetailsPage = () => {
  const { id } = useParams();
  const result = useGetGalleryByIdQuery(id as any);
  console.log(result);

  console.log(id);
  return <SwipperComponent />;
};

export default ImageDetailsPage;
