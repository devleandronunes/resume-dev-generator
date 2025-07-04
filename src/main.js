import {
  currentLanguage,
  loadFromLocalStorage,
  resumeData,
} from "./data/resumeData.js";

import { updateLanguage } from "./translations/i18n.js";

import {
  populatePersonalInfoAndSummary,
  setupPersonalInfoAndSummaryListeners,
} from "./ui/personalInfoUI.js";

import {
  addCourse,
  addEducation,
  addExperience,
  addLanguage,
  removeCourse,
  removeEducation,
  removeExperience,
  removeLanguage,
  renderCourse,
  renderEducation,
  renderExperience,
  renderLanguage,
  updateCourse,
  updateEducation,
  updateExperience,
  updateLanguageItem
} from "./ui/dynamicSectionsUI.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataLoaded = loadFromLocalStorage();
  updateLanguage();
  populatePersonalInfoAndSummary();
  renderExperience();
  renderEducation();
  renderLanguage()
  renderCourse()
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

  dataLoaded
    ? console.log("Deu certo", currentLanguage, resumeData)
    : console.log("Deu errado");
});

window.removeExperience = removeExperience;
window.updateExperience = updateExperience;
window.removeEducation = removeEducation;
window.updateEducation = updateEducation;
window.removeLanguage = removeLanguage
window.updateLanguageItem = updateLanguageItem
window.removeCourse = removeCourse
window.updateCourse = updateCourse