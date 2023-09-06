import React from "react";
import {
  ImgurImage,
  ImgurImageInfo,
} from "../../data/interfaces/imgur.interfaces";
import CardVideo from "../Card/CardVideo";
import CardImage from "../Card/CardImage";
import CardContainer from "../Card/CardContainer";

interface GalleryElementProps {
  element: ImgurImage;
}

const GalleryElement = ({ element }: GalleryElementProps) => {
  let content;

  // to avoid the anomaly of the cover image being
  // undefined which happens when the type of data sent is ImgurImageInfo
  const coverImage = element.cover
    ? element.images.find((image) => image.id === element.cover)
    : (element as any as ImgurImageInfo);

  if (coverImage) {
    const source = `http://${coverImage.link.split("//")[1]}`;
    content = (
      <CardContainer
        id={element.id}
        title={element.title}
        description={{
          upvotes: element.ups,
          downvotes: element.downs,
          views: element.views,
          score: element.score,
          commentCount: element.comment_count,
        }}
      >
        {coverImage.type?.includes("video") ? (
          <CardVideo source={source} />
        ) : (
          <CardImage source={source} title={element.title} />
        )}
      </CardContainer>
    );
  } else {
    content = <CardContainer isError={true} />;
  }

  return content;
};

export default React.memo(GalleryElement, (prev, next) => {
  return prev.element.id === next.element.id;
});
