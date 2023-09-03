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
      height="85%"
      controls
    >
      <source src={source} />
    </video>
  );
};

export default CardVideo;
