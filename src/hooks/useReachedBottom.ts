import { useEffect, useState } from "react";

function useReachedBottom() {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight * 0.85) {
        setReachedBottom(true);
      } else {
        setReachedBottom(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return reachedBottom;
}

export default useReachedBottom;
