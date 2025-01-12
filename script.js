// Variables
// var layerCount = 3;
// var starCount = 400;
// var maxTime = 30;
// var universe = document.getElementById("universe");
// var w = window;
// var d = document;
// var e = d.documentElement;
// var g = d.getElementsByTagName("body")[0];
// var width = w.innerWidth || e.clientWidth || g.clientWidth;
// var height = w.innerHeight || e.clientHeight || g.clientHeight;

// for (var i = 0; i < starCount; i++) {
//     var ypos = Math.round(Math.random() * height);
//     var star = document.createElement("div");
//     var speed = 3000 * (Math.random() * maxTime + 1);
//     star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
//     star.style.backgroundColor = "white";

//     universe.appendChild(star);
//     star.animate(
//         [
//             {
//                 transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
//             },
//             {
//                 transform: "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
//             }
//         ],
//         {
//             delay: Math.random() * -speed, // speed can be both: positive (more star) or negative (less star).
//             duration: speed,
//             iterations: Infinity
//         }
//     );
// }

var elem = document.querySelector(".pulse");
if (elem) {
    var animation = elem.animate(
        {
            opacity: [0.5, 1],
            transform: ["scale(0.5)", "scale(1)"]
        },
        {
            direction: "alternate",
            duration: 500,
            iterations: Infinity
        }
    );
}

// Changer la langue
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        // titleAbout: "About us",
        // titleProjects: "Projects",
        // titleContact: "Contact us"
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À propos",
        navProjects: "Projets",
        navContact: "Contact",
        // titleAbout: "À propos",
        // titleProjects: "Projets",
        // titleContact: "Contact"
    
    },
    zh: {
        navHome: "主页",
        navAbout: "关于我们",
        navProjects: "项目",
        navContact: "联系我们",
        // titleAbout: "关于我们",
        // titleProjects: "项目",
        // titleContact: "关于我们"
        
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
    // 遍历所有带 data-i18n 的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
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
