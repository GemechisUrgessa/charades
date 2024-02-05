import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="title">{t("aboutPage.title")}</h2>
      <p className="description">{t("aboutPage.description")}</p>
    </div>
  );
};

export default About;
