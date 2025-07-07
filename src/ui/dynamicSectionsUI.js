import {
  currentLanguage,
  resumeData,
  saveToLocalStorage,
} from "../data/resumeData.js";
import { translations } from "../translations/i18n.js";

export const renderExperience = () => {
  const container = document.getElementById(`experience-list`);
  const t = translations[currentLanguage];

  container.innerHTML = resumeData.experience
    .map(
      (exp, index) =>
        `
        <div class="section-item">
            <div class="section-header">
                <span class="item-title">${t.experienceTitle} ${
          index + 1
        }</span>
                <button class="remove-btn" onclick="removeExperience(${index})">🗑️</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label>${t.positionLabel}</label>
                    <input type="text" class="form-input" value="${
                      exp.position
                    }"
                           onchange="updateExperience(${index}, 'position', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.companyLabel}</label>
                    <input type="text" class="form-input" value="${exp.company}"
                           onchange="updateExperience(${index}, 'company', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.startDateLabel}</label>
                    <input type="text" class="form-input" value="${
                      exp.startDate
                    }" placeholder="MM/YYYY"
                           onchange="updateExperience(${index}, 'startDate', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.endDateLabel}</label>
                    <input type="text" class="form-input" value="${
                      exp.endDate
                    }" placeholder="MM/YYYY"
                           onchange="updateExperience(${index}, 'endDate', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>${t.descriptionLabel}</label>
                <textarea class="form-textarea" rows="3"
                          onchange="updateExperience(${index}, 'description', this.value)">${
          exp.description
        }</textarea>
            </div>
        </div>
    `
    )
    .join("");
};

export const addExperience = () => {
  const experience = {
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  resumeData.experience.push(experience);

  renderExperience();
  saveToLocalStorage();
};

export const removeExperience = (index) => {
  resumeData.experience.splice(index, 1);

  renderExperience();
  saveToLocalStorage();
};

export const updateExperience = (index, field, value) => {
  resumeData.experience[index][field] = value;

  renderExperience();
  saveToLocalStorage();
};

export const renderEducation = () => {
  const container = document.getElementById("education-list");
  const t = translations[currentLanguage];

  container.innerHTML = resumeData.education
    .map(
      (edu, index) => `
        <div class="section-item">
            <div class="section-header">
                <span class="item-title">${t.educationTitle} ${index + 1}</span>
                <button class="remove-btn" onclick="removeEducation(${index})">🗑️</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label>${t.degreeLabel}</label>
                    <input type="text" class="form-input" value="${edu.degree}"
                           onchange="updateEducation(${index}, 'degree', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.institutionLabel}</label>
                    <input type="text" class="form-input" value="${
                      edu.institution
                    }"
                           onchange="updateEducation(${index}, 'institution', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.startDateLabel}</label>
                    <input type="text" class="form-input" value="${
                      edu.startDate
                    }" placeholder="MM/YYYY"
                           onchange="updateEducation(${index}, 'startDate', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.endDateLabel}</label>
                    <input type="text" class="form-input" value="${
                      edu.endDate || t.present
                    }" placeholder="MM/YYYY"
                           onchange="updateEducation(${index}, 'endDate', this.value)">
                </div>
            </div>
        </div>
    `
    )
    .join("");
};

export const addEducation = () => {
  const education = {
    degree: "",
    institution: "",
    startDate: "",
    endDate: "",
  };

  resumeData.education.push(education);

  renderEducation();
  saveToLocalStorage();
};

export const removeEducation = (index) => {
  resumeData.education.splice(index, 1);

  renderEducation();
  saveToLocalStorage();
};

export const updateEducation = (index, field, value) => {
  resumeData.education[index][field] = value;

  renderEducation();
  saveToLocalStorage();
};


export const renderSkill = () => {
  const container = document.getElementById("skills-list");

  container.innerHTML = resumeData.technicalSkills
    .map(
      (skill) => `
        <div class="skill-tag">
            ${skill}
            <button class="skill-remove" onclick="removeSkill('${skill}')">✕</button>
        </div>
    `
    )
    .join("");
};

export const addSkill = () => {
  const skillInput = document.getElementById("skillInput");
  const skills = skillInput.value.toUpperCase().trim()

  !skills || resumeData.technicalSkills.includes(skills)
    ? console.log("adicionar skill")
    : resumeData.technicalSkills.push(skills)

  skillInput.value = "";

  renderSkill();
  saveToLocalStorage();
};

export const removeSkill = (skillToRemove) => {
  resumeData.technicalSkills = resumeData.technicalSkills.filter(
    (skill) => skill !== skillToRemove
  );

  renderSkill();
  saveToLocalStorage();
};

export const renderLanguage = () => {
  const container = document.getElementById("languages-list");
  const t = translations[currentLanguage];
  const proficiencyOptions = [
    { value: `beginner`, label: t.beginner },
    { value: `intermediate`, label: t.intermediate },
    { value: `advanced`, label: t.advanced },
    { value: `fluent`, label: t.fluent },
    { value: `native`, label: t.native },
  ];

  container.innerHTML = resumeData.languages
    .map(
      (lang, index) => `
        <div class="section-item">
            <div class="section-header">
                <span class="item-title">${t.languagesTitle} ${index + 1}</span>
                <button class="remove-btn" onclick="removeLanguage(${index})">🗑️</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label>${t.languageLabel}</label>
                    <input type="text" class="form-input" value="${
                      lang.language
                    }"
                           onchange="updateLanguageItem(${index}, 'language', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.proficiencyLabel}</label>
                    <select class="form-select" onchange="updateLanguageItem(${index}, 'proficiency', this.value)">
                        ${proficiencyOptions
                          .map(
                            (option) =>
                              `<option value="${option.value}" ${
                                lang.proficiency === option.value
                                  ? "selected"
                                  : ""
                              }>${option.label}</option>`
                          )
                          .join("")}
                    </select>
                </div>
            </div>
        </div>
    `
    )
    .join("");
};

export const addLanguage = () => {
  const languages = {
    language: "",
    proficiency: "intermediate",
  };

  resumeData.languages.push(languages);

  renderLanguage();
  saveToLocalStorage();
};

export const removeLanguage = (index) => {
  resumeData.languages.splice(index, 1);

  renderLanguage();
  saveToLocalStorage();
};

export const updateLanguageItem = (index, field, value) => {
  resumeData.languages[index][field] = value;

  renderLanguage();
  saveToLocalStorage();
};

export const renderCourse = () => {
  const container = document.getElementById("courses-list");
  const t = translations[currentLanguage];

  container.innerHTML = resumeData.courses
    .map(
      (course, index) => `
        <div class="section-item">
            <div class="section-header">
                <span class="item-title">${t.coursesTitle} ${index + 1}</span>
                <button class="remove-btn" onclick="removeCourse(${index})">🗑️</button>
            </div>
            <div class="form-group">
                <label>${t.courseNameLabel}</label>
                <input type="text" class="form-input" value="${course.name}"
                       onchange="updateCourse(${index}, 'name', this.value)">
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label>${t.institutionLabel}</label>
                    <input type="text" class="form-input" value="${
                      course.institution
                    }"
                           onchange="updateCourse(${index}, 'institution', this.value)">
                </div>
                <div class="form-group">
                    <label>${t.dateLabel}</label>
                    <input type="text" class="form-input" value="${
                      course.date
                    }" placeholder="MM/YYYY"
                           onchange="updateCourse(${index}, 'date', this.value)">
                </div>
            </div>
        </div>
    `
    )
    .join("");
};

export const addCourse = () => {
  const courses = {
    name: "",
    institution: "",
    date: "",
  };

  resumeData.courses.push(courses);

  renderCourse();
  saveToLocalStorage();
};

export const removeCourse = (index) => {
  resumeData.courses.splice(index, 1);

  renderCourse();
  saveToLocalStorage();
};

export const updateCourse = (index, field, value) => {
  resumeData.courses[index][field] = value;

  renderCourse();
  saveToLocalStorage();
};
