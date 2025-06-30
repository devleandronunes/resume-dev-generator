import {
  currentLanguage,
  loadFromLocalStorage,
  resumeData,
} from "./data/resumeData.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataLoaded = loadFromLocalStorage();
  dataLoaded
    ? console.log("Deu certo", currentLanguage, resumeData)
    : console.log("Deu errado");
});
