import React, { useMemo } from "react";
import { ImgurImage } from "../data/interfaces/imgur.interfaces";
import GalleryElement from "./GalleryElement";
import { Masonry } from "react-masonry/dist";

interface GalleryProps {
  data: ImgurImage[];
}

const Gallery = ({ data }: GalleryProps) => {
  const memoizedList = useMemo(() => {
    return data.map((value) => (
      <div
        key={value.id}
        style={{
          width: "30%",
          height: value.cover_height,
          maxHeight: "500px",
          minHeight: "300px",
          padding: "10px",
        }}
      >
        <GalleryElement key={value.id} element={value} />
      </div>
    ));
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2e3035",
      }}
    >
      <Masonry
        enterOneAfterAnother={true}
        style={{
          width: "80%",
        }}
      >
        {memoizedList}
      </Masonry>
    </div>
  );
};

export default Gallery;
