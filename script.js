function toggleSkill(title) {
    const card = title.parentElement;
    const content = card.querySelector(".skill-content");

    content.style.display =
        content.style.display === "block" ? "none" : "block";
}



// Smooth scroll for all nav links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact button alert
const contactBtn = document.querySelector('#home .btn');

contactBtn.addEventListener('click', function() {
    alert("You are now scrolling to the Contact section!");
});

// Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});

// Project hover animation
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});
