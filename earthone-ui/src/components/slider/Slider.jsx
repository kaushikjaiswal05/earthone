import React, { useEffect, useState, useRef } from "react";
import "./slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

function Slider() {
  const splideRef = useRef(null);
  const videoStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "15px",
  };

  const videos = [
    {
      src: "https://cdn.shopify.com/videos/c/o/v/584bcd401f2a4e888df4d71c25df4767.mp4",
      link: "https://instagram.com/houseplusplant",
      label: "@houseplants",
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/80b98b6cd6e740b5b787d67a63f26366.mp4",
      link: "https://instagram.com/thebeardedplantaholic",
      label: "@thebeardedplantaholic",
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/e01726cb7b2141599c9025e07fede585.mp4",
      link: "https://instagram.com/mariahgrows",
      label: "@mariahgrows",
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/dd8a42f2f4124e1b9ee9500f72c31e35.mp4",
      link: "https://instagram.com/reenasplants",
      label: "@reenasplants",
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/1405764eeef6431c887786ed53b06d31.mp4",
      link: "https://youtube.com/@gardeningincanada",
      label: "@gardeningincanada",
    },
  ];

  return (
    <div className="slider">
      <p>See what our Plantfam has to say</p>
      <h1>Don’t just take our word for it</h1>
      <div className="splide-container">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 4,
            gap: "2rem",
            lazyLoad: "nearby",
            pagination: false,
            arrows: false,
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            autoScroll: {
              speed: 1,
              delay: 3000,
            },
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 1 },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {videos.map((video, index) => (
            <SplideSlide key={index}>
              <VideoPlayer
                src={video.src}
                link={video.link}
                label={video.label}
                style={videoStyle}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

function VideoPlayer({ src, link, label, style }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        style={style}
        src={src}
        type="video/mp4"
        muted
        loop
        playsInline
      />
      <button className="play-button" onClick={togglePlay}>
        {isPlaying ? "❚❚" : "▶"}
      </button>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="video-label"
      >
        {label}
      </a>
    </div>
  );
}

export default Slider;
