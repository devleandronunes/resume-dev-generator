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
