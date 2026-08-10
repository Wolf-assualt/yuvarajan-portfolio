const siteConfig = {
  github: "https://github.com/Wolf-assualt",
  linkedin: "https://www.linkedin.com/in/yuvarajan-j-52a46a273/",
  instagram: "https://www.instagram.com/_yuva._.rajan__/?__pwa=1#",
  email: "Yuva0051@gamail.com",
  phone: "+91 9342038458",
  terminal: "https://leetcode.com/settings/profile/",
  resume: "yuvarajan_resume.pdf",
  passwordProject: "https://github.com/Wolf-assualt/password-generator"
};

function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!url || url.startsWith("YOUR_")) {
    el.addEventListener("click", e => { e.preventDefault(); alert("Add this link in script.js → siteConfig."); });
    return;
  }
  el.href = url;
}

["githubLink","githubLink2"].forEach(id=>setLink(id,siteConfig.github));
["linkedinLink","linkedinLink2"].forEach(id=>setLink(id,siteConfig.linkedin));
["instagramLink","instagramLink2"].forEach(id=>setLink(id,siteConfig.instagram));
["terminalLink","terminalLink2"].forEach(id=>setLink(id,siteConfig.terminal));
setLink("passwordProjectLink",siteConfig.passwordProject);
setLink("resumeLink",siteConfig.resume);
const emailLink=document.getElementById("emailLink");
if(emailLink){ emailLink.href="mailto:"+siteConfig.email; }
const emailText=document.getElementById("contactEmailText");
if(emailText){ emailText.textContent=siteConfig.email; emailText.href="mailto:"+siteConfig.email; }
const phone=document.getElementById("phoneLink");
if(phone){ phone.textContent=siteConfig.phone; phone.href="tel:"+siteConfig.phone.replace(/\s/g,""); }

const nav=document.querySelector(".nav nav"), menu=document.querySelector(".hamburger");
menu?.addEventListener("click",()=>{nav.classList.toggle("open");});
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>{document.querySelectorAll(".nav nav a").forEach(x=>x.classList.remove("active"));a.classList.add("active")}));
function sendMessage(e){e.preventDefault();alert("Thanks! This demo form is ready for a backend/email service. Add Formspree, EmailJS or your own backend to receive messages.");}
