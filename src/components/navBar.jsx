import './navBar.css'
import { useNavigate } from "react-router-dom";
// Navbar component with navigation buttons for Home, Log, and Settings pages. Uses useNavigate hook from react-router-dom for navigation.
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <button className="nav-item" onClick={() => navigate('/')}>
        <span className="nav-icon">⌂</span>
        <span>Home</span>
      </button>

      <button className="nav-item " onClick={() => navigate('/displayCatch')}>
        <span className="nav-icon">▤</span>
        <span>Log</span>
      </button>  

      <button className="nav-item">
        <span className="nav-icon">⚙</span>
        <span>Settings</span>
      </button>
    </nav>
  );
}

export default Navbar;