import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { useGetGalleryByIdQuery } from "../data/api/imgur.api";
import CardContainer from "../components/Card/CardContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import SwipperComponent from "../components/SwipperComponent";
import "./ImageDetailsPage.scss";
const ImageDetailsPage = () => {
  const { id } = useParams();
  const result = useGetGalleryByIdQuery(id as any);

  const navigation = useNavigate();

  return (
    <div className="image-details-container">
      <Button
        startIcon={<ArrowBackOutlinedIcon />}
        color="secondary"
        variant="outlined"
        onClick={() => navigation(-1)}
      >
        Back To Gallery
      </Button>
      <div
        className="image-details"
        style={{
          width:
            result.data && result.data.cover_width
              ? result.data.cover_width
              : "400px",
          height:
            result.data && result.data.cover_height
              ? result.data.cover_height
              : "600px",
        }}
      >
        {result.isLoading ? (
          <LoadingSpinner />
        ) : result.isSuccess && result.data ? (
          <CardContainer
            hasHoverEffect={false}
            description={{
              commentCount: result.data.comment_count,
              downvotes: result.data.downs,
              score: result.data.score,
              upvotes: result.data.ups,
              views: result.data.views,
            }}
            title={result.data.title}
          >
            <SwipperComponent images={result.data.images} isImage={true} />
          </CardContainer>
        ) : null}
      </div>
    </div>
  );
};

export default ImageDetailsPage;
