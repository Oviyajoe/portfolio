document.addEventListener('DOMContentLoaded', () => {

emailjs.init({
  publicKey: "TeH3d1zuk_hHX3Qpi",
});

    // Navigation elements
    const contactMe = document.getElementById("contact-me");
    const letsWorkTogether = document.getElementById("lets-work-together");

    const home = document.getElementById("home-li");
    const aboutMe = document.getElementById("aboutMe-li");
    const skills = document.getElementById("skills-li");
    const projects = document.getElementById("projects-li");
    const experience = document.getElementById("experience-li");
    const contact = document.getElementById("contact-li");
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("nav-menu");
    const heroSection = document.getElementById("hero-section");
    const aboutMeSection = document.getElementById("about-me-section");
    const skillsSection = document.getElementById("skills-section");
    const projectSection = document.getElementById("project-section");
    const experienceSection = document.getElementById("experience-section");



 btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
      });

    // Smooth scrolling
    contactMe?.addEventListener('click', (e) => {
        e.preventDefault();
        letsWorkTogether.scrollIntoView({ behavior: 'smooth' });
    });

    home?.addEventListener('click', (e) => {
        e.preventDefault();
        heroSection.scrollIntoView({ behavior: 'smooth' });
    });

    aboutMe?.addEventListener('click', (e) => {
        e.preventDefault();
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    });

    skills?.addEventListener('click', (e) => {
        e.preventDefault();
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    });

    projects?.addEventListener('click', (e) => {
        e.preventDefault();
        projectSection.scrollIntoView({ behavior: 'smooth' });
    });

    experience?.addEventListener('click', (e) => {
        e.preventDefault();
        experienceSection.scrollIntoView({ behavior: 'smooth' });
    });

    contact?.addEventListener('click', (e) => {
        e.preventDefault();
        letsWorkTogether.scrollIntoView({ behavior: 'smooth' });
    });

    // Contact form submit
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value,
    };

    emailjs.send(
        "service_km4kg1e",
        "template_jlk66yc",
        templateParams
    )
    .then(res => {
        console.log("SUCCESS!", res);
        alert("Message sent successfully!");
    })
    .catch(err => {
        console.error("FAILED...", err);
        alert("Failed to send message.");
    });
});
});