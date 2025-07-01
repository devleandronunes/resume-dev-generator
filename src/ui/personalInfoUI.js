import { resumeData, saveToLocalStorage } from "../data/resumeData.js";

export const populatePersonalInfoAndSummary = () => {
  Object.keys(resumeData.personalInfo).forEach((key) => {
    const element = document.getElementById(key);
    element.value = resumeData.personalInfo[key];
  });

  const textareaAssignment = (id) => {
    const element = document.getElementById(id);
    element.value = resumeData[id];
  };
  textareaAssignment(`professionalSummary`);
  textareaAssignment(`additionalInfo`);
};

export const setupPersonalInfoAndSummaryListeners = () => {
  Object.keys(resumeData.personalInfo).forEach((key) => {
    const element = document.getElementById(key);
    element.addEventListener("keyup", () => {
      resumeData.personalInfo[key] = element.value;
      saveToLocalStorage();
    });
  });

  const textareaListeners = (id) => {
    const element = document.getElementById(id);
    element.addEventListener("keyup", () => {
      resumeData[id] = element.value;
      saveToLocalStorage();
    });
  };

  textareaListeners(`professionalSummary`);
  textareaListeners(`additionalInfo`);
};
