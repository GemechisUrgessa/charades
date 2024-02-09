import React from "react";
import {
  FaPlay,
  FaBookOpen,
  FaInfoCircle,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa"; // Importing icons // Make sure to create a corresponding CSS file
// import logo from "../assets/logo_1_-removebg-preview.png"; // Replace with your actual logo path
import i18n from "../i18n";
import { motion } from "framer-motion";
import { FaTheaterMasks } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const MainPage = () => {
  const [showLanguages, setShowLanguages] = React.useState(false);
  const { t } = useTranslation();
  const handleLanguageClick = () => {
    setShowLanguages(!showLanguages);
  };

  const handleLanguageChange = (e: string) => {
    setShowLanguages(false);
    localStorage.setItem("language", e);
    i18n.changeLanguage(e);
  };
  return (
    <div className="main-container">
      <header className="header">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaTheaterMasks className="logo" size="50" />
        </motion.div>
        <h1>Charades Game</h1>
      </header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <p>
          <p className="description">{t("description")}</p>
        </p>
      </motion.div>

      <div className="content">
        <div className="menu">
          <a href="/play" className="menu-item">
            <FaPlay className="icon play-icon" />
            {t("play")}
          </a>
          <a href="/about" className="menu-item">
            <FaInfoCircle className="icon" />
            {t("about")}
          </a>
          <a href="/rules" className="menu-item">
            <FaBookOpen className="icon" />
            {t("rules")}
          </a>
          <a href="/contact" className="menu-item">
            <FaEnvelope className="icon" />
            {t("contact")}
          </a>
          <p className="menu-item" onClick={handleLanguageClick}>
            <FaGlobe className="icon" />
            Language
          </p>
          {showLanguages && (
            <div className="dropdown">
              {/* Dropdown content */}
              <p
                className="dropdown-item"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </p>
              <p
                className="dropdown-item"
                onClick={() => handleLanguageChange("am")}
              >
                Amharic
              </p>
              <p
                className="dropdown-item"
                onClick={() => handleLanguageChange("or")}
              >
                Oromic
              </p>
              {/* Add more languages as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
