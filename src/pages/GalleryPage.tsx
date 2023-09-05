import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import SectionMenu from "../components/SectionMenu";
import Gallery from "../components/Gallery/Gallery";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLazyGetGalleryQuery } from "../data/api/imgur.api";

const GalleryPage = () => {
  const [getGallery, result] = useLazyGetGalleryQuery();
  const [section, setSection] = useState<"hot" | "top" | "user">("user");
  const [sort, setSort] = useState<"top" | "viral" | "time" | "rising">("top");
  const [window, setWindow] = useState<
    "day" | "week" | "month" | "year" | "all" | undefined
  >("month");
  const [page, setPage] = useState<number | undefined>(0);
  const [showViral, setShowViral] = useState<boolean>(false);

  useMemo(() => {
    getGallery({
      section,
      sort,
      window,
      page,
      showViral,
    });
  }, [section, sort, window, page, showViral]);

  return (
    <Box
      sx={{
        backgroundColor: "#2e3035",
        minHeight: "100vh",
        height: result.isLoading ? "100vh" : "auto",
      }}
    >
      <SectionMenu section={section} setSection={setSection} />
      {result.isSuccess && result.status === "fulfilled" ? (
        <Gallery data={result.data} />
      ) : (
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
      )}
    </Box>
  );
};

export default GalleryPage;
