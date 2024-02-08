import "./CustomButton.css";

import { useNavigate } from "react-router-dom";

function CustomButton() {
  const navigate = useNavigate();
  return (
    <button className="btn-class-name" onClick={() => navigate("/services")}>
      <span className="back"></span>
      <span className="front"></span>
    </button>
  );
}

export default CustomButton;
