import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";
import LinkedInIcon from "../../assets/icons/LinkedIn.svg?react";
import Xicon from "../../assets/icons/X.svg?react";
import GitHubIcon from "../../assets/icons/GitHub.svg?react";
import SunIcon from "../../assets/icons/Sun.svg?react";
import ChevronDownIcon from "../../assets/icons/ChevronDown.svg?react";
import hoverLinksNav from "../../utils/navLinksStyles";

function Navbar() {
  const [maisOpen, setMaisOpen] = useState(false);
  return (
    <nav className="font-inter fixed flex w-full justify-center items-center max-w-[1024px] h-[60px] bg-black rounded-xl mt-8 border border-dark-card-border/38 text-light-gray p-4 z-50">
      <div className="flex w-full justify-between ">
        <div className=" flex gap-10">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <Link to="/about" className={hoverLinksNav()}>
            Sobre
          </Link>
          <Link to="/projects" className={hoverLinksNav()}>
            Projetos
          </Link>
          <Link to="/notebook" className={hoverLinksNav()}>
            Notas
          </Link>
          <Link to="/contact" className={hoverLinksNav()}>
            Contato
          </Link>

          <div className="relative">
            <button
              onClick={() => {
                setMaisOpen(!maisOpen);
              }}
            >
              Mais
            </button>

            { maisOpen &&(
              <div className="absolute top-full left-0 mt-6 w-full h-full bg-black/50 flex flex-col gap-4">
                <Link to="/tech-stack" className={hoverLinksNav()}>Tecnologia</Link>
                <Link to="#" className={hoverLinksNav()}>Livros</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <Link to="#" className={hoverLinksNav()}>
          <LinkedInIcon className="h-6 w-6" />
        </Link>

        <Link to="#" className={hoverLinksNav()}>
          <Xicon className="h-6 w-6" />
        </Link>

        <Link to="#" className={hoverLinksNav()}>
          <GitHubIcon className="h-6 w-6" />
        </Link>

        <p>|</p>

        <Link to="#" className={hoverLinksNav()}>
          <SunIcon className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
