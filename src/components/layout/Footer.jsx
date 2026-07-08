import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";
import hoverLinksNav from "../../utils/navLinksStyles";
function Footer() {
  return (
    <footer className="flex flex-col w-full justify-center items-center text-light-gray">
        <hr className="border border-dark-card-border/38 w-full"/>
        
      <div className="flex w-full max-w-[1024px] mt-8">
        
        <div className="flex w-full justify-between p-4">
          <div className="flex flex-col  text-medium-gray justify-between">
            <div>
              <Link>
                <img src={Logo} alt="Logo" className="w-23 mb-5" />
              </Link>
              <p>Obrigado por passar por aquiッ</p>
            </div>

            <p>© 2026 Felipe Luan. Todos os direito s reservados.</p>
          </div>

          <div className="flex gap-30 ">
            <div className="flex flex-col gap-4">
              <p className="font-bold mb-2">Links</p>
              <Link to="/about" className={hoverLinksNav()}>Sobre</Link>
              <Link to="/projects" className={hoverLinksNav()}>Projetos</Link>
              <Link className={hoverLinksNav()}>Tecnologia</Link>
              <Link to="/contact" className={hoverLinksNav()}>Contato</Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold mb-2">Redes Sociais</p>
              <Link to="/" className={hoverLinksNav()}>E-mail</Link>
              <Link to="/" className={hoverLinksNav()}>LinkedIn</Link>
              <Link to="/" className={hoverLinksNav()}>GitHub</Link>
              <Link to="/" className={hoverLinksNav()}>TikTok</Link>
              <Link to="/" className={hoverLinksNav()}>Instagram</Link>
              <Link to="/" className={hoverLinksNav()}>Youtube</Link>
              <Link to="/" className={hoverLinksNav()}>Kwai</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
