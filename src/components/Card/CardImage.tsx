import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import "./CardImage.scss";

interface CardImageProps {
  source: string;
  title: string;
}

const CardImage = ({ source, title }: CardImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <img
        className="card-image"
        onLoad={handleLoad}
        src={source}
        alt={title} // Provide alt text for accessibility.
      />
    </>
  );
};

export default CardImage;
