// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import CardImage from "./Card/CardImage";
import { ImgurImageInfo } from "../data/interfaces/imgur.interfaces";
import CardVideo from "./Card/CardVideo";

register();

interface SwipperComponentProps {
  isImage?: boolean;
  images?: ImgurImageInfo[];
  video?: string;
}

const SwipperComponent = ({ images }: SwipperComponentProps) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
    >
      {images?.map((image, index) => (
        <swiper-slide
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={index}
        >
          {image.type?.includes("video") ? (
            <CardVideo
              title={image.title}
              source={`http://${image.link.split("//")[1]}`}
            />
          ) : (
            <CardImage
              title={image.title}
              source={`http://${image.link.split("//")[1]}`}
            />
          )}
          {/* </div> */}
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default SwipperComponent;
