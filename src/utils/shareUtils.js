import { currentLanguage } from "../data/resumeData.js";
import { closeDropdowns } from "../eventHandlers/dropdowns.js";
import { translations } from "../translations/i18n.js";

export const copyLink = async () => {
  const t = translations[currentLanguage];
  try {
    await navigator.clipboard.writeText(window.location.origin);
    const container = document.getElementById("copyLinkText");
    container.textContent = t.linkCopied;
    setTimeout(() => {
      container.textContent = t.copyLinkText;
    }, 3000);
  } catch (error) {
    alert(error);
  }
};

export const shareOnSocialMedia = (platform) => {
  const t = translations[currentLanguage];
  const text = t.shareText;
  const url = window.location.origin;
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);

  let shareUrl = "";

  switch (platform) {
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
      break
    default:
      console.warn(
        `Plataforma de compartilhamento "${platform}" não reconhecida.`
      );
      return;
  }
  if (shareUrl) {
    window.open(shareUrl, "_blank");
  }
  closeDropdowns();
};
