import "../components/LoadingScreen.css";

import { useEffect, useState } from "react";

import { Box } from "@mui/material";

function LoadingScreen() {
  const [visible, setVisible] = useState(true); // Start visible
  useEffect(() => {
    // Simulate loading delay or mount effect
    const timer = setTimeout(() => {
      setVisible(false); // Hide after 5 seconds (or when your condition is met)
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const animationClass = visible ? "fadeIn" : "fadeOut";
  return (
    <Box id="loading" className={animationClass}>
      <div className="playground">
        <div className="washing-machine">
          <div className="board">
            <div className="button"></div>
            <div className="button"></div>
            <div className="button circle"></div>
            <div className="button circle"></div>
          </div>
          <div className="window">
            <div className="content">
              <div className="sock orange"></div>
              <div className="sock green"></div>
              <div className="sock red"></div>
              <div className="cat">
                <div className="head">
                  <div className="ear"></div>
                  <div className="ear right"></div>
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
                <div className="body"></div>
                <div className="feet"></div>
                <div className="tail"></div>
              </div>
            </div>
            <div className="bubbleLakas">
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
              <div className="bubbleLaka"></div>
            </div>
          </div>
          <div className="badge">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default LoadingScreen;
