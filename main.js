const professions = [
    {
        id: "humanities",
        title: "Հումանիտար",
        summary: "Լեզուների և բանասիրության խորացված ուսուցում:",
        details: "Հումանիտար հոսքը կենտրոնանում է մայրենի և օտար լեզուների խորացված ուսումնասիրության ու գրականության վերլուծության վրա: Այն զարգացնում է սովորողների թարգմանչական հմտությունները և բանավոր ու գրավոր հաղորդակցվելու արվեստը՝ պատրաստելով ապագա լեզվաբանների և բանասերների:",
        headerImage: "images/stream_history.png",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`
    },
    {
        id: "Technologies",
        title: "ՏՀՏ",
        summary: "Ծրագրավորման և թվային տեխնոլոգիաների ուսուցում:",
        details: "Այս հոսքը նպատակ ունի զարգացնել ալգորիթմական մտածողությունը և տիրապետել ժամանակակից ծրագրավորման լեզուներին: Սովորողները ձեռք են բերում գործնական հմտություններ տեղեկատվական համակարգերի կառավարման և նորարարական տեխնոլոգիաների կիրառման ոլորտում։",
        headerImage: "images/stream_ict.png",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    },
    {
        id: "Art",
        title: "Արվեստ",
        summary: "Ստեղծագործական հմտությունների և գեղագիտության զարգացում:",
        details: "Այս ուղղությունը կենտրոնանում է կերպարվեստի դիզայնի և արվեստի պատմության ուսումնասիրության վրա: Այն օգնում է սովորողներին բացահայտել իրենց ստեղծագործական ներուժը և զարգացնել տեսողական հաղորդակցության ու գեղագիտական վերլուծության կարողությունները:",
        headerImage: "images/stream_art.png",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
    },
    {
        id: "PhysicsMath",
        title: "Ֆիզմաթ",
        summary: "Ֆիզիկայի և մաթեմատիկայի խորացված ուսուցում:",
        details: "Այս հոսքը նախատեսված է տրամաբանական և վերլուծական ուժեղ մտածողություն ունեցողների համար: Սովորողները խորությամբ ուսումնասիրում են բնության օրենքները և մաթեմատիկական մոդելավորումը որոնք հիմք են հանդիսանում ճարտարագիտության և տեխնոլոգիական բնագավառների համար:",
        headerImage: "images/stream_physmath.png",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="14"></line><line x1="16" y1="10" x2="16" y2="10"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="8" y1="14" x2="8" y2="14"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="12" y1="14" x2="12" y2="14"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="8" y1="18" x2="8" y2="18"></line><line x1="16" y1="18" x2="16" y2="18"></line></svg>`
    },
    {
        id: "BioChemistry",
        title: "Կենսաքիմիա",
        summary: "Կենսաբանության և քիմիայի համակողմանի ուսումնասիրություն:",
        details: "Այղ ուղղությունը կենտրոնանում է կենդանի օրգանիզմների և նյութերի քիմիական կառուցվածքի հետազոտման վրա Այն հիանալի նախապատրաստական հիմք է ապագա բժիշկների դեղագործների և բնապահպանների համար ովքեր ցանկանում են հասկանալ կյանքի գիտական հիմքերը:",
        headerImage: "images/stream_biochem.png",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"></path><path d="M14 2v7.31"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>`
    },
    {
        id: "History",
        title: "Պատմագիտություն",
        summary: "Պատմական իրադարձությունների և հասարակագիտության վերլուծություն:",
        details: "Այս ուղղությունը կենտրոնանում է մարդկության պատմության քաղաքական զարգացումների և սոցիալական փոփոխությունների ուսումնասիրության վրա Այն զարգացնում է քննադատական վերլուծության և փաստարկված խոսքի հմտությունները որոնք կարևոր են ապագա քաղաքագետների և իրավաբանների համար:",
        headerImage: "images/stream_history.png",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
    },
];

const newsData = [
    {
        id: 1,
        date: "Հունվար 3, 2026",
        title: "Նոր Տեխնոլոգիական Լաբորատորիայի Բացում",
        image: "images/school_hero.png",
        summary: "Մեր դպրոցում բացվեց նորագույն սարքավորումներով հագեցած լաբորատորիա՝ ռոբոտաշինության և ԱԻ հետազոտությունների համար:",
        content: `
            <p>Լաբորատորիան հնարավորություն կտա աշակերտներին գործնականում կիրառել իրենց գիտելիքները և ստեղծել նորարարական նախագծեր։ Այստեղ տեղադրված են վերջին սերնդի 3D տպիչներ, VR սարքավորումներ և հզոր համակարգիչներ։</p>
            <p>Բացման արարողությանը ներկա էին կրթության նախարարության ներկայացուցիչները և առաջատար ՏՏ ընկերությունների ղեկավարներ, ովքեր խոստացան աջակցել մեր աշակերտներին իրենց հետագա հետազոտություններում։</p>
        `
    },
    {
        id: 2,
        date: "Դեկտեմբեր 25, 2025",
        title: "Շախմատի Ներդպրոցական Մրցաշար",
        image: "images/campus_life.png",
        summary: "Ավարտվեց ամենամյա շախմատային մրցաշարը, որին մասնակցեցին ավելի քան 50 աշակերտներ բոլոր դասարաններից:",
        content: `
            <p>Լարված պայքարում հաղթող ճանաչվեց 11-րդ դասարանի աշակերտ Արմեն Սարգսյանը։ Մրցաշարը նպատակ ուներ խրախուսել տրամաբանական մտածողությունը և ռազմավարական հմտությունները սովորողների շրջանում։</p>
            <p>Բոլոր մասնակիցները ստացան հավաստագրեր, իսկ հաղթողները՝ պատվոգրեր և հուշանվերներ։ Մրցաշարը կազմակերպվել էր աշակերտական խորհրդի և ֆիզիկական կուլտուրայի ամբիոնի կողմից։</p>
        `
    },
    {
        id: 3,
        date: "Դեկտեմբեր 20, 2025",
        title: "Այցելություն ԳԱ Ակադեմիա",
        image: "images/school_history.png",
        summary: "Բնագիտական հոսքի աշակերտները հյուրընկալվեցին ԳԱԱ-ում, որտեղ ծանոթացան հայ գիտնականների վերջին ձեռքբերումներին:",
        content: `
            <p>Էքսկուրսիան շատ տպավորիչ էր և ոգեշնչող մեր աշակերտների համար։ Նրանք հնարավորություն ունեցան տեսնել իրական լաբորատոր պայմաններում կատարվող հետազոտությունները և լսել առաջատար գիտնականների դասախոսությունները։</p>
            <p>Այսպիսի այցելությունները օգնում են աշակերտներին ավելի հստակ պատկերացնել իրենց ապագա մասնագիտական ուղին և ավելի մեծ հետաքրքրությամբ ուսումնասիրել բնագիտական առարկաները։</p>
        `
    }
];

const projectsData = [
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
                    <p>Ստեղծել հասանելի հարթակ, որտեղ յուրաքանանչյուր աշակերտ և շրջանավարտ կկարողանա գտնել իրեն հետաքրքրող տեղեկատվությունը:</p>
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
    const profGrid = document.getElementById('professions-grid');
    if (profGrid) {
        profGrid.innerHTML = professions.map(p => `
            <div class="card" onclick="openProfession('${p.id}')">
                <div class="card-content">
                    <h3>${p.title}</h3>
                    <p>${p.summary}</p>
                </div>
            </div>
        `).join('');
    }

    const newsGrid = document.getElementById('latest-news-grid');
    if (newsGrid) {
        const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
        newsGrid.innerHTML = sortedNews.slice(0, 3).map(n => `
            <div class="card card-news" onclick="openNews(${n.id})">
                <img src="${n.image}" class="card-img" alt="${n.title}">
                <div class="card-content">
                    <div class="news-date">${n.date}</div>
                    <h3>${n.title}</h3>
                    <p>${n.summary}</p>
                </div>
            </div>
        `).join('');
    }

    const projectsGrid = document.getElementById('latest-projects-grid');
    if (projectsGrid) {
        const sortedProjects = [...projectsData].sort((a, b) => b.id_num - a.id_num);
        projectsGrid.innerHTML = sortedProjects.slice(0, 3).map(p => `
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
    const p = projectsData.find(item => item.id === id);
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

function openProfession(id) {
    const p = professions.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-profession-new">
             <button class="close-btn-floating" onclick="closeOverlay()">✕</button>
            <div class="profession-header-bg" style="background: url('${p.headerImage}') no-repeat center center; background-size: cover;">
                <div class="profession-hero-overlay" style="position: absolute; inset:0; background: rgba(0,0,0,0.5); border-radius: 30px 30px 0 0;"></div>
                <div class="profession-icon-circle">
                    ${p.svgIcon}
                </div>
            </div>
            <div class="profession-content">
                <h2 class="profession-title serif">${p.title}</h2>
                <p class="profession-details">${p.details}</p>
            </div>
        </div>
    `;
    showOverlay();
}

function openNews(id) {
    const n = newsData.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-news-new">
            <div class="close-btn-floating" onclick="closeOverlay()">✕</div>
            <div class="news-header">
                <span class="news-meta-top">${n.date} &bull; School News</span>
                <h1 class="news-title-large">${n.title}</h1>
            </div>
            <div class="news-featured-image-container">
                <img src="${n.image}" class="news-featured-image">
                <div class="news-caption">${n.summary}</div>
            </div>
            <div class="news-body-text">
                ${n.content}
            </div>
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

// Scroll Spy for Link Highlighting
function setupScrollSpy() {
    const sections = document.querySelectorAll('header, section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    setupMobileMenu();
    setupScrollSpy();
});
