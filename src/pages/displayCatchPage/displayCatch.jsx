import DisplayCatchTile from "../../components/displayCatchTile.jsx";
import "./displayCatch.css";

// import "./catchLogPage.css";
import Header from "../../components/header.jsx";
import Navbar from "../../components/navBar.jsx";

// for the form to log a catch. Store the  fielddata in state.
// Input validated in form. On submit, log the data to console. Later,
// send to backend for storage in database.
import { useEffect, useState } from "react";
import { getCatches } from "../../data/catchLogRepository.js";
export default function DisplayCatch() {
 const [catches, setCatches] = useState([]);

  useEffect(() => {
    async function loadCatches() {
      const savedCatches = await getCatches();
      setCatches(savedCatches);
    }

    loadCatches();
  }, []);


  return (
    <div className="main">
      <header className="header">
        <Header />
      </header>
          <section id="content">
        {catches.map((catchItem) => (
          <DisplayCatchTile
            key={catchItem.id}
            fishType={catchItem.fishType}
            fishWeight={catchItem.fishWeight}
            catchDate={catchItem.catchDate}
            catchLocation={catchItem.location}
            catchPhoto={catchItem.photo}
            catchTime={catchItem.catchTime}
            baitType ={catchItem.baitType}
            latitude={catchItem.latitude}
            longitude={catchItem.longitude}
          />
        ))}
      </section>
      <Navbar />
       
    </div>
    
  );
}

     
