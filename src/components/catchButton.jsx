import './catchButton.css';
import { useState } from 'react';

function CatchButton({ onClick }) {
  const [rippling, setRippling] = useState(false);
  function handleClick() {
  setRippling(true);

  setTimeout(() => {
    setRippling(false);
  }, 900);
}
  return (
    <div className={`catch-wrapper ${rippling ? "rippling" : ""}`}>
  <span className="ripple ripple-one"></span>
  <span className="ripple ripple-two"></span>

  <button className="catch-button" onClick={() => { handleClick(); onClick(); }}>
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