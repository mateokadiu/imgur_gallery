import React from "react";

interface CardImageProps {
  source: string;
  title: string;
}

const CardImage = ({ source, title }: CardImageProps) => {
  return (
    <img
      style={{
        objectFit: "cover",
        width: "100%",
        height: "85%",
      }}
      src={source}
      alt={title} // Provide alt text for accessibility.
    />
  );
};

export default CardImage;
