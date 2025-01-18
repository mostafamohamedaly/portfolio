import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect"; // Import typewriter-effect
import Home from "../Home";

const SplashScreen = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // After the typing animation, display the homepage
    setTimeout(() => {
      setShowHome(true);
    }, 3000); // Match the typing animation duration
  }, []);

  return (
    <div className="relative h-screen bg-black flex justify-center items-center text-white !important">
      {!showHome ? (
        <div className="text-4xl font-mono">
          {/* Using typewriter effect */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to My Portfolio")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: false, // Don't loop the typing effect
              delay: 75, // Typing speed
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-transparent">
          <Home />
        </div>
      )}
    </div>
  );
};

// Homepage Content to show after splash screen
const HomepageContent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center text-3xl font-semibold text-black">
        <h1>Homepage Content</h1>
        <p>Welcome to my personal portfolio website.</p>
      </div>
    </div>
  );
};

export default SplashScreen;
