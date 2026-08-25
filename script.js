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

/* =========================================================
   ANIMATED TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typingText");

const typingWords = [
    "Web Experiences",
    "AI Applications",
    "Developer Tools",
    "Practical Solutions"
];

let typingWordIndex = 0;
let typingCharIndex = 0;

let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 50;
const pauseAfterTyping = 1800;
const pauseAfterDeleting = 500;


function runTypingAnimation() {

    if (!typingText) return;

    const currentWord =
        typingWords[typingWordIndex];


    /* TYPE */

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                typingCharIndex + 1
            );

        typingCharIndex++;


        /* Finished typing */

        if (
            typingCharIndex ===
            currentWord.length
        ) {

            isDeleting = true;

            setTimeout(
                runTypingAnimation,
                pauseAfterTyping
            );

            return;
        }

        setTimeout(
            runTypingAnimation,
            typingSpeed
        );

        return;
    }


    /* DELETE */

    typingText.textContent =
        currentWord.substring(
            0,
            typingCharIndex - 1
        );

    typingCharIndex--;


    /* Finished deleting */

    if (typingCharIndex === 0) {

        isDeleting = false;

        typingWordIndex++;

        if (
            typingWordIndex >=
            typingWords.length
        ) {
            typingWordIndex = 0;
        }

        setTimeout(
            runTypingAnimation,
            pauseAfterDeleting
        );

        return;
    }


    setTimeout(
        runTypingAnimation,
        deletingSpeed
    );
}

const typingText = document.getElementById("typingText");

const typingWords = [
    "Web Experiences",
    "AI Applications",
    "Developer Tools",
    "Digital Solutions"
];

let typingWordIndex = 0;
let typingCharIndex = 0;
let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 50;
const pauseAfterTyping = 1800;
const pauseAfterDeleting = 500;

function runTypingAnimation() {

    if (!typingText) return;

    const currentWord =
        typingWords[typingWordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                typingCharIndex + 1
            );

        typingCharIndex++;

        if (
            typingCharIndex ===
            currentWord.length
        ) {

            isDeleting = true;

            setTimeout(
                runTypingAnimation,
                pauseAfterTyping
            );

            return;
        }

        setTimeout(
            runTypingAnimation,
            typingSpeed
        );

        return;
    }

    typingText.textContent =
        currentWord.substring(
            0,
            typingCharIndex - 1
        );

    typingCharIndex--;

    if (typingCharIndex === 0) {

        isDeleting = false;

        typingWordIndex++;

        if (
            typingWordIndex >=
            typingWords.length
        ) {
            typingWordIndex = 0;
        }

        setTimeout(
            runTypingAnimation,
            pauseAfterDeleting
        );

        return;
    }

    setTimeout(
        runTypingAnimation,
        deletingSpeed
    );
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        setTimeout(
            runTypingAnimation,
            500
        );
    }
);

/* =========================================================
   GITHUB CONTRIBUTION TOTAL
   Automatically gets ALL GitHub contributions
========================================================= */

const githubContributionCount =
    document.getElementById(
        "githubContributionCount"
    );

const githubSection =
    document.querySelector(
        "#github"
    );

let githubCountAnimated = false;


/*
    GitHub username
*/

const githubUsername =
    "Wolf-assualt";


/*
    Get all contribution data
*/

async function getGithubContributionTotal() {

    if (!githubContributionCount) {
        return;
    }

    try {

        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=all`
        );

        if (!response.ok) {
            throw new Error(
                "Unable to fetch GitHub contributions"
            );
        }

        const data =
            await response.json();


        /*
            Add every year's total
            to get lifetime contributions
        */

        let total = 0;

        Object.values(data.total || {})
            .forEach(yearTotal => {

                if (
                    typeof yearTotal === "number"
                ) {

                    total += yearTotal;

                }

            });


        /*
            Start animation
        */

        animateGithubCount(total);

    }

    catch (error) {

        console.error(
            "GitHub contribution error:",
            error
        );

        githubContributionCount.textContent =
            "—";

    }

}


/*
    Number counting animation
*/

function animateGithubCount(
    targetNumber
) {

    if (
        githubCountAnimated ||
        !githubContributionCount
    ) {
        return;
    }

    githubCountAnimated = true;


    let currentNumber = 0;

    const duration = 2200;

    const startTime =
        performance.now();


    function updateCounter(
        currentTime
    ) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /*
            Smooth ease-out effect
        */

        const easedProgress =
            1 -
            Math.pow(
                1 - progress,
                4
            );


        currentNumber =
            Math.floor(
                easedProgress *
                targetNumber
            );


        githubContributionCount.textContent =
            currentNumber.toLocaleString();


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                updateCounter
            );

        }

        else {

            githubContributionCount.textContent =
                targetNumber.toLocaleString();

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


/*
    Start only when GitHub
    section enters viewport
*/

if (
    githubSection
) {

    const githubObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            getGithubContributionTotal();

                            githubObserver.disconnect();

                        }

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    githubObserver.observe(
        githubSection
    );

}
