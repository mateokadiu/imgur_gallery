import { Box } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import SectionMenu from "../components/SectionMenu";
import Gallery from "../components/Gallery/Gallery";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLazyGetGalleryQuery } from "../data/api/imgur.api";
import { RootContext } from "../contexts/RootContext";
import useReachedBottom from "../hooks/useReachedBottom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSection,
  selectAllImagesHot,
  selectAllImagesTop,
  selectAllImagesUser,
} from "../data/store/gallerySlice";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Show Viral" } };

const GalleryPage = () => {
  const [getGallery, result] = useLazyGetGalleryQuery();
  const {
    state: { section, sort, window, showViral, page },
    action: { setPage, setShowViral },
  } = useContext(RootContext);

  const atEndOfPage = useReachedBottom();

  const dispatch = useDispatch();

  const selectAllImagesHotData = useSelector(selectAllImagesHot);
  const selectAllImagesTopData = useSelector(selectAllImagesTop);
  const selectAllImagesUserData = useSelector(selectAllImagesUser);

  console.log("atEndOfPage", atEndOfPage);

  useEffect(() => {
    console.log(showViral);
    getGallery({
      section,
      sort,
      window,
      page,
      showViral,
    });
  }, [showViral]);

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
      <PinkSwitch
        {...label}
        checked={showViral}
        onClick={() => {
          setPage(0);
          setShowViral(!showViral);
          dispatch(resetSection(section));
        }}
      />
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
