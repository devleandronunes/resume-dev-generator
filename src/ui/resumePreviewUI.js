import { currentLanguage } from "../data/resumeData.js";
import { translations } from "../translations/i18n.js";

export const updatePreview = async () => {
  const container = document.getElementById("resume-preview");
  const t = translations[currentLanguage];
  let html = "";

  const renderLink = (url, label) => {
    if (!url) return "";
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;

    return `
            <div>
                <span>${label}: </span>
                <a href="${fullUrl}" target="_blank" class="resume-link">${url}</a>
            </div>
        `;
  };

  const renderItem = (item, label) => {
    if (!item) return "";

    return `<div>${label}: ${item}</div>`;
  };
};
