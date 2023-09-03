import React, { useMemo } from "react";
import { ImgurImage } from "../data/interfaces/imgur.interfaces";
import GalleryElement from "./GalleryElement";
import { Masonry } from "react-masonry/dist";

interface GalleryProps {
  data: ImgurImage[];
}

const Gallery = ({ data }: GalleryProps) => {
  const memoizedList = useMemo(() => {
    const galleryData: JSX.Element[] = [];

    data.map((value, index) =>
      galleryData.push(
        <div
          style={{
            width: "30%",
            height: value.cover_height,
            maxHeight: "400px",
            minHeight: "300px",
            padding: "5px",
          }}
        >
          <GalleryElement key={value.id} element={value} />
        </div>
      )
    );

    return galleryData;
  }, [data]);
  return (
    <div>
      <Masonry
        enterOneAfterAnother={true}
        style={{
          gap: "10px",
        }}
      >
        {memoizedList}
      </Masonry>
    </div>
  );
};

export default Gallery;
