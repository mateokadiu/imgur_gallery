import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RootContext } from "../contexts/RootContext";
import { useDispatch } from "react-redux";
import { resetSection } from "../data/store/gallerySlice";

export default function WindowSelector() {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);

  const {
    state: { window },
    action: { setWindow },
  } = useContext(RootContext);

  const dispatch = useDispatch();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (value: typeof window) => {
    setWindow(value);
    dispatch(resetSection("top"));
    setMenuAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="window-button"
        aria-controls={open ? "window-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleButtonClick}
      >
        {window && window.toUpperCase()}
      </Button>
      <Menu
        id="window-menu"
        anchorEl={menuAnchorEl}
        open={open}
        onClose={() => setMenuAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "window-button",
        }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("day")}
          selected={window === "day"}
        >
          Day
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("week")}
          selected={window === "week"}
        >
          Week
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("month")}
          selected={window === "month"}
        >
          Month
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("year")}
          selected={window === "year"}
        >
          Year
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("all")}
          selected={window === "all"}
        >
          All
        </MenuItem>
      </Menu>
    </div>
  );
}
