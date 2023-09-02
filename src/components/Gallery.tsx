import React, { useMemo } from "react";
import { ImgurImage } from "../data/api/types";
import GalleryElement from "./GalleryElement";

interface GalleryProps {
  data: ImgurImage[];
}

const Gallery = ({ data }: GalleryProps) => {
  const memoizedList = useMemo(() => {
    const galleryData: JSX.Element[] = [];

    data.map((value) =>
      galleryData.push(<GalleryElement key={value.id} element={value} />)
    );

    return galleryData;
  }, [data]);
  return <div>{memoizedList}</div>;
};

export default Gallery;
