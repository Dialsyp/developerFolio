import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import LangContext from "../../contexts/LangContext";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const { isEnglish, changeLanguage } = useContext(LangContext);
  const langContext = useContext(LangContext);
  const handleLanguageChange = () => {
    const newLanguage = !isEnglish;
    changeLanguage(newLanguage ? 'en' : 'fr');
  };

  return (
    <label className="language-switch">
      <input
        type="checkbox"
        checked={isEnglish}
        onChange={() => {
            langContext.changeLanguage(isEnglish ? 'en' : 'fr');
            handleLanguageChange();
        }}
      />
      <span className="language-slider">
        <span className="language-emoji">
          {isEnglish ? emoji("🇺🇸") : emoji("🇫🇷")}
        </span>
      </span>
    </label>
  );
};

export default LanguageToggle; 