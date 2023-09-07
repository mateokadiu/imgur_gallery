import React from "react";

interface CardVideoProps {
  source: string;
}

const CardVideo = ({ source }: CardVideoProps) => {
  return (
    <video
      width="100%"
      style={{
        objectFit: "cover",
      }}
      height="100%"
      controls
      muted
    >
      <source src={source} />
    </video>
  );
};

export default CardVideo;
