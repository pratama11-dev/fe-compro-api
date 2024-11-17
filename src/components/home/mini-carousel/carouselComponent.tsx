import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const CarouselComponent = () => {
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel();
  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({ containScroll: "keepSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const thumbnails = [
    "/background/carousel/1.jpeg",
    "/background/carousel/2.jpeg",
    "/background/carousel/3.jpeg",
    "/background/carousel/4.jpeg",
    "/background/carousel/5.jpeg",
    "/background/carousel/6.jpg",
    "/background/carousel/7.jpg",
    "/background/carousel/8.jpg",
  ];

  const onSelect = useCallback(() => {
    if (!mainEmblaApi) return;
    const currentIndex = mainEmblaApi.selectedScrollSnap();
    setSelectedIndex(currentIndex);

    if (thumbEmblaApi) {
      thumbEmblaApi.scrollTo(currentIndex, true); // Sync the thumbnail carousel
    }
  }, [mainEmblaApi, thumbEmblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (mainEmblaApi) {
        mainEmblaApi.scrollTo(index, true);
      }
      setSelectedIndex(index); // Update the selected index for thumbnails
    },
    [mainEmblaApi]
  );

  useEffect(() => {
    if (!mainEmblaApi) return;
    mainEmblaApi.on("select", onSelect);
    onSelect(); // Trigger on initial load

    return () => {
      mainEmblaApi.off("select", onSelect);
    };
  }, [mainEmblaApi, onSelect]);

  return (
    <div>
      {/* Main Carousel */}
      <div
        ref={mainEmblaRef}
        style={{
          overflow: "hidden",
          width: "100%",
          height: "330px",
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex" }}>
          {thumbnails.map((thumbnail, index) => (
            <div key={index} style={{ flex: "0 0 100%", height: "330px", position: "relative" }}>
              <Image
                src={thumbnail}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div
        ref={thumbEmblaRef}
        style={{
          overflow: "hidden",
          marginTop: "15px",
          padding: "0 10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
                border: selectedIndex === index ? "2px solid #007bff" : "2px solid transparent",
                borderRadius: "4px",
                overflow: "hidden",
                width: "60px",
                height: "100%",
              }}
              onClick={() => scrollTo(index)}
            >
              <Image
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={60}
                style={{
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
