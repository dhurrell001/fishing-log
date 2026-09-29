import './catchButton.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CatchButton() {
  const [rippling, setRippling] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
  setRippling(true);

  setTimeout(() => {
    setRippling(false);
    navigate("/log-catch");
  }, 900);
}
  return (
    <div className={`catch-wrapper ${rippling ? "rippling" : ""}`}>
  <span className="ripple ripple-one"></span>
  <span className="ripple ripple-two"></span>

  <button className="catch-button" onClick={handleClick} type="button">
    CATCH
  </button>
</div>
    // <button
    //   type="button"
    //   className="catch-button"
    //   onClick={onClick}
    // >
    //   CATCH!
    // </button>
  );
}
export default CatchButton;