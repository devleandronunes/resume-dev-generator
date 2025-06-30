import { resumeData } from "../data/resumeData.js";

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
  textareaAssignment(`additionalInfo`)
};
