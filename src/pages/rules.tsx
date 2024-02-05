import React from "react";
import { useTranslation } from "react-i18next";

const Rules = () => {
  const { t } = useTranslation();

  return (
    <div className="rules-container">
      <h2 className="rules-header">{t("rulesPage.title")}</h2>
      <ul className="rules-list">
        <li className="rules-item">{t("rulesPage.ruleOne")}</li>
        <li className="rules-item">{t("rulesPage.ruleTwo")}</li>
        <li className="rules-item">{t("rulesPage.ruleThree")}</li>
        {/* Add as many rules as you have using the same pattern */}
      </ul>
    </div>
  );
};

export default Rules;
