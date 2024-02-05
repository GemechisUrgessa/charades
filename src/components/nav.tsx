import { useState } from "react";
import logo from "../assets/logo_1_-removebg-preview.png";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { FaBookOpen, FaEnvelope, FaInfoCircle, FaPlay } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    console.log(languageCode);
    i18n.changeLanguage(languageCode);
  };
  return (
    <div className="NavBar">
      <div className="logo-container">
        <img
          src={logo}
          alt="logo"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <a href="/play">
              <FaPlay className="icon play-icon" />
              {t("play")}
            </a>
          </li>
          <li>
            <a href="/about">
              <FaInfoCircle className="icon" />
              {t("about")}
            </a>
          </li>
          <li>
            <a href="/rules">
              <FaBookOpen className="icon" />
              {t("rules")}
            </a>
          </li>
          <li>
            <a href="/contact">
              <FaEnvelope className="icon" />
              {t("contact")}
            </a>
          </li>
          <li>
            <select
              name="language"
              id="language"
              className="lang"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="am">Amharic</option>
              <option value="or">Oromic</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
