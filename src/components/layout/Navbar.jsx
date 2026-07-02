import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";

function Navbar() {
  return (
    <nav>
      <div>
        <div className="bg-red-500">
            <img src={Logo} alt="Logo" />
        </div>
        <div className=""></div>
      </div>
    </nav>
  );
}

export default Navbar;
