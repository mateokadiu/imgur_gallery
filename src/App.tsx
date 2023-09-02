import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useLazyGetGalleryQuery } from "./data/api/imgur.api";
import Gallery from "./components/Gallery";

function App() {
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
    <div>
      {result.isSuccess && result.status === "fulfilled" ? (
        <Gallery data={result.data} />
      ) : null}
    </div>
  );
}

export default App;
