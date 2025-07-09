import { currentLanguage } from "../data/resumeData.js";

export const translations = {
  en: {
    headerTitle: "Professional Resume Generator for Developers",
    shareText: "Share cv.dev",
    copyLinkText: "Copy Link",
    linkCopied: "Link copied!",
    englishText: "English",
    portugueseText: "Portuguese",
    personalInfoTitle: "Personal Information",
    fullNameLabel: "Full Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    portfolioLabel: "Portfolio",
    linktreeLabel: "Linktree",
    addressLabel: "Address",
    summaryTitle: "Professional Summary",
    summaryPlaceholder:
      "Write a brief summary of your professional background and goals...",
    experienceTitle: "Professional Experience",
    addExperienceText: "Add Experience",
    positionLabel: "Position",
    companyLabel: "Company",
    startDateLabel: "Start Date",
    endDateLabel: "End Date (leave empty if current)",
    descriptionLabel: "Description",
    educationTitle: "Education",
    addEducationText: "Add Education",
    degreeLabel: "Degree",
    institutionLabel: "Institution",
    skillsTitle: "Technical Skills",
    skillPlaceholder: "Enter a skill (e.g., JavaScript, React, Node.js)",
    languagesTitle: "Languages",
    addLanguageText: "Add Language",
    languageLabel: "Language",
    proficiencyLabel: "Proficiency",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    fluent: "Fluent",
    native: "Native",
    coursesTitle: "Courses & Certifications",
    addCourseText: "Add Course/Certification",
    courseNameLabel: "Course/Certification Name",
    dateLabel: "Date",
    additionalInfoTitle: "Additional Information",
    additionalInfoPlaceholder:
      "Add any additional information, achievements, or relevant details...",
    previewTitle: "Resume Preview",
    downloadText: "Download PDF",
    present: "Present",
    yourName: "Your Name",
  },
  pt: {
    headerTitle: "Gerador de Currículo Profissional para Desenvolvedores",
    shareText: "Compartilhar cv.dev",
    copyLinkText: "Copiar Link",
    linkCopied: "Link copiado!",
    englishText: "Inglês",
    portugueseText: "Português",
    personalInfoTitle: "Informações Pessoais",
    fullNameLabel: "Nome Completo",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    portfolioLabel: "Portfólio",
    linktreeLabel: "Linktree",
    addressLabel: "Endereço",
    summaryTitle: "Resumo Profissional",
    summaryPlaceholder:
      "Escreva um breve resumo do seu histórico profissional e objetivos...",
    experienceTitle: "Experiência Profissional",
    addExperienceText: "Adicionar Experiência",
    positionLabel: "Cargo",
    companyLabel: "Empresa",
    startDateLabel: "Data de Início",
    endDateLabel: "Data de Fim (deixe vazio se atual)",
    descriptionLabel: "Descrição",
    educationTitle: "Formação Acadêmica",
    addEducationText: "Adicionar Formação",
    degreeLabel: "Curso",
    institutionLabel: "Instituição",
    skillsTitle: "Habilidades Técnicas",
    skillPlaceholder: "Digite uma habilidade (ex: JavaScript, React, Node.js)",
    languagesTitle: "Idiomas",
    addLanguageText: "Adicionar Idioma",
    languageLabel: "Idioma",
    proficiencyLabel: "Proficiência",
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
    fluent: "Fluente",
    native: "Nativo",
    coursesTitle: "Cursos e Certificações",
    addCourseText: "Adicionar Curso/Certificação",
    courseNameLabel: "Nome do Curso/Certificação",
    dateLabel: "Data",
    additionalInfoTitle: "Informações Complementares",
    additionalInfoPlaceholder:
      "Adicione informações complementares, conquistas ou detalhes relevantes...",
    previewTitle: "Visualização do Currículo",
    downloadText: "Baixar PDF",
    present: "Atual",
    yourName: "Seu Nome",
  },
};

export const updateLanguage = () => {
  console.log("Função updateLanguage chamada!");
  let keyLanguage = {};
  currentLanguage == "en"
    ? (keyLanguage = translations.en)
    : (keyLanguage = translations.pt);
  const currentLanguageDisplay = document.getElementById("current-language");
  if (currentLanguageDisplay) {
    currentLanguageDisplay.textContent = currentLanguage.toUpperCase();
  }
  Object.keys(keyLanguage).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      element.tagName === "INPUT" || element.tagName === "TEXTAREA"
        ? (element.placeholder = keyLanguage[key])
        : (element.textContent = keyLanguage[key]);
    }
  });
};
