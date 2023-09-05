import React, { useMemo } from "react";
import GalleryElement from "./GalleryElement";
import { Masonry } from "react-masonry/dist";
import { ImgurImage } from "../../data/interfaces/imgur.interfaces";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface GalleryProps {
  data: ImgurImage[];
}

const Gallery = ({ data }: GalleryProps) => {
  const { width } = useWindowDimensions();

  const memoizedList = useMemo(() => {
    return data.map((value) => (
      <div
        key={value.id}
        style={{
          width: width > 1000 ? "30%" : width > 700 ? "45%" : "90%",
          height: value.cover_height,
          maxHeight: "500px",
          minHeight: "300px",
          padding: "10px",
          marginLeft: width > 1000 ? "1%" : "2.5%",
        }}
      >
        <GalleryElement key={value.id} element={value} />
      </div>
    ));
  }, [data, width]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Masonry
        enterOneAfterAnother={true}
        style={{
          width: width > 1000 ? "80%" : width > 700 ? "85%" : "90%",
        }}
        updateOnWindowResize={true}
      >
        {memoizedList}
      </Masonry>
    </div>
  );
};

export default Gallery;
