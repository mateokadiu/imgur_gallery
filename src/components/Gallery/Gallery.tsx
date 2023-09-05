import React, { useContext, useMemo } from "react";
import GalleryElement from "./GalleryElement";
import { Masonry } from "react-masonry/dist";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useSelector } from "react-redux";
import {
  selectAllImagesHot,
  selectAllImagesTop,
  selectAllImagesUser,
} from "../../data/store/gallerySlice";
import { RootContext } from "../../contexts/RootContext";

const Gallery = () => {
  const { width } = useWindowDimensions();

  const galleryUserSectionData = useSelector(selectAllImagesUser);
  const galleryHotSectionData = useSelector(selectAllImagesHot);
  const galleryTopSectionData = useSelector(selectAllImagesTop);

  const {
    state: { section },
  } = useContext(RootContext);

  const memoizedList = useMemo(() => {
    if (section === "hot") {
      return galleryHotSectionData.map((value) => (
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
    } else if (section === "top") {
      return galleryTopSectionData.map((value) => (
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
    }
    return galleryUserSectionData.map((value) => (
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
  }, [galleryUserSectionData, section, width]);

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
