// IronFit Fitness — small interactions
// Replace this demo number with the gym's WhatsApp number (country code + number, digits only).
const WHATSAPP_NUMBER = "919876543210"; // DEMO: replace before publishing

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappLink = document.getElementById("whatsappLink");
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi IronFit Fitness, I'd like to know more about your membership plans.")}`;

const trialForm = document.getElementById("trialForm");
const formFeedback = document.getElementById("formFeedback");

trialForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!trialForm.checkValidity()) {
    trialForm.reportValidity();
    return;
  }

  const data = new FormData(trialForm);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const goal = String(data.get("goal") || "").trim();
  const message = String(data.get("message") || "").trim();

  const enquiry = [
    "Hi IronFit Fitness! I'd like to book a free trial.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Fitness goal: ${goal}`,
    message ? `Message: ${message}` : ""
  ].filter(Boolean).join("\n");

  formFeedback.textContent = "Opening WhatsApp with your details. Press Send in WhatsApp to complete the enquiry.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`, "_blank", "noopener,noreferrer");
});
