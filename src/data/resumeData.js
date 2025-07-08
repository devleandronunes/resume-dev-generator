export let currentLanguage = "en";
export let resumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    linktree: "",
    address: "",
  },
  professionalSummary: "",
  experience: [],
  education: [],
  technicalSkills: [],
  languages: [],
  courses: [],
  additionalInfo: "",
};

export const saveToLocalStorage = () => {
  localStorage.setItem("cv-dev-language", currentLanguage);
  localStorage.setItem("cv-dev-resume-data", JSON.stringify(resumeData));
};

export const loadFromLocalStorage = () => {
  const dataLanguage = localStorage.getItem("cv-dev-language");
  currentLanguage = dataLanguage || "en";
  try {
    const dataInfo = JSON.parse(localStorage.getItem("cv-dev-resume-data"));
    resumeData = { ...resumeData, ...dataInfo };
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export function setLanguage(lang) {
  currentLanguage = lang;
  saveToLocalStorage(); 
}
