import "./GalleryPage.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import SectionMenu from "../../components/SectionMenu";
import Gallery from "../../components/Gallery/Gallery";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useLazyGetGalleryQuery } from "../../data/api/imgur.api";
import useReachedBottom from "../../hooks/useReachedBottom";
import { selectGalleryState } from "../../data/store/gallerySlice";
import WindowSelector from "../../components/WindowSelector";
import SortSelector from "../../components/SortSelector";
import ShowViralSwitch from "../../components/ShowViralSwitch";

const GalleryPage = () => {
  const [getGallery] = useLazyGetGalleryQuery();

  const { page, window, section, sort, showViral } =
    useSelector(selectGalleryState);

  const atEndOfPage = useReachedBottom();

  useEffect(() => {
    if (page === 0) {
      getGallery({
        section,
        sort,
        window,
        page,
        showViral,
      });
    }
  }, [showViral, section, sort, window]);

  useEffect(() => {
    if (atEndOfPage) {
      getGallery({
        section,
        sort,
        window,
        page,
        showViral,
      });
    }
  }, [atEndOfPage]);

  return (
    <Box className="gallery-page-container">
      <Box className="gallery-page-header">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          gap={5}
        >
          <SectionMenu />
          <ShowViralSwitch />
        </Box>
        <Box>
          {section === "top" && <WindowSelector />}
          {section === "user" && <SortSelector />}
        </Box>
      </Box>

      {page < 1 ? (
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
      ) : (
        <Gallery />
      )}
    </Box>
  );
};

export default GalleryPage;
