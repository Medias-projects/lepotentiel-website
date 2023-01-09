import React from "react";
import Logo from "../../shared/Logo";
import Headericons from "../Header/Headericons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black px-8 md:px-24 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-6 py-4 ">
        <div className="contact">
          <Logo />
          <h3 className="text-white mt-6 mb-4">
            Siège Social: 873; av. du Bas Congo, <br /> Kinshasa-Gombe.
          </h3>
          <ul>
            <li className="text-white mb-4">
              Email:
              <a
                href="mailto:contact@lepotentiel.cd
              "
                className="text-white mb-4"
              >
                contact@lepotentiel.cd
              </a>
            </li>
            <li className="text-white mb-4">
              Téléphone:
              <a
                href="tel:+243 999 999 999
              "
                className="text-white mb-4"
              >
                +243 999 999 999
              </a>
            </li>
          </ul>
          <Headericons />
        </div>
        <div className="categories">
          <h3 className="text-white text-xl uppercase mb-6 font-bold ">Menu</h3>
          <ul>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Accueil</Link>
            </li>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Contact</Link>
            </li>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">A Propos</Link>
            </li>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Rédaction</Link>
            </li>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Mentions Légales</Link>
            </li>

            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Politique de Confidentialité</Link>
            </li>
          </ul>
        </div>
        <div className="usefuls-links">
          <h3 className="text-white text-xl uppercase mb-6">Liens utiles</h3>
          <ul>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Publicité</Link>
            </li>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Journal Papier</Link>
            </li>
            <li className="text-white mb-4 hover:text-primary">
              <Link href="/">Articles exclusifs</Link>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3 className="text-white text-xl uppercase mb-6">Newsletter</h3>
          <p className="text-white mb-4">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières
            actualités
          </p>
          <div className="input-newsletter">
            <input
              type="text"
              className="bg-white text-black w-full p-2 mb-4 focus:outline-none"
              placeholder="Votre email"
            />
            <button className="bg-primary text-white w-full p-2">
              S&apos;inscrire
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
