
import './catchLogPage.css'
import Header from './header.jsx'
import Navbar from './navBar.jsx'

export default function CatchLogForm () {

function handleSubmit(event) {
  event.preventDefault();
  const fishType = event.target.fishType.value;
  console.log(`Fish type: ${fishType}`);
}
  return (
    <div className = "main">
      <header className="header">
        <Header />
      </header>
      <section id="content">
       
        <form onSubmit={handleSubmit} className="catch-log-form">
        <label htmlFor="fishType">Fish Species:</label>
        <input type="text" id="fishType" name="fishType" />

        <label htmlFor = "fishWeight">Weight (lbs):</label>
        <input type="number" id="fishWeight" name = "fishWeight" step="0.01" />

        <label htmlFor="fishLength">Length (mm):</label>
        <input type="number" id="fishLength" name="fishLength" step="0.01" />

        <label htmlFor = "catchDate">Day caught:</label>
        <input type="date" id = "catchDate" name="catchDate" />

        <label htmlFor="catchTime">Time caught:</label>
        <input type="time" id="catchTime" name="catchTime" />

        </form>
       
       
      </section>
     

      
        <Navbar />
      

    </div>
  )
}

