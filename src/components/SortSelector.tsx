import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryState, setGallerySort } from "../data/store/gallerySlice";

export default function SortSelector() {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);

  const { sort } = useSelector(selectGalleryState);

  const dispatch = useDispatch();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (value: typeof sort) => {
    dispatch(setGallerySort(value));
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Button
        id="sorting-button"
        aria-controls={open ? "sorting-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleButtonClick}
      >
        {sort && sort.toUpperCase()}
      </Button>
      <Menu
        id="sorting-menu"
        anchorEl={menuAnchorEl}
        open={open}
        onClose={() => setMenuAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "sorting-button",
        }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("time")}
          selected={sort === "time"}
        >
          Time
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("top")}
          selected={sort === "top"}
        >
          Top
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("viral")}
          selected={sort === "viral"}
        >
          Viral
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("rising")}
          selected={sort === "rising"}
        >
          Rising
        </MenuItem>
      </Menu>
    </>
  );
}
