import { currentLanguage, resumeData } from "../data/resumeData.js";
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

  const renderInfoItem = (item, label) => {
    if (!item) return "";

    return `<div>${label}: ${item}</div>`;
  };

  const renderTextareaItem = (item, title) => {
    if(!item) return ''

    return `
      <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                <p>${item}</p>
            </div>
    `;
  };

  container.innerHTML = `<div class="resume-name">${
    resumeData.personalInfo.fullName || t.yourName
  }</div>

        <div class="resume-contact">
            ${renderInfoItem(resumeData.personalInfo.email, t.emailLabel)}
            ${renderInfoItem(resumeData.personalInfo.phone, t.phoneLabel)}
            ${renderLink(resumeData.personalInfo.linkedin, t.linkedinLabel)}
            ${renderLink(resumeData.personalInfo.github, t.githubLabel)}
            ${renderLink(resumeData.personalInfo.portfolio, t.portfolioLabel)}
            ${renderLink(resumeData.personalInfo.linktree, t.linktreeLabel)}
            ${renderInfoItem(resumeData.personalInfo.address, t.addressLabel)}
        </div>
        ${renderTextareaItem(resumeData.professionalSummary, t.summaryTitle)}
        `;
};
