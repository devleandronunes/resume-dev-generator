import {
  currentLanguage,
  loadFromLocalStorage,
  resumeData,
} from "./data/resumeData.js";

import { updateLanguage } from "./translations/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataLoaded = loadFromLocalStorage();
  updateLanguage();
  dataLoaded
    ? console.log("Deu certo", currentLanguage, resumeData)
    : console.log("Deu errado");
});
