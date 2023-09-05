import React, { useState, useEffect } from "react";

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update the window dimensions
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return windowDimensions;
}

export default useWindowDimensions;
