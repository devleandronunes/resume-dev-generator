import {
  currentLanguage,
  loadFromLocalStorage,
  resumeData,
} from "./data/resumeData.js";

import { updateLanguage } from "./translations/i18n.js";

import {
  populatePersonalInfoAndSummary,
  setupPersonalInfoAndSummaryListeners,
} from "../src/ui/personalInfoUI.js";

import { closeDropdowns, toggleDropdown } from "./eventHandlers/dropdowns.js";

import { copyLink, shareOnSocialMedia } from "./utils/shareUtils.js";

import { downloadPDF } from "./utils/pdfGenerator.js";

import {
  addCourse,
  addEducation,
  addExperience,
  addLanguage,
  addSkill,
  removeCourse,
  removeEducation,
  removeExperience,
  removeLanguage,
  removeSkill,
  renderCourse,
  renderEducation,
  renderExperience,
  renderLanguage,
  renderSkill,
  updateCourse,
  updateEducation,
  updateExperience,
  updateLanguageItem,
} from "../src/ui/dynamicSectionsUI.js";
import { updatePreview } from "./ui/resumePreviewUI.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataLoaded = loadFromLocalStorage();
  updateLanguage();
  populatePersonalInfoAndSummary();
  renderExperience();
  renderEducation();
  renderLanguage();
  renderCourse();
  renderSkill();
  setupPersonalInfoAndSummaryListeners();

  const addExperienceButton = document.getElementById("addExperienceText");
  if (addExperienceButton) {
    addExperienceButton.addEventListener("click", addExperience);
  }

  const addEducationButton = document.getElementById("addEducationText");
  if (addEducationButton) {
    addEducationButton.addEventListener("click", addEducation);
  }

  const addLanguageButton = document.getElementById("addLanguageText");
  if (addLanguageButton) {
    addLanguageButton.addEventListener("click", addLanguage);
  }

  const addCourseButton = document.getElementById("addCourseText");
  if (addCourseButton) {
    addCourseButton.addEventListener("click", addCourse);
  }

  const addSkillButton = document.getElementById("add-skill");
  if (addSkillButton) {
    addSkillButton.addEventListener("click", addSkill);
  }

  const languageButton = document.getElementById("language-btn");
  if (languageButton) {
    languageButton.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDropdown("language-dropdown");
    });
  }

  const shareButton = document.getElementById("share-btn");
  if (shareButton) {
    shareButton.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDropdown("share-dropdown");
    });
  }

  const newSkillInput = document.getElementById("skillPlaceholder");
  if (newSkillInput) {
    newSkillInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addSkill();
      }
    });
  }

  const copyLinkElement = document.getElementById("copyLink");
  if (copyLinkElement) {
    copyLinkElement.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      copyLink();
    });
  }

  const shareWhatsappElement = document.getElementById("shareWhatsapp");
  if (shareWhatsappElement) {
    shareWhatsappElement.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      shareOnSocialMedia("whatsapp");
    });
  }

  const shareLinkedinElement = document.getElementById("shareLinkedin");
  if (shareLinkedinElement) {
    shareLinkedinElement.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      shareOnSocialMedia("linkedin");
    });
  }

  const shareFacebookElement = document.getElementById("shareFacebook");
  if (shareFacebookElement) {
    shareFacebookElement.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      shareOnSocialMedia("facebook");
    });
  }

  const shareTwitterElement = document.getElementById("shareTwitter");
  if (shareTwitterElement) {
    shareTwitterElement.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      shareOnSocialMedia("twitter");
    });
  }

  const downloadPDFButton = document.getElementById("downloadPdf");
  if (downloadPDFButton) {
    downloadPDFButton.addEventListener('click', downloadPDF)
  }

  document.addEventListener("click", closeDropdowns);

  updatePreview();

  dataLoaded
    ? console.log("Deu certo", currentLanguage, resumeData)
    : console.log("Deu errado");
});

window.removeExperience = removeExperience;
window.updateExperience = updateExperience;
window.removeEducation = removeEducation;
window.updateEducation = updateEducation;
window.removeLanguage = removeLanguage;
window.updateLanguageItem = updateLanguageItem;
window.removeCourse = removeCourse;
window.updateCourse = updateCourse;
window.removeSkill = removeSkill;
