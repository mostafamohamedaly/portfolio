import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}  // Size of the cursor
        outerSize={20}  // Size of the glowing outer circle
        color="255, 255, 255"  // White color (RGB)
        outerAlpha={0.4}  // Opacity of the outer circle
        innerScale={1.5}  // Inner cursor scaling
        outerScale={1.5}   // Outer cursor scaling
        style={{ pointerEvents: "none" }} // Prevent the cursor from interfering with other elements
      />
    </div>
  );
};

export default Cursor;