import React, { useContext, useMemo } from "react";
import GalleryElement from "./GalleryElement";
import { Masonry } from "react-masonry/dist";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useSelector } from "react-redux";
import {
  selectAllImages,
  selectGalleryState,
} from "../../data/store/gallerySlice";
import "./Gallery.scss";

const Gallery = () => {
  const { width } = useWindowDimensions();

  const galleryData = useSelector(selectAllImages);

  const { section } = useSelector(selectGalleryState);

  const memoizedList = useMemo(() => {
    return galleryData.map((value) => (
      <div
        key={value.id}
        className="gallery-item"
        style={{
          height: value.cover_height + 150 || 500,
        }}
      >
        <GalleryElement key={value.id} element={value} />
      </div>
    ));
  }, [galleryData, section, width]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Masonry
        style={{
          width: width > 1000 ? "90%" : width > 700 ? "90%" : "85%",
        }}
      >
        {memoizedList}
      </Masonry>
    </div>
  );
};

export default Gallery;
