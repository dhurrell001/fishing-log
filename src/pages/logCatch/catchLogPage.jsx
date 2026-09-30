import "./catchLogPage.css";
import Header from "../../components/header.jsx";
import Navbar from "../../components/navBar.jsx";
import { useState } from "react";
import { saveCatch } from "../../data/catchLogRepository.js";
// import CatchMap from "../../components/catchMap.jsx";
import MapModal from "../../components/mapModal.jsx";
// for the form to log a catch. Store the  fielddata in state.
// Input validated in form. On submit, log the data to console. Later,
// send to backend for storage in database.
export default function CatchLogForm() {
  const [showModal, setShowModal] = useState(false);
  const [catchData, setCatchData] = useState({
    fishType: "",
    fishWeight: "",
    fishLength: "",
    catchDate: "",
    catchTime: "",
    baitType: "",
    location: "",
    photo: null,
    latitude: null,
    longitude: null,
  });
  const fishNames = [
    { id: 1, name: "Bass" },
    { id: 2, name: "Trout" },
    { id: 3, name: "Salmon" },
    { id: 4, name: "Catfish" },
    { id: 5, name: "Pike" },
    { id: 6, name: "Walleye" },
    { id: 7, name: "Perch" },
    { id: 8, name: "Carp" },
    { id: 9, name: "Bluegill" },
    { id: 10, name: "Crappie" },
  ];
  async function handleSubmit(event) {
    event.preventDefault();

    console.log("SUBMIT PRESSED");
    console.log(catchData);
//   Save the catch data to the database using the saveCatch function.
    try {
      const id = await saveCatch(catchData);
      console.log("Catch saved with ID:", id);
      alert("Catch saved!");
    } catch (error) {
      console.error("SAVE FAILED:", error);
      alert("Save failed: " + error.message);
    }
  }
  return (
    <div className="main">
      <header className="header">
        <Header />
      </header>
      {showModal && (
        <div className="modal-overlay">
          <MapModal
            onClose={() => setShowModal(false)}
            onConfirm={(position) => {
              setCatchData({
                ...catchData,
                latitude: position[0],
                longitude: position[1],
              });

              setShowModal(false);
            }}
          />
        </div>
      )}
      <section id="content">
        <form onSubmit={handleSubmit} className="catch-log-form">
          <div className="form-row">
            {/* // each field has a label and an input. The input is controlled by state. On change, the state is updated. */}
            <label htmlFor="fishType">Fish Species:</label>
            <select
              id="fishType"
              type="text"
              name="fishType"
              value={catchData.fishType}
              required={true}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  fishType: e.target.value,
                })
              }
            >
              <option value="">Select a fish species</option>
              {fishNames.map((fish) => (
                <option key={fish.id} value={fish.name}>
                  {fish.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="fishWeight">Weight (lbs):</label>

            {/* <input type="number" id="fishWeight" name = "fishWeight" step="0.01" /> */}
            <input
              id="fishWeight"
              type="number"
              name="fishWeight"
              min="0.01"
              max="200"
              step="0.01"
              value={catchData.fishWeight}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  fishWeight: e.target.value,
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="fishLength">Length (mm):</label>
            <input
              id="fishLength"
              type="number"
              name="fishLength"
              min="1"
              max="2000"
              step="1"
              value={catchData.fishLength}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  fishLength: e.target.value,
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="catchDate">Day caught:</label>
            <input
              id="catchDate"
              type="date"
              name="catchDate"
              value={catchData.catchDate}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  catchDate: e.target.value,
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="catchTime">Time caught:</label>
            <input
              id="catchTime"
              type="time"
              name="catchTime"
              value={catchData.catchTime}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  catchTime: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row">
            <label htmlFor="baitType">Bait type:</label>
            <input
              id="baitType"
              type="text"
              name="baitType"
              value={catchData.baitType}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  baitType: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row">
            <label htmlFor="location">Location:</label>
            {/* <input
              id="location"
              type="text"
              name="location"
              value={catchData.location}
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  location: e.target.value,
                })
              }
            /> */}
            <button
              type="button"
              className="location-btn"
              onClick={() => setShowModal(!showModal)}
            >
              Show Map
            </button>
          </div>
          <div className="form-row">
            <label htmlFor="photo">Photo:</label>
            <input
              id="photo"
              type="file"
              name="photo"
              accept="image/*"
              capture="environment"
              className="photo-input"
              onChange={(e) =>
                setCatchData({
                  ...catchData,
                  photo: e.target.files[0] || null,
                })
              }
            />
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <Navbar />
    </div>
  );
}
