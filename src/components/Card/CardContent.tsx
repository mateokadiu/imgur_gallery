import React from "react";
import CardVideo from "./CardVideo/CardVideo";
import CardImage from "./CardImage/CardImage";

interface CardContentProps {
  type: string;
  link: string;
  title: string;
}

const CardContent = ({ link, title, type }: CardContentProps) => {
  return type.includes("video") ? (
    <CardVideo source={`http://${link.split("//")[1]}`} />
  ) : (
    <CardImage source={`http://${link.split("//")[1]}`} title={title} />
  );
};

export default CardContent;
