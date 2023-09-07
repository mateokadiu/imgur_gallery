import {
  Button,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useContext } from "react";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import {
  selectGalleryState,
  setGallerySection,
} from "../data/store/gallerySlice";
import { useDispatch, useSelector } from "react-redux";

const SectionMenu = () => {
  const dispatch = useDispatch();

  const { section } = useSelector(selectGalleryState);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSection: "user" | "hot" | "top" | null
  ) => {
    if (newSection) {
      dispatch(setGallerySection(newSection));
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
