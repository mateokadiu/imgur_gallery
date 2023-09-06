import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoverImageQuery } from "../data/api/imgur.api";

const ImageDetailsPage = () => {
  const { id } = useParams();
  // const result = useGetCoverImageQuery(id as any);

  console.log(id);
  return <div>ImageDetailsPage</div>;
};

export default ImageDetailsPage;
