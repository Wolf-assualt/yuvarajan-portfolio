export const siteConfig = {
  github: "https://github.com/Wolf-assualt",
  linkedin: "https://www.linkedin.com/in/yuvarajan-j-52a46a273/",
  instagram: "https://www.instagram.com/_yuva._.rajan__/?__pwa=1#",
  email: "Yuva0051@gamail.com",
  phone: "+91 9342038458",

  // LeetCode
  terminal: "https://leetcode.com/u/OrqZrMg9nt/",

  // Resume
  resume: "Yuvarajan_J_Resume.pdf",

  // Password Generator Project
  passwordProject: "https://github.com/Wolf-assualt/password-generator",

  // Python Certificate
  pythonCertificate: "YUVARAJAN-J-Participant-Certificate.pdf"
};


// ========================================
// LINK FUNCTION
// ========================================

export function setLink(id, url) {

  const el = document.getElementById(id);

  if (!el) return;

  if (!url || url.startsWith("YOUR_")) {

    el.addEventListener("click", e => {
      e.preventDefault();

      alert(
        "Add this link in script.js → siteConfig."
      );
    });

    return;
  }

  el.href = url;
}


// ========================================
// GITHUB
// ========================================

["githubLink", "githubLink2"].forEach(id => {
  setLink(id, siteConfig.github);
});


// ========================================
// LINKEDIN
// ========================================

["linkedinLink", "linkedinLink2"].forEach(id => {
  setLink(id, siteConfig.linkedin);
});


// ========================================
// INSTAGRAM
// ========================================

["instagramLink", "instagramLink2"].forEach(id => {
  setLink(id, siteConfig.instagram);
});


// ========================================
// LEETCODE
// ========================================

["terminalLink", "terminalLink2"].forEach(id => {
  setLink(id, siteConfig.terminal);
});


// ========================================
// PASSWORD GENERATOR PROJECT
// ========================================

setLink(
  "passwordProjectLink",
  siteConfig.passwordProject
);


// ========================================
// RESUME
// ========================================

setLink(
  "resumeLink",
  siteConfig.resume
);


// ========================================
// PYTHON CERTIFICATE
// ========================================

setLink(
  "pythonCertificateLink",
  siteConfig.pythonCertificate
);


// ========================================
// EMAIL
// ========================================

const emailLink = document.getElementById("emailLink");

if (emailLink) {

  emailLink.href =
    "mailto:" + siteConfig.email;

}


// ========================================
// CONTACT EMAIL TEXT
// ========================================

const emailText =
  document.getElementById("contactEmailText");

if (emailText) {

  emailText.textContent =
    siteConfig.email;

  emailText.href =
    "mailto:" + siteConfig.email;

}


// ========================================
// PHONE
// ========================================

const phone =
  document.getElementById("phoneLink");

if (phone) {

  phone.textContent =
    siteConfig.phone;

  phone.href =
    "tel:" +
    siteConfig.phone.replace(/\s/g, "");

}


// ========================================
// MOBILE NAVIGATION
// ========================================

const nav =
  document.querySelector(".nav nav");

const menu =
  document.querySelector(".hamburger");


menu?.addEventListener("click", () => {

  nav.classList.toggle("open");

});


document
  .querySelectorAll(".nav nav a")
  .forEach(a => {

    a.addEventListener("click", () => {

      nav.classList.remove("open");

    });

  });


// ========================================
// SCROLL REVEAL
// ========================================

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


// ========================================
// CURSOR GLOW
// ========================================

const glow =
  document.querySelector(".cursor-glow");


window.addEventListener(
  "pointermove",
  e => {

    if (!glow) return;

    glow.style.left =
      e.clientX + "px";

    glow.style.top =
      e.clientY + "px";

  }
);


// ========================================
// ACTIVE NAVIGATION
// ========================================

document
  .querySelectorAll(".nav nav a")
  .forEach(a => {

    a.addEventListener("click", () => {

      document
        .querySelectorAll(".nav nav a")
        .forEach(x => {

          x.classList.remove("active");

        });

      a.classList.add("active");

    });

  });


// ========================================
// CONTACT FORM
// ========================================

function sendMessage(e) {

  e.preventDefault();

  alert(
    "Thanks! This demo form is ready for a backend/email service. Add Formspree, EmailJS or your own backend to receive messages."
  );

}


// ========================================
// MOUSE POSITION
// ========================================

document.addEventListener(
  "mousemove",
  function (e) {

    document.documentElement.style.setProperty(
      "--mouse-x",
      e.clientX + "px"
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      e.clientY + "px"
    );

  }
);