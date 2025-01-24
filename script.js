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
        text_title_about_01: "Welcome to ORANTECHNO!",
        text_title_about_02: "Showcasing Your Skills, Elevating Your Success",
        text_title_about_03: "Our promise to give",
        textAbout_01: `
                    We specialize in designing and developing custom websites that meet the specific needs of you and your business. Whether you're a small business, an entrepreneur, or a creative professional, we collaborate with you every step of the way to create a digital presence that truly represents you and your brand. 
                    <br>
                    <br>
                    Let us help you build a website that stands out, performs seamlessly, and helps you achieve your goals.`,
        textAbout_02: `Together with our professional website building team, we'll empower you and your business by designing personalized, professional websites that showcase your skills, experience, and achievements in the most engaging way. Explore our past projects in the "Projects" tab to see how we've helped individuals and businesses thrive online.`,
        textAbout_03: `
                    - Innovative designs driven by the latest trends
                    <br>
                    - Flawless user experience on all devices
                    <br>
                    - Fast delivery and ongoing support`,
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
                    - Test the site from your end, let us know if you encounter any issues.  
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
        title_price: "SERVICES",
        subtitle_price: "Price List (TAX FREE)",
        td_title_01: "• WEB SITE",
        td_title_02: "• RESUME",
        td_title_03: "• RESUME REVIEWS",
        price_01: "$499 - 1999",
        price_02: "$99 - 249",
        price_03: "$49 - 99",
        teamTitle: "Meet Our Team",
        subtitle_team: "Our passionate professionals dedicated to delivering excellence.",
        teamName_01: "Jimmy Chen",
        teamName_02: "Alice Wang",
        teamName_03: "Marco Ng",
        teamName_04: "Jiawei Li",
        titleTeamName_01: "Programmer",
        titleTeamName_02: `
                        Head of UX & 
                        <br>
                        Lead of social media`,
        titleTeamName_03: "Customer service",
        titleTeamName_04: "Customer service",
        contactTitle: "Get in Touch",
        contactContent: "Have questions or need support? Feel free to reach out to us through our contact form or email. We're here to help you make the most of our innovative solutions.",
        contactBoxTitle: "Send us a Message",
        placeholderName: "Your Name",
        placeholderGmail: "Your Gmail",
        placeholderMessage: "Your Message",
        buttonSend: "Send",
        footer_gmail: "Gmail : orantechnologique@gmail.com"
    },
    fr: {
        navHome: "Accueil",
        navProjects: "Projets",
        navPrice: "Liste de prix",
        navTeam: "Équipe",
        navContact: "Contact",
        slogan: "Notre création, votre ascension",
        homeContent: `Chez OranTechno, notre équipe passionnée de concepteurs et de développeurs de sites web se consacre à la création de sites alliant personnalisation et innovation, avec pour objectif de concrétiser votre vision unique avec précision.`,
        aboutTitle: "Découvrez OranTechno",
        text_title_about_01: "Bienvenue chez OranTechno",
        text_title_about_02: "Valorisez vos compétences, maximisez vos succès.",
        text_title_about_03: "Notre promesse d'offrir",
        textAbout_01: `
                    Nous sommes une équipe spécialisée dans la conception et le développement de sites web sur mesure, répondant à vos besoins spécifiques. Que vous soyez une petite entreprise, un entrepreneur ou un professionnel créatif, nous collaborons avec vous à chaque étape pour créer une présence numérique qui vous représente de la manière la plus authentique, vous et votre marque.,
                    <br>
                    <br>
                    Laissez-nous le plaisir de vous aider à créer un site web qui se distingue des autres, performant et conçu pour vous aider à atteindre vos objectifs.`,
        textAbout_02: `Avec notre équipe de création de sites web professionnels, nous vous aiderons, vous et votre entreprise, en concevant des sites personnalisés et de qualité qui mettent en valeur vos compétences, votre expérience et vos réalisations de manière engageante. Découvrez nos projets passés dans l'onglet "Projets" pour avoir un aperçu de la façon dont nous avons aidé des entrepreneurs et des entreprises à prospérer en ligne.`,
        textAbout_03: `
                    - Des conceptions innovantes inspirées par les dernières tendances.
                    <br>
                    - Une expérience utilisateur irréprochable sur tous les appareils
                    <br>
                    - Livraison rapide et support continu`,
        processTitle: "Processus",
        processStep_1: "Planification & Analyse",
        processStep_2: "Conception & Développement",
        processStep_3: "Tests & Optimisation",
        processStep_4: "Lancement & Maintenance",
        contentProcess_1: `
                    - Partagez votre CV / résumé, vos objectifs professionnels, votre public cible et toutes les fonctionnalités spécifiques que vous souhaitez pour votre site web.
                    <br>
                    <br>
                    - Fournissez tout contenu existant / idées que vous avez pour la structure et la conception du site web.
                    <br>
                    <br>
                    - Fournissez tout le contenu nécessaire (texte, images, vidéos, etc.) pour le site web.
                    <br>
                    <br>
                    - Approuvez ou partagez vos remarques sur le plan du projet au fur et à mesure de son avancement.`,
        contentProcess_2: `
                    - Visitez les prototypes que nous créons et donnez votre avis sur la présentation visuelle, le design et la fonctionnalité.
                    <br>
                    <br>
                    - Sélectionnez vos préférences pour les couleurs, les polices et tout autre élément de design afin de garantir qu'ils correspondent à votre vision.`,
        contentProcess_3: `
                    - Confirmez la réactivité du modèle, en particulier pour l'expérience mobile et tablette.
                    <br>
                    <br>
                    - Testez le site de votre côté, faites-nous savoir si vous rencontrez des problèmes.
                    <br>
                    <br>
                    - Fournissez toutes les mises à jour finales du contenu avant la mise en ligne.`,
        contentProcess_4: `
                    - Confirmez le nom de domaine et la configuration du serveur pour le lancement final.
                    <br>
                    <br>
                    - Après le lancement, surveillez votre site pour détecter d'éventuels problèmes et faites-nous part de toute erreur ou modification supplémentaire que vous souhaiteriez apporter. 
                    <br>
                    <br>
                    - Approuvez les mises à jour régulières et les mesures de sécurité pour maintenir votre site à jour et sécurisé (des frais supplémentaires peuvent s'appliquer).`,
        buttonAll: "Tout",
        buttonWeb: "Web",
        buttonResume: "Résumé",
        buttonDesign: "Conception",
        projectDescriptionWeb: "Un projet web",
        projectDescriptionResume: "Un projet de CV / résumé",
        projectDescriptionDesign: "Un projet de conception",
        viewProject: "Voir Projet",
        title_price: "SERVICES",
        subtitle_price: "Liste des prix (HORS TAXES)",
        td_title_01: "• SITE WEB",
        td_title_02: "• CV / RÉSUMÉ",
        td_title_03: "• AVIS DE CV / RÉSUMÉ",
        price_01: "$499 - 1999",
        price_02: "$99 - 249",
        price_03: "$49 - 99",
        teamTitle: "",
        subtitle_team: "",
        teamName_01: "Jimmy Chen",
        teamName_02: "Alice Wang",
        teamName_03: "Marco Ng",
        teamName_04: "Jiawei Li",
        titleTeamName_01: "Programmeur",
        titleTeamName_02: `
                        Directeurice de UX & 
                        <br>
                        Responsable des réseaux sociaux`,
        titleTeamName_03: "Service client",
        titleTeamName_04: "Service client",
        contactTitle: "Entrer en contact",
        contactContent: "Vous avez des questions ou besoin d'assistance ? N'hésitez pas à nous contacter via notre formulaire de contact ou par e-mail. Nous sommes à votre disposition pour vous permettre de profiter pleinement de nos solutions innovantes.",
        contactBoxTitle: "Envoyez-nous un message",
        placeholderName: "Votre nom",
        placeholderGmail: "Votre Gmail",
        placeholderMessage: "Votre message",
        buttonSend: "Envoyer",
        footer_gmail: "Gmail : orantechnologique@gmail.com"
    },
    zh: {
        navHome: "主页",
        navPrice: "价格表",
        navProjects: "项目",
        navTeam: "团队",
        navContact: "联系我们",
        slogan: "设计为您，闪耀每刻",
        homeContent: `在<b>ORANTECHNO</b>，我们是一支专注于网站设计与开发的团队，致力于打造个性化和创新的网站，以满足您独特的愿景。`,
        aboutTitle: "探索 OranTechno",
        text_title_about_01: "欢迎来到 OranTechno",
        text_title_about_02: "展示您的技能，提升您的成功",
        text_title_about_03: "我们对您的承诺",
        textAbout_01: `
                    我们专注于设计和开发满足您及您的企业特定需求的定制网站。无论您是小型企业、企业家还是创意专业人士，我们都会在每一个环节与您合作，打造一个真正代表您和您品牌的数字形象。 
                    <br>
                    <br>
                    让我们帮助您建立一个独特的网站，确保其顺畅运行，助您实现目标。`,
        textAbout_02: `与我们专业的网站建设团队一起，我们将通过设计个性化、专业的网站，赋予您和您的企业，以最引人入胜的方式展示您的技能、经验和成就。在“项目”标签中探索我们的过去项目，了解我们如何帮助个人和企业在线蓬勃发展。`,
        textAbout_03: `
                    - 受最新趋势启发的创新设计。
                    <br>
                    - 在所有设备上提供无瑕疵的用户体验。
                    <br>
                    - 效率是客户的认可，售后是我们的承诺。`,
        processTitle: "业务流程",
        processStep_1: "规划与分析",
        processStep_2: "设计与开发",
        processStep_3: "测试与优化",
        processStep_4: "发布与维护",
        contentProcess_1: `
                    - 请您提供您的简历/商业目标、目标受众以及希望网站具有的具体功能。
                    <br>
                    <br>
                    - 关于网站结构和设计的现有内容或想法。
                    <br>
                    <br>
                    - 所需的所有内容，包括文本、图片、视频等，以便我们更好地理解您的需求。
                    <br>
                    <br>
                    - 对项目计划的批准或反馈意见，非常感谢您的配合，如有具体意见或其他要求，请随时告诉我！谢谢！`,
        contentProcess_2: `
                    - 您可以查看我们以往完成的项目和内容，再结合您的需求与新的想法，以便进一步改善该项目。非常期待您的反馈和建议！
                    <br>
                    <br>
                    - 请您选择颜色、字体和其他设计元素的偏好，以确保它们符合您的想法。谢谢您的配合！`,
        contentProcess_3: `
                    - 请确认设计在手机和平板上的响应性，包括布局、字体和功能的正常工作。
                    <br>
                    <br>
                    - 请您测试网站，如果发现任何问题，请告诉我们。  
                    <br>
                    <br>
                    - 请您在上线之前提供任何关于网站的最终内容，以确保网站的最新信息。谢谢！`,
        contentProcess_4: `
                    - 请确认最终发布的域名和服务器设置。
                    <br>
                    <br>
                    - 在发布网站后，网站如若存在问题或漏洞，请及时告知我们并对其做出正确的修改。 
                    <br>
                    <br>
                    - 如需定期更新和安全措施，以确保您的网站保持最新和安全（可能会产生额外费用）。谢谢！`,
        buttonAll: "所有",
        buttonWeb: "网站",
        buttonResume: "简历",
        buttonDesign: "设计",
        projectDescriptionWeb: "网站项目",
        projectDescriptionResume: "简历项目",
        projectDescriptionDesign: "设计项目",
        viewProject: "查看项目",
        title_price: "服务",
        subtitle_price: "价格表（免税）",
        td_title_01: "网站",
        td_title_02: "简历",
        td_title_03: "简历评审",
        price_01: "$499 - 1999",
        price_02: "$99 - 249",
        price_03: "$49 - 99",
        teamTitle: "关于我们的团队",
        subtitle_team: "我们充满热情的专业人士致力于提供卓越的服务",
        teamName_01: "Jimmy Chen",
        teamName_02: "Alice Wang",
        teamName_03: "Marco Ng",
        teamName_04: "Jiawei Li",
        titleTeamName_01: "程序员",
        titleTeamName_02: `
                        用户体验负责人 & 
                        <br>
                        社交媒体负责人`,
        titleTeamName_03: "客服人员",
        titleTeamName_04: "客服人员",
        contactTitle: "联系我们",
        contactContent: "如有问题或需要支持请随时通过我们的联系表单或电子邮件与我们取得联系。我们在这里帮助您充分利用我们的创新解决方案。如果您需要更多帮助，请告诉我！",
        contactBoxTitle: "给我们发消息",
        placeholderName: "您的名字",
        placeholderGmail: "您的邮件",
        placeholderMessage: "您的消息",
        buttonSend: "发送",
        footer_gmail: "邮箱 : orantechnologique@gmail.com"
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