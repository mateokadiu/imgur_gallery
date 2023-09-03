import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";

interface SectionMenuProps {
  section: "hot" | "top" | "user";
  setSection: React.Dispatch<React.SetStateAction<"hot" | "top" | "user">>;
}

const SectionMenu = ({ section, setSection }: SectionMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (newSection: "hot" | "top" | "user") => {
    setSection(newSection);
    handleClose();
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {section}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        onChange={(event) => {
          console.log(event, "EVENTTT");
        }}
      >
        <MenuItem value={"user"} onClick={() => handleMenuItemClick("user")}>
          User
        </MenuItem>
        <MenuItem value={"top"} onClick={() => handleMenuItemClick("top")}>
          Top
        </MenuItem>
        <MenuItem value={"hot"} onClick={() => handleMenuItemClick("hot")}>
          Hot
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SectionMenu;
