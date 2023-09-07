import React, { useContext, useMemo } from "react";
import GalleryElement from "./GalleryElement";
import { Masonry } from "react-masonry/dist";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useSelector } from "react-redux";
import { selectAllImages } from "../../data/store/gallerySlice";
import { RootContext } from "../../contexts/RootContext";

const Gallery = () => {
  const { width } = useWindowDimensions();

  const galleryData = useSelector(selectAllImages);

  const {
    state: { section },
  } = useContext(RootContext);

  const memoizedList = useMemo(() => {
    return galleryData.map((value) => (
      <div
        key={value.id}
        style={{
          width: width > 1000 ? "30%" : width > 700 ? "45%" : "80%",
          height: value.cover_height || 500,
          maxHeight: "500px",
          minHeight: "300px",
          padding: "10px",
          marginLeft: width > 1000 ? "1%" : "2.5%",
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
          width: width > 1000 ? "80%" : width > 700 ? "85%" : "90%",
        }}
      >
        {memoizedList}
      </Masonry>
    </div>
  );
};

export default Gallery;
