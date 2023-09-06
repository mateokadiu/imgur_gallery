import { Box } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import SectionMenu from "../components/SectionMenu";
import Gallery from "../components/Gallery/Gallery";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLazyGetGalleryQuery } from "../data/api/imgur.api";
import { RootContext } from "../contexts/RootContext";
import useReachedBottom from "../hooks/useReachedBottom";
import { useSelector } from "react-redux";
import {
  selectAllImagesHot,
  selectAllImagesTop,
  selectAllImagesUser,
} from "../data/store/gallerySlice";

const GalleryPage = () => {
  const [getGallery, result] = useLazyGetGalleryQuery();
  const {
    state: { section, sort, window, showViral, page },
    action: { setPage },
  } = useContext(RootContext);

  const atEndOfPage = useReachedBottom();

  const selectAllImagesHotData = useSelector(selectAllImagesHot);
  const selectAllImagesTopData = useSelector(selectAllImagesTop);
  const selectAllImagesUserData = useSelector(selectAllImagesUser);

  console.log("atEndOfPage", atEndOfPage);

  useEffect(() => {
    getGallery({
      section,
      sort,
      window,
      page,
      showViral,
    });
  }, []);

  useMemo(() => {
    if (atEndOfPage) {
      console.log("api call", page);
      getGallery({
        section,
        sort,
        window,
        page: page + 1,
        showViral,
      });
      setPage(page + 1);
    }
  }, [atEndOfPage]);

  return (
    <Box
      sx={{
        backgroundColor: "#2e3035",
        minHeight: "100vh",
        height: result.isLoading ? "100vh" : "auto",
      }}
    >
      <SectionMenu />
      {selectAllImagesHotData.length > 0 ||
      selectAllImagesTopData.length > 0 ||
      selectAllImagesUserData.length > 0 ? (
        <Gallery />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </Box>
      )}
    </Box>
  );
};

export default GalleryPage;
