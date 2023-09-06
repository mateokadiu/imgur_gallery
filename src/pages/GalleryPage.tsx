import { Box } from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import SectionMenu from "../components/SectionMenu";
import Gallery from "../components/Gallery/Gallery";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLazyGetGalleryQuery } from "../data/api/imgur.api";
import { RootContext } from "../contexts/RootContext";
import useReachedBottom from "../hooks/useReachedBottom";

const GalleryPage = () => {
  const [getGallery, result] = useLazyGetGalleryQuery();
  const {
    state: { section, sort, window, showViral, page },
  } = useContext(RootContext);

  const atEndOfPage = useReachedBottom();

  console.log("atEndOfPage", atEndOfPage);

  useMemo(() => {
    getGallery({
      section,
      sort,
      window,
      page,
      showViral,
    });
  }, [section, sort, window, page, showViral]);

  return (
    <Box
      sx={{
        backgroundColor: "#2e3035",
        minHeight: "100vh",
        height: result.isLoading ? "100vh" : "auto",
      }}
    >
      <SectionMenu />
      {result.isSuccess && result.status === "fulfilled" ? (
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
