import { Box } from "@mui/material";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

interface CardTitleProps {
  title: string;
}

const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#474a51",
        maxHeight: "15%",
        position: "absolute",
        zIndex: 10,
        top: 0,
        width: "100%",
        minHeight: "3.5rem",
        boxShadow: 15,
      }}
    >
      <Box sx={{ padding: "0.5rem" }}>
        <LinesEllipsis
          text={title}
          maxLine="2"
          style={{ color: "white" }}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </Box>
    </Box>
  );
};

export default CardTitle;
