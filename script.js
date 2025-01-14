// Changer la langue
const translations = {
    en: {
        navHome: "Home",
        navPrice: "Price List",
        navProjects: "Projects",
        navContact: "Contact",
        // titleAbout: "About us",
        // titleProjects: "Projects",
        // titleContact: "Contact us"
        slogan: "We Design, You Shine.",
        homeContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere alias, voluptates ratione quos nulla ad saepe suscipit quod molestiae enim pariatur mollitia non odio et. Odit quos nostrum sapiente?",
        aboutTitle: "Explore OranTechno",
        aboutContent: `About Us:
        Welcome to our professional resume website building team! We are a dynamic group of web designers, developers, and content strategists dedicated to crafting stunning and impactful online resumes that elevate personal branding.

        Our Mission:
        To empower individuals by creating personalized, professional websites that showcase their skills, experience, and achievements in the most engaging way.

        Our Expertise:
        - Modern Design: We utilize sleek, responsive designs with vibrant gradients and smooth navigation to make every resume stand out.
        - User-Friendly Interface: Easy-to-navigate layouts ensure that your accomplishments are presented clearly and professionally.
        - Customization: Tailored solutions to reflect your unique professional identity, integrating custom graphics, interactive elements, and professional content.
        - Technical Excellence: Leveraging the latest web technologies for fast, secure, and mobile-optimized performance.

        Why Choose Us:
        - Creative designs inspired by modern trends.
        - Seamless user experience across devices.
        - Quick turnaround and dedicated support.
        Let us help you create a digital resume that leaves a lasting impression!`,
        buttonAll: "All",
        buttonWeb: "Web",
        buttonResume: "Resume",
        buttonDesign: "Design",
        projectDescriptionWeb: "This is a web project",
        projectDescriptionResume: "This is a resume project",
        projectDescriptionDesign: "This is a design project",
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
        // titleAbout: "À propos",
        // titleProjects: "Projets",
        // titleContact: "Contact"
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
        // titleAbout: "关于我们",
        // titleProjects: "项目",
        // titleContact: "关于我们"
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

// 页面加载时自动应用语言
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-select').value = savedLang;
    applyLanguage(savedLang);
});

// 分类筛选功能
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

// 鼠标拖动效果
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
    const walk = (x - startX) * 1.5;  // 调整滑动速度
    slider.scrollLeft = scrollLeft - walk;
});