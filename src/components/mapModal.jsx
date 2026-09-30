import CatchMap from "./catchMap.jsx";
import "./mapModal.css";
import { useState } from "react";

export default function MapModal({ onClose, onConfirm }) {
    const [selectedPosition, setSelectedPosition] = useState(null);
  return (
    <div className="modal-content">
      <CatchMap onPositionChange={setSelectedPosition} />

      <div className="btn-container">
        <button className="modal-close" onClick={onClose}>

          Close
        </button>
        <button type="button" className="modal-close" onClick={() => {
          if (selectedPosition) {
            onConfirm(selectedPosition);
          }
        }}>
          Confirm
        </button>
      </div>
    </div>
  );
}
      
 
