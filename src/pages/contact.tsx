import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would handle the submission, e.g., sending data to a server
    console.log("Submitted:", { name, email, message });
  };

  return (
    <div className="contacts-container">
      <h2 className="contacts-header">{t("contactsPage.title")}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("contactsPage.namePlaceholder")}
          className="form-field"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("contactsPage.emailPlaceholder")}
          className="form-field"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("contactsPage.messagePlaceholder")}
          className="form-field"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          {t("contactsPage.sendButton")}
        </button>
      </form>
    </div>
  );
};

export default Contacts;
