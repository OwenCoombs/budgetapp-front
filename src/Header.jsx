import { Link } from "react-router-dom"
import logo from "./assets/budgetbeelogo.svg"

function Header() {
  return (
    <header className="header">
      <Link className="nav-link" to='/'><img id="logonav" src={logo} /></Link>
      <nav className="nav-links">
        <Link className="nav-link" to='/login'>Login</Link>
      </nav>
    </header>
  );
}

export default Header;