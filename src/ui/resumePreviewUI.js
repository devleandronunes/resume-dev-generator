import { currentLanguage, resumeData } from "../data/resumeData.js";
import { translations } from "../translations/i18n.js";

export const updatePreview = async () => {
  const container = document.getElementById("resume-preview");
  const t = translations[currentLanguage];
  let html = "";
};
