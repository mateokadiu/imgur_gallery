import React, { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, FormControlLabel, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import SectionMenu from "../components/SectionMenu";
import Gallery from "../components/Gallery/Gallery";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLazyGetGalleryQuery } from "../data/api/imgur.api";
import { RootContext } from "../contexts/RootContext";
import useReachedBottom from "../hooks/useReachedBottom";
import {
  resetSection,
  selectGalleryState,
  selectPageBySection,
} from "../data/store/gallerySlice";
import WindowSelector from "../components/WindowSelector";
import SortSelector from "../components/SortSelector";

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
    state: { section, sort, window, showViral },
    action: { setShowViral },
  } = useContext(RootContext);

  const page = useSelector(selectPageBySection(section));

  console.log(page);

  const atEndOfPage = useReachedBottom();
  const dispatch = useDispatch();

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

  const isLoading = page < 1;

  console.log(isLoading);

  return (
    <Box
      sx={{
        backgroundColor: "#2e3035",
        minHeight: "100vh",
        height: result.isLoading ? "100vh" : "auto",
      }}
    >
      <SectionMenu />

      <FormControlLabel
        control={
          <PinkSwitch
            {...label}
            checked={showViral}
            onClick={() => {
              setShowViral(!showViral);
              dispatch(resetSection(section));
            }}
          />
        }
        sx={{
          color: "#fff",
        }}
        label="Show Viral"
      />

      {section === "top" && <WindowSelector />}
      {section === "user" && <SortSelector />}

      {isLoading ? (
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
