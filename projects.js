const projects = [
    {
        id: "greenhouse",
        id_num: 1,
        date: "Սեպտեմբեր 15, 2024",
        title: "Դպրոցական Ջերմոց",
        summary: "Բուսաբանական կյանքի վերականգնումը ժամանակակից տեխնոլոգիաներով:",
        image: "images/campus_life.png",
        lecture: `
            <div class="project-body">
                <div class="project-main-content">
                    <h2>Տեսլական</h2>
                    <p>Այս նախագիծը ծնվել է մեր դպրոցի տարածքում հազվագյուտ բուսատեսակները պահպանելու ցանկությունից:</p>
                    <img src="images/campus_life.png" style="width:100%; border-radius:12px; margin: 30px 0;">
                    <h2>Իրականացում</h2>
                    <p>Մենք նախագծել ենք խոնավեցման հատուկ համակարգ, որը նմանակում է բնական անձրևները՝ միաժամանակ պահպանելով վերահսկվող կլիմա:</p>
                    <h2>Արդյունք</h2>
                    <p>Պատմության պահպանումը ժամանակակից ինժեներիայի միջոցով այս ուսումնական տարվա հիմնական թեման է:</p>
                </div>
                <div class="project-sidebar">
                    <div class="project-stat-item">
                        <span class="project-stat-label">Բաժին</span>
                        <span class="project-stat-value">Բնագիտություն</span>
                    </div>
                    <div class="project-stat-item">
                        <span class="project-stat-label">Տարեթիվ</span>
                        <span class="project-stat-value">2025</span>
                    </div>
                    <div class="project-stat-item">
                        <span class="project-stat-label">Ղեկավար</span>
                        <span class="project-stat-value">Աշ. Խորհուրդ</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "rover",
        id_num: 2,
        date: "Նոյեմբեր 10, 2024",
        title: "Ռոբոտաշինության Խմբակ",
        summary: "Ինքնավար սարքերի ստեղծում և քարտեզագրում:",
        image: "images/school_hero.png",
        lecture: `
            <div class="project-body">
                <div class="project-main-content">
                    <h2>Նպատակ</h2>
                    <p>Ստեղծել ինքնավար ռոբոտ, որն ընդունակ է տեղաշարժվել դպրոցի բակում՝ հաղթահարելով տարբեր արգելքներ:</p>
                    <img src="images/school_hero.png" style="width:100%; border-radius:12px; margin: 30px 0;">
                    <h2>Տեխնոլոգիաներ</h2>
                    <p>Վոյաջերը օգտագործում է ուլտրաձայնային սենսորներ արգելքները հայտնաբերելու համար և հատուկ կախոցների համակարգ:</p>
                    <h2>Ազդեցություն</h2>
                    <p>Հավաքագրված տվյալները օգնում են մեր թիմին ավելի արդյունավետ կառավարել դպրոցի տարածքը:</p>
                </div>
                <div class="project-sidebar">
                    <div class="project-stat-item">
                        <span class="project-stat-label">Բաժին</span>
                        <span class="project-stat-value">Ինժեներիա</span>
                    </div>
                    <div class="project-stat-item">
                        <span class="project-stat-label">Տարեթիվ</span>
                        <span class="project-stat-value">2025</span>
                    </div>
                    <div class="project-stat-item">
                        <span class="project-stat-label">Բարդություն</span>
                        <span class="project-stat-value">Բարձր</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "digital-archive",
        id_num: 3,
        date: "Դեկտեմբեր 5, 2024",
        title: "Թվային Արխիվ",
        summary: "Դպրոցի փաստաթղթերի և պատմության կենտրոնացված հաբ:",
        image: "images/school_history.png",
        lecture: `
            <div class="project-body">
                <div class="project-main-content">
                    <h2>Նախագծի Էությունը</h2>
                    <p>Մենք թվայնացնում ենք դպրոցի տասնամյակների պատմությունը՝ սկսած հիմնադրման օրվանից մինչև այսօր:</p>
                    <img src="images/school_history.png" style="width:100%; border-radius:12px; margin: 30px 0;">
                    <h2>Նպատակ</h2>
                    <p>Ստեղծել հասանելի հարթակ, որտեղ յուրաքանչյուր աշակերտ և շրջանավարտ կկարողանա գտնել իրեն հետաքրքրող տեղեկատվությունը:</p>
                </div>
                <div class="project-sidebar">
                    <div class="project-stat-item">
                        <span class="project-stat-label">Բաժին</span>
                        <span class="project-stat-value">Հասարակագիտություն</span>
                    </div>
                    <div class="project-stat-item">
                        <span class="project-stat-label">Տարեթիվ</span>
                        <span class="project-stat-value">2024</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "ai-assistant",
        id_num: 4,
        date: "Հունվար 2, 2025",
        title: "Աուրա ԱԻ",
        summary: "Աշակերտների կողմից ստեղծված վիրտուալ օգնական գրադարանի համար:",
        image: "images/campus_life.png",
        lecture: `
            <div class="project-body">
                <div class="project-main-content">
                    <h2>Ինովացիա</h2>
                    <p>Աուրան արհեստական բանականության վրա հիմնված օգնական է, որն օգնում է աշակերտներին գտնել անհրաժեշտ գրականությունը:</p>
                    <img src="images/campus_life.png" style="width:100%; border-radius:12px; margin: 30px 0;">
                    <h2>Ֆունկցիոնալություն</h2>
                    <p>Այն կարող է պատասխանել հարցերին, առաջարկել գրքեր և նույնիսկ օգնել ուսումնական պլանի կազմման հարցում:</p>
                </div>
                <div class="project-sidebar">
                    <div class="project-stat-item">
                        <span class="project-stat-label">Բաժին</span>
                        <span class="project-stat-value">ՏՏ / ԱԻ</span>
                    </div>
                    <div class="project-stat-item">
                        <span class="project-stat-label">Կարգավիճակ</span>
                        <span class="project-stat-value">Մշակման փուլում</span>
                    </div>
                </div>
            </div>
        `
    }
];

function init() {
    const projGrid = document.getElementById('projects-grid');
    if (projGrid) {
        const sortedProjects = [...projects].sort((a, b) => b.id_num - a.id_num);
        projGrid.innerHTML = sortedProjects.map(p => `
            <div class="card card-project" onclick="openProject('${p.id}')">
                <img src="${p.image}" class="card-img" alt="${p.title}">
                <div class="card-content">
                    <div class="project-tag">${p.date}</div>
                    <h3>${p.title}</h3>
                    <p>${p.summary}</p>
                </div>
            </div>
        `).join('');
    }
}

function openProject(id) {
    const p = projects.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-project-new">
            <div class="project-hero-section">
                <img src="${p.image}" class="project-hero-bg">
                <div class="project-hero-overlay"></div>
                <div class="close-btn-floating" onclick="closeOverlay()">✕</div>
                <div class="project-hero-content">
                    <span class="project-tag-pill">${p.date}</span>
                    <h1>${p.title}</h1>
                    <div class="project-date">Status: Active</div>
                </div>
            </div>
            ${p.lecture}
        </div>
    `;
    showOverlay();
}

function showOverlay() {
    const ov = document.getElementById('global-overlay');
    ov.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOverlay() {
    const ov = document.getElementById('global-overlay');
    ov.classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
});

window.onclick = function (e) {
    if (e.target.id === 'global-overlay') closeOverlay();
}

// Mobile Menu Toggle logic
function setupMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    setupMobileMenu();
});
