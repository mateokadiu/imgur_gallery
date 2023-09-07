import React from "react";
import { FormControlLabel, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGalleryState,
  setGalleryShowViral,
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

const ShowViralSwitch = () => {
  const { showViral } = useSelector(selectGalleryState);

  const dispatch = useDispatch();

  return (
    <FormControlLabel
      control={
        <PinkSwitch
          {...{
            inputProps: {
              "aria-label": showViral ? "Hide Viral" : "Show Viral",
            },
          }}
          checked={showViral}
          onClick={() => {
            dispatch(setGalleryShowViral(!showViral));
          }}
        />
      }
      sx={{
        color: "#fff",
      }}
      label={showViral ? "Hide Viral" : "Show Viral"}
    />
  );
};

export default ShowViralSwitch;
