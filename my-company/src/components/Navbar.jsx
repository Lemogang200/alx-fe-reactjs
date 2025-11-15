import { Link } from "react-router-dom";

function Navbar() {
  const navStyles = {
    backgroundColor: "#333",
    padding: "15px",
    display: "flex",
    gap: "20px",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyles}>
      <Link style={linkStyles} to="/">Home</Link>
      <Link style={linkStyles} to="/about">About</Link>
      <Link style={linkStyles} to="/services">Services</Link>
      <Link style={linkStyles} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;