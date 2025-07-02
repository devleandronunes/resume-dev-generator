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
  addEducation,
  addExperience,
  removeEducation,
  removeExperience,
  renderEducation,
  renderExperience,
  updateEducation,
  updateExperience,
} from "./ui/dynamicSectionsUI.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataLoaded = loadFromLocalStorage();
  updateLanguage();
  populatePersonalInfoAndSummary();
  renderExperience();
  renderEducation();
  setupPersonalInfoAndSummaryListeners();

  const addExperienceButton = document.getElementById("addExperienceText");
  if (addExperienceButton) {
    addExperienceButton.addEventListener("click", addExperience);
  }

  const addEducationButton = document.getElementById("addEducationText");
  if (addEducationButton) {
    addEducationButton.addEventListener("click", addEducation);
  }

  dataLoaded
    ? console.log("Deu certo", currentLanguage, resumeData)
    : console.log("Deu errado");
});

window.removeExperience = removeExperience;
window.updateExperience = updateExperience;
window.removeEducation = removeEducation;
window.updateEducation = updateEducation;
