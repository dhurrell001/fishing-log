
import './App.css'
import CatchButton from './components/catchButton.jsx'
import Header from './components/header.jsx'
import SummaryText from './components/summaryText.jsx'
import Navbar from './components/navBar.jsx'
import CatchLogForm from './components/catchLogPage.jsx'

function App() {


  return (
    <div className = "main">
      <header className="header">
        <Header />
      </header>
      <section id="content">
       
        
        <CatchButton onClick={() => {}} />
       
      </section>
      <CatchLogForm />
      <section id="summary">
        <SummaryText />
      </section>

      
        <Navbar />
      

    </div>
  )
}

export default App
