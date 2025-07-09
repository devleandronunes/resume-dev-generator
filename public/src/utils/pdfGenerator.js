import { resumeData, currentLanguage } from "../data/resumeData.js";
import { translations } from "../translations/i18n.js";

export const downloadPDF = () => {
  try {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const t = translations[currentLanguage];
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const lineHeight = 6;
    const sectionSpacing = 8;
    let yPosition = margin;

    const addText = (
      text,
      fontSize = 10,
      style = "normal",
      color = [0, 0, 0]
    ) => {
      if (yPosition > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }

      pdf.setFontSize(fontSize);
      pdf.setFont("helvetica", style);
      pdf.setTextColor(color[0], color[1], color[2]);

      const maxWidth = pageWidth - 2 * margin;
      const lines = pdf.splitTextToSize(text, maxWidth);

      lines.forEach((line) => {
        if (yPosition > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
    };

    const addSectionHeader = (title) => {
      yPosition += sectionSpacing;
      addText(title, 14, "bold");

      const textWidth = pdf.getTextWidth(title);
      pdf.setLineWidth(0.2);
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, yPosition - 2, margin + textWidth, yPosition - 2);
      yPosition += 2;
    };

    const addLink = (label, url) => {
      if (!url) return;

      if (yPosition > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${label}: `, margin, yPosition);

      const labelWidth = pdf.getTextWidth(`${label}: `);

      pdf.setTextColor(0, 0, 255);
      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      const linkWidth = pdf.getTextWidth(url);

      pdf.textWithLink(url, margin + labelWidth, yPosition, { url: fullUrl });

      pdf.setLineWidth(0.1);
      pdf.setDrawColor(0, 0, 255);
      pdf.line(
        margin + labelWidth,
        yPosition + 0.5,
        margin + labelWidth + linkWidth,
        yPosition + 0.5
      );
      yPosition += lineHeight;
    };

    const translateProficiency = (proficiency) => {
      if (currentLanguage === "pt") {
        const proficiencyMap = {
          beginner: t.beginner,
          intermediate: t.intermediate,
          advanced: t.advanced,
          fluent: t.fluent,
          native: t.native,
        };
        return proficiencyMap[proficiency] || proficiency;
      }
      return proficiency.charAt(0).toUpperCase() + proficiency.slice(1);
    };

    if (resumeData.personalInfo.fullName) {
      addText(resumeData.personalInfo.fullName, 18, "bold");
      yPosition += 4;
    }

    if (resumeData.personalInfo.email) {
      addText(`${t.emailLabel}: ${resumeData.personalInfo.email}`);
    }
    if (resumeData.personalInfo.phone) {
      addText(`${t.phoneLabel}: ${resumeData.personalInfo.phone}`);
    }
    if (resumeData.personalInfo.address) {
      addText(`${t.addressLabel}: ${resumeData.personalInfo.address}`);
    }

    addLink("LinkedIn", resumeData.personalInfo.linkedin);
    addLink("GitHub", resumeData.personalInfo.github);
    addLink(
      currentLanguage === "en" ? "Portfolio" : "Portfólio",
      resumeData.personalInfo.portfolio
    );
    addLink("Linktree", resumeData.personalInfo.linktree);

    if (resumeData.professionalSummary) {
      addSectionHeader(t.summaryTitle);
      addText(resumeData.professionalSummary);
    }

    if (resumeData.experience.length > 0) {
      addSectionHeader(t.experienceTitle);
      resumeData.experience.forEach((exp) => {
        addText(`${exp.position} - ${exp.company}`, 11, "bold");
        addText(`${exp.startDate} - ${exp.endDate || t.present}`, 9);
        if (exp.description) {
          addText(exp.description, 10);
        }
        yPosition += 3;
      });
    }

    if (resumeData.education.length > 0) {
      addSectionHeader(t.educationTitle);
      resumeData.education.forEach((edu) => {
        addText(`${edu.degree} - ${edu.institution}`, 11, "bold");
        addText(`${edu.startDate} - ${edu.endDate || t.present}`, 9);
        yPosition += 3;
      });
    }

    if (resumeData.technicalSkills.length > 0) {
      addSectionHeader(t.skillsTitle);
      addText(resumeData.technicalSkills.join(" - "));
    }

    if (resumeData.languages.length > 0) {
      addSectionHeader(t.languagesTitle);
      resumeData.languages.forEach((lang) => {
        addText(`${lang.language}: ${translateProficiency(lang.proficiency)}`);
      });
    }

    if (resumeData.courses.length > 0) {
      addSectionHeader(t.coursesTitle);
      resumeData.courses.forEach((course) => {
        let courseText = course.name;
        if (course.institution) courseText += ` - ${course.institution}`;
        if (course.date) courseText += ` (${course.date})`;
        addText(courseText);
      });
    }

    if (resumeData.additionalInfo) {
      addSectionHeader(t.additionalInfoTitle);
      addText(resumeData.additionalInfo);
    }

    const filename = `${resumeData.personalInfo.fullName || "resume"}-cv.pdf`;
    pdf.save(filename);
  } catch (error) {
    console.error("Error in generating PDF:", error);
    alert(
      currentLanguage == 'pt'
        ? "Ocorreu um erro ao gerar o PDF. Por favor, tente novamente. Detalhes no console."
        : "An error occurred while generating the PDF. Please try again. Details in the console."
    );
  }
};
