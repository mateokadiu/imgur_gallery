import React from "react";
import { Box } from "@mui/material";
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
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
      }}
    >
      <Box sx={{ padding: "0.5rem" }}>
        <LinesEllipsis
          text={title}
          maxLine="2"
          style={{ color: "white", fontSize: "0.9rem" }}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </Box>
    </Box>
  );
};

export default CardTitle;
