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

const SectionMenu = () => {
  const {
    state: { section },
    action: { setSection },
  } = useContext(RootContext);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSection: "user" | "hot" | "top" | null
  ) => {
    newSection && setSection(newSection);
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
