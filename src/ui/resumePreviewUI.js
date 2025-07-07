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
    if (!item) return "";

    return `
      <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                <p>${item}</p>
            </div>
    `;
  };

  const renderExperienceItem = (item, title) => {
    if (item.length == 0) return "";

    if (item) return `
      <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                ${item
                  .map(
                    (exp) => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <div class="resume-item-title">${exp.position}</div>
                            <div class="resume-item-date">${exp.startDate} - ${
                      exp.endDate || t.present
                    }</div>
                        </div>
                        <div class="resume-item-company">${exp.company}</div>
                        ${
                          exp.description
                            ? `<div class="resume-item-description">${exp.description}</div>`
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>
    `;
  };

  const renderEducationItem = (item, title) => {
    if (item.length == 0) return ''

    return `
       <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                ${item
                  .map(
                    (edu) => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <div class="resume-item-title">${edu.degree}</div>
                            <div class="resume-item-date">${edu.startDate} - ${
                      edu.endDate || t.present
                    }</div>
                        </div>
                        <div class="resume-item-company">${
                          edu.institution
                        }</div>
                    </div>
                `
                  )
                  .join("")}
            </div>
    `;
  }

  const renderSkillItem = (item, title) => {
    if (item.length == 0) return ''

    return `
      <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                <div class="resume-skills">${item.join(
                  " - "
                )}</div>
            </div>
    `;
  }

  const renderLanguageItem = (item, title) => {
    if (item.length == 0) return ''

    return `
      <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                ${item
                  .map(
                    (lang) => `
                    <div class="resume-language-item">
                        <span class="resume-language-name">${
                          lang.language
                        }</span>
                        <span class="resume-language-level">${
                          lang.proficiency
                        }</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
    `;
  }

  const renderCourseItem = (item, title) => {
    if(item.length == 0) return ''

    return `
      <div class="resume-section">
                <h2 class="resume-section-title">${title}</h2>
                ${item
                  .map(
                    (course) => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <div class="resume-item-title">${course.name}</div>
                            ${
                              course.date
                                ? `<div class="resume-item-date">${course.date}</div>`
                                : ""
                            }
                        </div>
                        ${
                          course.institution
                            ? `<div class="resume-item-company">${course.institution}</div>`
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>
    `;
  }

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
        ${renderExperienceItem(resumeData.experience, t.experienceTitle)}
        ${renderEducationItem(resumeData.education, t.educationTitle)}
        ${renderSkillItem(resumeData.technicalSkills, t.skillsTitle)}
        ${renderLanguageItem(resumeData.languages, t.languagesTitle)}
        ${renderCourseItem(resumeData.courses, t.coursesTitle)}
        ${renderTextareaItem(resumeData.additionalInfo, t.additionalInfoTitle)}
        `;
};
