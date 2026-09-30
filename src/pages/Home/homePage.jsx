import "./homePage.css";
import CatchButton from "../../components/catchButton.jsx";
import Header from "../../components/header.jsx";
import SummaryText from "../../components/summaryText.jsx";
import Navbar from "../../components/navBar.jsx";
import { clearCatches } from "../../data/catchLogRepository.js";
// import CatchMap from "../../components/catchMap.jsx";


// import CatchLogForm from '../logCatch/catchLogPage.jsx'

function HomePage() {
  return (
    <div className="main">
      <header className="header">
        <Header />
      </header>
      <button onClick={clearCatches}>
  Clear DB
  
</button>
      <section id="content">
        <CatchButton onClick={() => {}} />
      </section>
      {/* <CatchLogForm /> */}
      <section id="summary">
        <SummaryText />
      </section>

      <Navbar />
    </div>
  );
}

export default HomePage;
