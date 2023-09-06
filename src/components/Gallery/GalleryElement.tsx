import React from "react";
import { ImgurImage } from "../../data/interfaces/imgur.interfaces";
import CardVideo from "../Card/CardVideo";
import CardImage from "../Card/CardImage";
import CardContainer from "../Card/CardContainer";

interface GalleryElementProps {
  element: ImgurImage;
}

const GalleryElement = ({ element }: GalleryElementProps) => {
  let content;

  if (element.images && element.images.length > 0) {
    // If there are multiple images, find the image with id matching the cover property
    const coverImage = element.images.find(
      (image) => image.id === element.cover
    );

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
      // Handle the case where the cover image is not found within the images array
      content = <CardContainer isError={true} />;
    }
  } else {
    // If there's only one image or no images, use a simple logic
    content = <CardContainer />;
  }

  return content;
};

export default React.memo(GalleryElement, (prev, next) => {
  return prev.element.id === next.element.id;
});
