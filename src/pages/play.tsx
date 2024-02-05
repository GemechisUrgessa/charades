import React from "react";
import { useTranslation } from "react-i18next";
import gif from "../assets/play.gif";
import charadesWords from "../services/en";

const Play = () => {
  const { t } = useTranslation();
  const [isLandscape, setIsLandscape] = React.useState(false);
  const [words, setWords] = React.useState(charadesWords.wordList);
  const [word, setWord] = React.useState(words[0]);
  React.useEffect(() => {
    // on screen click, shuffle the words
    window.addEventListener("click", () => {
      setWords(words.sort(() => Math.random() - 0.5));
      setWord(words[0]);
    });
    return () => {
      window.removeEventListener("click", () => {
        setWords(words.sort(() => Math.random() - 0.5));
      });
    };
  }, [words]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.screen.orientation.type === "landscape-primary") {
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isLandscape]);

  return (
    <>
      {!isLandscape ? (
        <div className="landscape-prompt ">
          <p style={{ color: "red" }}>{t("playPage.rotateDevice")}</p>
          <img
            style={{ color: "white", width: "50px", height: "50px" }}
            src={gif}
            alt="gif"
          />
        </div>
      ) : (
        <>
          <div className="play-container">
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "50px",
                color: "gray",
              }}
            >
              Click anywhere to shuffle the words
            </span>
            <div
              className="arrow"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              &rarr;
            </div>
            <div className="text-content">{t(`playPage.wordList.${word}`)}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Play;
