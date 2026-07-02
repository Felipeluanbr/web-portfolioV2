import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";


function Navbar() {
  return (
    <nav className="font-handwriting">
      <div>
        <div className="bg-light-red">
            <img src={Logo} alt="Logo" />
            <h1>About</h1>
            <h1>Sobre</h1>
        </div>
        <div className=""></div>
      </div>
    </nav>
  );
}

export default Navbar;
