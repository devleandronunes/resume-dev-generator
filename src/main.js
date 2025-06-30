import {
  currentLanguage,
  loadFromLocalStorage,
  resumeData,
} from "./data/resumeData.js";

import { updateLanguage } from "./translations/i18n.js";

import { populatePersonalInfoAndSummary } from "./ui/personalInfoUI.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataLoaded = loadFromLocalStorage();
  updateLanguage();
  populatePersonalInfoAndSummary();
  dataLoaded
    ? console.log("Deu certo", currentLanguage, resumeData)
    : console.log("Deu errado");
});
