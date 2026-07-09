import { useState, useEffect } from "react";
import Pclp from "@/imports/Pc相談lpデザインカンプ/index";
import Splp from "@/imports/Sp相談lpデザインカンプ/index";

const PC_WIDTH = 1440;
const PC_HEIGHT = 22272;
const SP_WIDTH = 390;
const SP_HEIGHT = 24573;

const BUTTON_STYLES = `
  p[class*="Impact"] {
    white-space: nowrap;
  }

  div[class*="bg-[#d96c8a]"][class*="rounded"] {
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
  }
  div[class*="bg-[#d96c8a]"][class*="rounded"]:active {
    filter: brightness(0.85);
    transform: scale(0.97);
  }
  div[class*="bg-white"][class*="border-2"][class*="border-[#d96c8a]"][class*="rounded"] {
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
  }
  div[class*="bg-white"][class*="border-2"][class*="border-[#d96c8a]"][class*="rounded"]:active {
    filter: brightness(0.93) saturate(1.2);
    transform: scale(0.97);
  }
  div[class*="bg-[#d96c8a]"][class*="rounded-[10px]"] {
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
  }
  div[class*="bg-[#d96c8a]"][class*="rounded-[10px]"]:active {
    filter: brightness(0.85);
    transform: scale(0.95);
  }
`;

export default function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = viewportWidth < 768;
  const designWidth = isMobile ? SP_WIDTH : PC_WIDTH;
  const designHeight = isMobile ? SP_HEIGHT : PC_HEIGHT;
  const scale = viewportWidth / designWidth;

  return (
    <>
      <style>{BUTTON_STYLES}</style>
      <div style={{ width: "100%", height: `${designHeight * scale}px`, overflow: "hidden" }}>
        <div
          style={{
            width: `${designWidth}px`,
            height: `${designHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "relative",
          }}
        >
          {isMobile ? <Splp /> : <Pclp />}
        </div>
      </div>
    </>
  );
}
