// Changer la langue
const translations = {
    en: {
        navHome: "Home",
        navPrice: "Price List",
        navProjects: "Projects",
        navTeam: "Team",
        navContact: "Contact",
        slogan: "We Design, You Shine.",
        homeContent: `At <b>ORANTECHNO</b>, we are a dedicated team of website designers and developers, committed to crafting personalized, innovative websites tailored to your unique vision.`,
        aboutTitle: "Explore OranTechno",
        aboutContent: ``,
        processTitle: "Process",
        processStep_1: "Planning & Analysis",
        processStep_2: "Design & Development",
        processStep_3: "Testing & Optimization",
        processStep_4: "Launch & Maintenance",
        contentProcess_1: `
                    - Share your resume/business goals, target audience and any specific features you want for your website.
                    <br>
                    <br>
                    - Provide any existing contents/ideas you have for the site's structure and design.
                    <br>
                    <br>
                    - Provide all the necessary content (text, images, videos, etc.) for the website
                    <br>
                    <br>
                    - Approve or provide feedback on the project plan as we move forward.`,
        contentProcess_2: `
                    - Review the prototypes we create, giving feedback on layout, design and functionality.
                    <br>
                    <br>
                    - Select preferences for colors, fonts, and any other design elements to ensure they match your idea.`,
        contentProcess_3: `
                    - Confirm the responsiveness of the design, especially for mobile and tablet views.
                    <br>
                    <br>
                    - Test the site from your end, especially any forms, buttons, or payment processes, and let us know if you encounter any issues.  
                    <br>
                    <br>
                    - Provide any final content updates before going live.`,
        contentProcess_4: `
                    - Confirm the domain name and server setup for the final launch.
                    <br>
                    <br>
                    - After launch, monitor your site for any issues, and communicate any bugs or additional changes you’d like made. 
                    <br>
                    <br>
                    - Approve regular updates and security measures to keep your site up-to-date and secure. (extra charge may applied)`,
        buttonAll: "All",
        buttonWeb: "Web",
        buttonResume: "Resume",
        buttonDesign: "Design",
        projectDescriptionWeb: "A web project",
        projectDescriptionResume: "A resume project",
        projectDescriptionDesign: "A design project",
        viewProject: "view Project",
        contactTitle: "Get in Touch",
        contactContent: "Have questions or need support? Feel free to reach out to us through our contact form or email. We're here to help you make the most of our innovative solutions.",
        contactBoxTitle: "Send us a Message",
        placeholderName: "Your Name",
        placeholderGmail: "Your Gmail",
        placeholderMessage: "Your Message",
        buttonSend: "Send"
    },
    fr: {
        navHome: "Accueil",
        navPrice: "Liste de prix",
        navProjects: "Projets",
        navContact: "Contact",
        slogan: "",
        homeContent: "",
        aboutTitle: "",
        aboutContent: ``,
        buttonAll: "",
        buttonWeb: "",
        buttonResume: "",
        buttonDesign: "",
        projectDescriptionWeb: "",
        projectDescriptionResume: "",
        projectDescriptionDesign: "",
        viewProject: "",
        contactTitle: "",
        contactContent: "",
        contactBoxTitle: "",
        placeholderName: "",
        placeholderGmail: "",
        placeholderMessage: "",
        buttonSend: ""
    },
    zh: {
        navHome: "主页",
        navPrice: "价格表",
        navProjects: "项目",
        navContact: "联系我们",
        slogan: "",
        homeContent: "",
        aboutTitle: "",
        aboutContent: ``,
        buttonAll: "",
        buttonWeb: "",
        buttonResume: "",
        buttonDesign: "",
        projectDescriptionWeb: "",
        projectDescriptionResume: "",
        projectDescriptionDesign: "",
        viewProject: "",
        contactTitle: "",
        contactContent: "",
        contactBoxTitle: "",
        placeholderName: "",
        placeholderGmail: "",
        placeholderMessage: "",
        buttonSend: ""
    }
};

// 切换语言并保存到 localStorage
function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    localStorage.setItem('selectedLanguage', lang);
    applyLanguage(lang);
}

// 应用语言设置
function applyLanguage(lang) {
    const selectedLang = document.getElementById("language-select").value;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        
        if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "textarea") {
            element.placeholder = translations[selectedLang][key];
        } else {
            element.innerHTML = translations[selectedLang][key];
        }
    });
}

// page load apply the language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const gridItems = document.querySelectorAll('.grid-item');
    const observerOptions = {
        threshold: 0.3,
    };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);  // Stop observing after animation triggers
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.getElementById('language-select').value = savedLang;
    applyLanguage(savedLang);

    gridItems.forEach(item => {
        observer.observe(item);
    });
    
});


// Animation of Process section
window.addEventListener('scroll', function () {
    const processSteps = document.querySelectorAll('.oneProcess');
    const triggerBottom = window.innerHeight * 0.85;

    processSteps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;

        if (stepTop < triggerBottom) {
            step.classList.add('animate');
        }
    });
});

// filter of projects category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
};

// mouse move projects animation
const slider = document.querySelector('.grid-container');
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});