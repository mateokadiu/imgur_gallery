import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

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
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        onLoad={handleLoad}
        src={source}
        alt={title} // Provide alt text for accessibility.
      />
    </>
  );
};

export default CardImage;
