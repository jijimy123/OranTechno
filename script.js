// Changer la langue
const translations = {
    en: {
        navHome: "Home",
        navPrice: "Price List",
        navProjects: "Projects",
        navTeam: "Team",
        navContact: "Contact",
        slogan: "We Design, You Shine.",
        homeContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere alias, voluptates ratione quos nulla ad saepe suscipit quod molestiae enim pariatur mollitia non odio et. Odit quos nostrum sapiente?",
        aboutTitle: "Explore OranTechno",
        aboutContent: ``,
        processTitle: "Process",
        processStep_1: "Planning & Analysis",
        processStep_2: "Design",
        processStep_3: "Development",
        processStep_4: "Testing & Optimization",
        processStep_5: "Launch & Maintenance",
        contentProcess_1: `- Understand customer needs, goals and audiences
        
                    - Determine functionality and page structure (website architecture diagram)

                    - Develop project timeline and technical plan`,
        contentProcess_2: `- Draw website wireframes and prototypes (Wireframe/Prototype)

                    - UI/UX design (color, font, layout, interactive effects)

                    - Responsive design (considering both PC and mobile terminals)`,
        contentProcess_3: `- Front-end development: HTML, CSS, JavaScript to implement pages and interactions

                    - Back-end development: server setup, database, core function implementation

                    - Content Integration

                    - Multilingual content (if needed)`,
        contentProcess_4: `- Functional testing (forms, buttons, payments, etc.)

                    - Cross-browser and device compatibility testing

                    - Image compression and formatting (for faster loading)`,
        contentProcess_5: `- Website deployment (domain binding, server online)

                    - Install SSL certificate (HTTPS)

                    - Bug fixes and function upgrades

                    - Regular updates and security maintenance (if needed)`,
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
            element.innerText = translations[selectedLang][key];
        }
    });
}

// page load apply the language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-select').value = savedLang;
    applyLanguage(savedLang);
});


// Animation of Process section
window.addEventListener('scroll', function () {
    const processSteps = document.querySelectorAll('.oneProcess');
    const triggerBottom = window.innerHeight * 0.85; // 触发点

    processSteps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;

        if (stepTop < triggerBottom) {
            step.classList.add('animate'); // 添加动画类
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
}

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