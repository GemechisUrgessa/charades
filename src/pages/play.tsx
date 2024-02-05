import React from "react";
import { useTranslation } from "react-i18next";

const Play = () => {
  const { t } = useTranslation();
  const [isLandscape, setIsLandscape] = React.useState(false);

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
          <p>{t("playPage.rotateDevice")}</p>
        </div>
      ) : (
        <>
          <div className="play-container">
            <div
              className="arrow"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              &rarr;
            </div>
            <div className="text-content">{t("playPage.content")}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Play;
