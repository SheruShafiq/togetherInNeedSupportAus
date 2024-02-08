import "./CustomButton.css";

import { useNavigate } from "react-router-dom";

function CustomButton() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Step 1: Navigate to the loading screen first

    setTimeout(() => {
      navigate("/loadingScreen");
    }, 250);

    // Step 2: Delay navigation to the final destination
    setTimeout(() => {
      navigate("/services");
    }, 2000); // Adjust the timeout duration as needed
  };
  return (
    <button className="btn-class-name" onClick={handleButtonClick}>
      <span className="back"></span>
      <span className="front"></span>
    </button>
  );
}

export default CustomButton;
