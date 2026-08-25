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
  passwordProject:
    "https://github.com/Wolf-assualt/password-generator",

  // Python Certificate
  pythonCertificate:
    "YUVARAJAN-J-Participant-Certificate.pdf"
};


// ============================================================
// RUN EVERYTHING AFTER PAGE LOAD
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // LINK FUNCTION
  // ==========================================================

  function setLink(id, url) {

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


  // ==========================================================
  // GITHUB LINKS
  // ==========================================================

  ["githubLink", "githubLink2"].forEach(id => {
    setLink(id, siteConfig.github);
  });


  // ==========================================================
  // LINKEDIN LINKS
  // ==========================================================

  ["linkedinLink", "linkedinLink2"].forEach(id => {
    setLink(id, siteConfig.linkedin);
  });


  // ==========================================================
  // INSTAGRAM LINKS
  // ==========================================================

  ["instagramLink", "instagramLink2"].forEach(id => {
    setLink(id, siteConfig.instagram);
  });


  // ==========================================================
  // LEETCODE LINKS
  // ==========================================================

  ["terminalLink", "terminalLink2"].forEach(id => {
    setLink(id, siteConfig.terminal);
  });


  // ==========================================================
  // PASSWORD GENERATOR PROJECT
  // ==========================================================

  setLink(
    "passwordProjectLink",
    siteConfig.passwordProject
  );


  // ==========================================================
  // RESUME
  // ==========================================================

  setLink(
    "resumeLink",
    siteConfig.resume
  );


  // ==========================================================
  // PYTHON CERTIFICATE
  // ==========================================================

  setLink(
    "pythonCertificateLink",
    siteConfig.pythonCertificate
  );


  // ==========================================================
  // EMAIL
  // ==========================================================

  const emailLink =
    document.getElementById("emailLink");

  if (emailLink) {

    emailLink.href =
      "mailto:" + siteConfig.email;

  }


  // ==========================================================
  // CONTACT EMAIL TEXT
  // ==========================================================

  const emailText =
    document.getElementById("contactEmailText");

  if (emailText) {

    emailText.textContent =
      siteConfig.email;

    emailText.href =
      "mailto:" + siteConfig.email;

  }


  // ==========================================================
  // PHONE
  // ==========================================================

  const phone =
    document.getElementById("phoneLink");

  if (phone) {

    phone.textContent =
      siteConfig.phone;

    phone.href =
      "tel:" +
      siteConfig.phone.replace(/\s/g, "");

  }


  // ==========================================================
  // MOBILE NAVIGATION
  // ==========================================================

  const nav =
    document.querySelector(".nav nav");

  const menu =
    document.querySelector(".hamburger");

  if (menu && nav) {

    menu.addEventListener("click", () => {

      nav.classList.toggle("open");

    });

  }


  document
    .querySelectorAll(".nav nav a")
    .forEach(a => {

      a.addEventListener("click", () => {

        nav?.classList.remove("open");

      });

    });


  // ==========================================================
  // SCROLL REVEAL
  // ==========================================================

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

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


    revealElements.forEach(element => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add("visible");

    });

  }


  // ==========================================================
  // CURSOR GLOW
  // ==========================================================

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


  // ==========================================================
  // ACTIVE NAVIGATION
  // ==========================================================

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


  // ==========================================================
  // CONTACT FORM
  // ==========================================================

  window.sendMessage = function (e) {

    e.preventDefault();

    alert(
      "Thanks! This demo form is ready for a backend/email service. Add Formspree, EmailJS or your own backend to receive messages."
    );

  };


  // ==========================================================
  // MOUSE POSITION
  // ==========================================================

  document.addEventListener(
    "mousemove",
    e => {

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


  // ==========================================================
// HERO TYPING ANIMATION
// ==========================================================

function initTypingAnimation() {

  const typingText = document.getElementById("typingText");

  if (!typingText) {
    console.error(
      "❌ Typing animation: #typingText element not found."
    );
    return;
  }

  const typingWords = [
    "Web Experiences",
    "AI Applications",
    "Developer Tools",
    "Practical Solutions"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeSpeed = 90;
  const deleteSpeed = 50;
  const typingPause = 1800;
  const deletingPause = 500;

  function typeLoop() {

    const currentWord = typingWords[wordIndex];

    // -------------------------------
    // TYPING
    // -------------------------------

    if (!deleting) {

      charIndex++;

      typingText.textContent =
        currentWord.substring(0, charIndex);

      if (charIndex >= currentWord.length) {

        deleting = true;

        setTimeout(
          typeLoop,
          typingPause
        );

        return;
      }

      setTimeout(
        typeLoop,
        typeSpeed
      );

      return;
    }


    // -------------------------------
    // DELETING
    // -------------------------------

    charIndex--;

    typingText.textContent =
      currentWord.substring(0, charIndex);


    if (charIndex <= 0) {

      charIndex = 0;

      deleting = false;

      wordIndex =
        (wordIndex + 1) % typingWords.length;

      setTimeout(
        typeLoop,
        deletingPause
      );

      return;
    }

    setTimeout(
      typeLoop,
      deleteSpeed
    );
  }


  // Start clean

  typingText.textContent = "";

  setTimeout(
    typeLoop,
    500
  );

  console.log(
    "✅ Typing animation started."
  );
}


// Start typing animation

initTypingAnimation();


  // ==========================================================
  // GITHUB CONTRIBUTION COUNTER
  // ==========================================================

  const counter =
    document.getElementById(
      "githubContributionCount"
    );

  const githubSection =
    document.getElementById(
      "github"
    );


  if (counter && githubSection) {

    const username =
      "Wolf-assualt";

    let animationStarted = false;


    // ========================================================
    // ANIMATE GITHUB NUMBER
    // ========================================================

    function animateGithubCounter(target) {

      if (animationStarted) {
        return;
      }

      animationStarted = true;


      const duration = 2200;

      const startTime =
        performance.now();


      function updateCounter(currentTime) {

        const elapsed =
          currentTime - startTime;


        const progress =
          Math.min(
            elapsed / duration,
            1
          );


        // Smooth ease-out
        const eased =
          1 -
          Math.pow(
            1 - progress,
            4
          );


        const current =
          Math.floor(
            eased * target
          );


        counter.textContent =
          current.toLocaleString("en-IN");


        if (progress < 1) {

          requestAnimationFrame(
            updateCounter
          );

        } else {

          counter.textContent =
            target.toLocaleString("en-IN");

        }

      }


      requestAnimationFrame(
        updateCounter
      );

    }


    // ========================================================
    // LOAD GITHUB CONTRIBUTIONS
    // ========================================================

    async function loadGithubContributions() {

      try {

        console.log(
          "Loading GitHub contributions..."
        );


        const apiURL =
          `https://github-contributions-api.jogruber.de/v4/${username}?y=all`;


        const response =
          await fetch(apiURL);


        if (!response.ok) {

          throw new Error(
            `GitHub API error: ${response.status}`
          );

        }


        const data =
          await response.json();


        console.log(
          "GitHub contribution data:",
          data
        );


        let total = 0;


        // ====================================================
        // API TOTAL
        // ====================================================

        if (
          data.total &&
          typeof data.total === "object"
        ) {

          Object.values(
            data.total
          ).forEach(value => {

            const number =
              Number(value);

            if (
              Number.isFinite(number)
            ) {

              total += number;

            }

          });

        }


        console.log(
          "Total GitHub contributions:",
          total
        );


        // ====================================================
        // ANIMATE
        // ====================================================

        if (total > 0) {

          animateGithubCounter(total);

        } else {

          console.warn(
            "GitHub contribution total is 0."
          );

          counter.textContent =
            "0";

        }

      }

      catch (error) {

        console.error(
          "GitHub contribution error:",
          error
        );

        counter.textContent =
          "—";

      }

    }


    // ========================================================
    // START GITHUB WHEN SECTION ENTERS VIEW
    // ========================================================

    if ("IntersectionObserver" in window) {

      const githubObserver =
        new IntersectionObserver(

          entries => {

            entries.forEach(entry => {

              if (
                entry.isIntersecting
              ) {

                loadGithubContributions();

                githubObserver.disconnect();

              }

            });

          },

          {
            threshold: 0.15
          }

        );


      githubObserver.observe(
        githubSection
      );

    } else {

      loadGithubContributions();

    }

  }


  // ==========================================================
  // DEBUG
  // ==========================================================

  console.log(
    "Portfolio JavaScript loaded successfully."
  );

  console.log(
    "Typing element:",
    document.getElementById("typingText")
  );

});
