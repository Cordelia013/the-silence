import Header2 from "../layouts/Header2";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Carousel from "../assets/carousel";


function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);   

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollContainerRef.current || undefined,
      content: scrollContainerRef.current || undefined,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header2 />
      <div
        ref={scrollContainerRef}
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ marginTop: "-2rem" }}>
          {/* Section 1 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0",
              height: "100vh",
            }}
          >
            <h2
              style={{
                color: "#CB181F",
                fontSize: "96px",
                fontWeight: "bold",
                marginBottom: "15rem",
              }}
            >
              étage 3
            </h2>
            <img
              src="/assets/arrows.svg"
              alt="Arrows"
              style={{
                width: "60px",
                height: "60px",
                animation: "bounce 1.5s infinite",
              }}
            />
            <Carousel />
          </div>
          
          {/* Section 2 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "15rem 0",
              height: "100vh",
              background: "#f5f5f5",
            }}
          >
            <h2
              style={{
                color: "#181FCB",
                fontSize: "96px",
                fontWeight: "bold",
              }}
            >
              étage 2
            </h2>
          </div>
          {/* Section 3 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "15rem 0",
              height: "100vh",
            }}
          >
            <h2
              style={{
                color: "#18CB1F",
                fontSize: "96px",
                fontWeight: "bold",
              }}
            >
              étage 1
            </h2>
          </div>
        </div>
        <style>
          {`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-30px);
              }
            }
            /* Fix Header2 on top */
            .fixed-header2 {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              z-index: 1000;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Gallery;