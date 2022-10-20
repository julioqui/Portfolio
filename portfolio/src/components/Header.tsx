import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    return (
      <header>
        <nav className="nav">
            <Link to="/"><><button>About me</button></></Link>
            <Link to="/resume"><button>Curriculum</button></Link>
            <button>Contact</button>
        </nav>
      </header>
    );
}

export default Header;