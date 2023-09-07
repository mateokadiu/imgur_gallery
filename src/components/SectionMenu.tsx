import {
  Button,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useCallback, useContext } from "react";
import { RootContext } from "../contexts/RootContext";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import { resetGalleryState } from "../data/store/gallerySlice";
import { useDispatch } from "react-redux";

const SectionMenu = () => {
  const {
    state: { section },
    action: { setSection },
  } = useContext(RootContext);

  const dispatch = useDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSection: "user" | "hot" | "top" | null
  ) => {
    if (newSection) {
      setSection(newSection);
      dispatch(resetGalleryState());
    }
  };

  return (
    <ToggleButtonGroup
      value={section}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{ "& .MuiButton-label": { color: "#fff" } }}
    >
      <ToggleButton color="primary" value="user">
        <TagFacesOutlinedIcon />
      </ToggleButton>
      <ToggleButton color="error" value="hot">
        <WhatshotOutlinedIcon />
      </ToggleButton>
      <ToggleButton color="success" value="top">
        <ArrowUpwardOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SectionMenu;
