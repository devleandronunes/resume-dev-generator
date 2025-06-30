export let currentLanguage = "en";
export let resumeData = {
  personalInfo: {
    fullName: "Lele",
    email: "lele@email.com",
    phone: "4004-3223",
    linkedin: "",
    github: "",
    portfolio: "",
    linktree: "",
    address: "",
  },
  professionalSummary: 'Web Developer',
  experience: [],
  education: [],
  technicalSkills: [],
  languages: [],
  courses: [],
  additionalInfo: "CNH A/B",
};

export const saveToLocalStorage = () => {
  localStorage.setItem("cv-dev-language", currentLanguage);
  localStorage.setItem("cv-dev-resume-data", JSON.stringify(resumeData));
};

saveToLocalStorage()

export const loadFromLocalStorage = () => {
  const dataLanguage = localStorage.getItem("cv-dev-language");
  currentLanguage = dataLanguage;
  try {
    const dataInfo = JSON.parse(localStorage.getItem("cv-dev-resume-data"));
    resumeData = { ...resumeData, ...dataInfo };
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
