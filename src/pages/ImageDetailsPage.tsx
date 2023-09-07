import React from "react";
import { useParams } from "react-router-dom";
import { useGetGalleryByIdQuery } from "../data/api/imgur.api";
import CardContainer from "../components/Card/CardContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import SwipperComponent from "../components/SwipperComponent";
import "./ImageDetailsPage.scss";
const ImageDetailsPage = () => {
  const { id } = useParams();
  const result = useGetGalleryByIdQuery(id as any);

  return (
    <div className="image-details-container">
      {result.isLoading ? (
        <LoadingSpinner />
      ) : result.isSuccess && result.data ? (
        <div
          className="image-details"
          style={{
            width: result.data.cover_width,
            height: result.data.cover_height,
          }}
        >
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
        </div>
      ) : null}
    </div>
  );
};

export default ImageDetailsPage;
