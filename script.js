const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const brand = document.getElementById('brand');

brand.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

about.addEventListener('click', function(e) {
    e.preventDefault();
    const aboutSection = document.getElementById('aboutSection');
    aboutSection.scrollIntoView({behavior: 'smooth'});
});

projects.addEventListener('click', function(e) {
    e.preventDefault();
    const projectsSection = document.getElementById('projectsSection');
    projectsSection.scrollIntoView({behavior: 'smooth'});
});

contact.addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.getElementById('contactSection');
    contactSection.scrollIntoView({behavior: 'smooth'});
});

