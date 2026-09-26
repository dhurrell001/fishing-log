import './navBar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <button className="nav-item">
        <span className="nav-icon">⌂</span>
        <span>Home</span>
      </button>

      <button className="nav-item">
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