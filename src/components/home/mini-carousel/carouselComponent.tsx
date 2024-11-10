import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";

const CarouselComponent = () => {
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel();
  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({ containScroll: "keepSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const thumbnails = [
    "../background/carousel/1.jpeg",
    "../background/carousel/2.jpeg",
    "../background/carousel/3.jpeg",
    "../background/carousel/4.jpeg",
    "../background/carousel/5.jpeg",
    "../background/carousel/6.jpg",
    "../background/carousel/7.jpg",
    "../background/carousel/8.jpg",
  ];

  const onSelect = useCallback(() => {
    if (!mainEmblaApi || !thumbEmblaApi) return;
    setSelectedIndex(mainEmblaApi.selectedScrollSnap());
    thumbEmblaApi.scrollTo(mainEmblaApi.selectedScrollSnap());
  }, [mainEmblaApi, thumbEmblaApi]);

  useEffect(() => {
    if (!mainEmblaApi) return;
    mainEmblaApi.on("select", onSelect);
    onSelect();
  }, [mainEmblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => {
      if (!mainEmblaApi || !thumbEmblaApi) return;
      mainEmblaApi.scrollTo(index);
    },
    [mainEmblaApi, thumbEmblaApi]
  );

  return (
    <div>
      {/* Main Carousel */}
      <div ref={mainEmblaRef} style={{ overflow: "hidden", width: "100%", height: "300px" }}>
        <div style={{ display: "flex" }}>
          {thumbnails.map((thumbnail, index) => (
            <div key={index} style={{ flex: "0 0 100%" }}>
              <img
                src={thumbnail}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div ref={thumbEmblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: 15 }}>
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
                border: selectedIndex === index ? "2px solid #007bff" : "2px solid transparent",
                padding: "4px",
                borderRadius: "4px",
              }}
              onClick={() => scrollTo(index)}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: "60px", height: "60px", borderRadius: "4px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
