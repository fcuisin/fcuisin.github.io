// Navbar scrolling

function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-portfolio');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-portfolio-white');
      } else {
        navbar.classList.remove('navbar-portfolio-white');
      }
    });
  }
}

initUpdateNavbarOnScroll();

// Skills navigation

function triggerSkillsCategory() {
  const skillsSelection = document.querySelectorAll(".skills-filter-category");
  skillsSelection.forEach((element) => {
    element.addEventListener('click', () => {

      if (element.innerHTML === "Marketing") {
        document.querySelector("#web-dev-skills").classList.add("d-none");
        document.querySelector("#marketing-skills").classList.remove("d-none");
        if (element.className.includes("active")) {
          console.log("active");
        } else {
          document.querySelector("#web-dev-skill").classList.remove("active");
          element.classList.add("active");
        }
      } else if (element.innerHTML === "Web development") {
        document.querySelector("#web-dev-skills").classList.remove("d-none");
        document.querySelector("#marketing-skills").classList.add("d-none");
        if (element.className.includes("active")) {
          console.log("active");
        } else {
          document.querySelector("#marketing-skill").classList.remove("active");
          element.classList.add("active");
        }
      };
    });
  });
}

triggerSkillsCategory();
