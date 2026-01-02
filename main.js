const professions = [
    {
        id: "humanities",
        title: "Հումանիտար",
        summary: "Լեզուների և բանասիրության խորացված ուսուցում:",
        details: "Հումանիտար հոսքը կենտրոնանում է մայրենի և օտար լեզուների խորացված ուսումնասիրության ու գրականության վերլուծության վրա: Այն զարգացնում է սովորողների թարգմանչական հմտությունները և բանավոր ու գրավոր հաղորդակցվելու արվեստը՝ պատրաստելով ապագա լեզվաբանների և բանասերների:"
    },
    {
        id: "Technologies",
        title: "ՏՀՏ",
        summary: "Ծրագրավորման և թվային տեխնոլոգիաների ուսուցում:",
        details: "Այս հոսքը նպատակ ունի զարգացնել ալգորիթմական մտածողությունը և տիրապետել ժամանակակից ծրագրավորման լեզուներին: Սովորողները ձեռք են բերում գործնական հմտություններ տեղեկատվական համակարգերի կառավարման և նորարարական տեխնոլոգիաների կիրառման ոլորտում։"
    },
    {
        id: "Art",
        title: "Արվեստ",
        summary: "Ստեղծագործական հմտությունների և գեղագիտության զարգացում:",
        details: "Այս ուղղությունը կենտրոնանում է կերպարվեստի դիզայնի և արվեստի պատմության ուսումնասիրության վրա: Այն օգնում է սովորողներին բացահայտել իրենց ստեղծագործական ներուժը և զարգացնել տեսողական հաղորդակցության ու գեղագիտական վերլուծության կարողությունները:"
    },
    {
        id: "PhysicsMath",
        title: "Ֆիզմաթ",
        summary: "Ֆիզիկայի և մաթեմատիկայի խորացված ուսուցում:",
        details: "Այս հոսքը նախատեսված է տրամաբանական և վերլուծական ուժեղ մտածողություն ունեցողների համար: Սովորողները խորությամբ ուսումնասիրում են բնության օրենքները և մաթեմատիկական մոդելավորումը որոնք հիմք են հանդիսանում ճարտարագիտության և տեխնոլոգիական բնագավառների համար:"
    },
    {
        id: "BioChemistry",
        title: "Կենսաքիմիա",
        summary: "Կենսաբանության և քիմիայի համակողմանի ուսումնասիրություն:",
        details: "Այղ ուղղությունը կենտրոնանում է կենդանի օրգանիզմների և նյութերի քիմիական կառուցվածքի հետազոտման վրա Այն հիանալի նախապատրաստական հիմք է ապագա բժիշկների դեղագործների և բնապահպանների համար ովքեր ցանկանում են հասկանալ կյանքի գիտական հիմքերը:"
    },
    {
        id: "History",
        title: "Պատմագիտություն",
        summary: "Պատմական իրադարձությունների և հասարակագիտության վերլուծություն:",
        details: "Այս ուղղությունը կենտրոնանում է մարդկության պատմության քաղաքական զարգացումների և սոցիալական փոփոխությունների ուսումնասիրության վրա Այն զարգացնում է քննադատական վերլուծության և փաստարկված խոսքի հմտությունները որոնք կարևոր են ապագա քաղաքագետների և իրավաբանների համար:"
    },
];

const newsData = [
    {
        id: 1,
        date: "Հունվար 3, 2026",
        title: "Նոր Տեխնոլոգիական Լաբորատորիայի Բացում",
        image: "school_hero.png",
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
        image: "campus_life.png",
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
        image: "school_history.png",
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
        image: "campus_life.png",
        lecture: `
            <div class="lecture-header">
                <span class="section-label">Կենսատեխնոլոգիա</span>
                <h1>Դպրոցական Ջերմոց</h1>
            </div>
            <div class="lecture-body">
                <div class="lecture-main">
                    <h2>Տեսլական</h2>
                    <p>Այս նախագիծը ծնվել է մեր դպրոցի տարածքում հազվագյուտ բուսատեսակները պահպանելու ցանկությունից:</p>
                    <img src="campus_life.png" class="lecture-images">
                    <h2>Իրականացում</h2>
                    <p>Մենք նախագծել ենք խոնավեցման հատուկ համակարգ, որը նմանակում է բնական անձրևները՝ միաժամանակ պահպանելով վերահսկվող կլիմա:</p>
                    <h2>Արդյունք</h2>
                    <p>Պատմության պահպանումը ժամանակակից ինժեներիայի միջոցով այս ուսումնական տարվա հիմնական թեման է:</p>
                </div>
                <div class="lecture-sidebar">
                    <div class="sidebar-widget">
                        <span class="sidebar-label">Բաժին</span>
                        <span class="sidebar-value">Բնագիտություն</span>
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
        image: "school_hero.png",
        lecture: `
            <div class="lecture-header">
                <span class="section-label">Ռոբոտաշինություն</span>
                <h1>Կամպուս Վոյաջեր</h1>
            </div>
            <div class="lecture-body">
                <div class="lecture-main">
                    <h2>Նպատակ</h2>
                    <p>Ստեղծել ինքնավար ռոբոտ, որն ընդունակ է տեղաշարժվել դպրոցի բակում՝ հաղթահարելով տարբեր արգելքներ:</p>
                    <img src="school_hero.png" class="lecture-images">
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
        image: "school_history.png",
        lecture: `
            <div class="lecture-header">
                <span class="section-label">Պատմություն</span>
                <h1>Թվային Արխիվ</h1>
            </div>
            <div class="lecture-body">
                <div class="lecture-main">
                    <p>Մենք թվայնացնում ենք դպրոցի տասնամյակների պատմությունը՝ սկսած հիմնադրման օրվանից մինչև այսօր:</p>
                    <img src="school_history.png" class="lecture-images">
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
        image: "campus_life.png",
        lecture: `
            <div class="lecture-header">
                <span class="section-label">Տեխնոլոգիա</span>
                <h1>Աուրա ԱԻ</h1>
            </div>
            <div class="lecture-body">
                <div class="lecture-main">
                    <p>Աուրան արհեստական բանականության վրա հիմնված օգնական է, որն օգնում է աշակերտներին գտնել անհրաժեշտ գրականությունը:</p>
                    <img src="campus_life.png" class="lecture-images">
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
        <div class="modal-project">
            <div class="sticky-close-wrapper">
                <button class="close-btn" onclick="closeOverlay()">✕</button>
            </div>
            <div class="modal-image-container">
                <img src="${p.image}" style="width: 100%; height: 65vh; object-fit: cover; display: block;">
            </div>
            <div class="modal-body-content" style="margin-top: -60px; position: relative; background: var(--surface); border-radius: 40px 40px 0 0; padding-top: 40px;">
                ${p.lecture}
            </div>
        </div>
    `;
    showOverlay();
}

function openProfession(id) {
    const p = professions.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-profession" style="position: relative;">
            <button class="close-btn" onclick="closeOverlay()">✕</button>
            <h2 class="serif" style="font-size: 2.8rem; margin-bottom: 1.5rem; color: var(--primary);">${p.title}</h2>
            <p style="font-size: 1.15rem; color: var(--text-muted); line-height: 2;">${p.details}</p>
        </div>
    `;
    showOverlay();
}

function openNews(id) {
    const n = newsData.find(item => item.id === id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="modal-news">
            <div class="sticky-close-wrapper">
                <button class="close-btn" onclick="closeOverlay()">✕</button>
            </div>
            <div class="news-expanded-header">
                <span class="news-date">${n.date}</span>
                <h1>${n.title}</h1>
            </div>
            <div class="news-expanded-body">
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
