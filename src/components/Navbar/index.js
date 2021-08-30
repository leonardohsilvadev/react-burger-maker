import { Link } from "react-router-dom";
import { Logo, Nav } from "./styles";

export const Navbar = () => (
  <Nav>
    <Link to="/">
      <Logo src="/img/logo.png" alt="React Your Burger" />
    </Link>
    <Link to="/">Home</Link>
    <Link to="/orders">Orders</Link>
  </Nav>
)