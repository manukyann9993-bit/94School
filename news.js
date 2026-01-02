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
            <img src="school_hero.png" style="width: 100%; border-radius: 20px; margin: 40px 0;">
            <p>Սա նոր փուլ է մեր դպրոցի պատմության մեջ, որը կօգնի աշակերտներին դառնալ ավելի մրցունակ ժամանակակից աշխարհում:</p>
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
        title: "Այցելություն ԳԱԱ Ակադեմիա",
        image: "school_history.png",
        summary: "Բնագիտական հոսքի աշակերտները հյուրընկալվեցին ԳԱԱ-ում, որտեղ ծանոթացան հայ գիտնականների վերջին ձեռքբերումներին:",
        content: `
            <p>Էքսկուրսիան շատ տպավորիչ էր և ոգեշնչող մեր աշակերտների համար։ Նրանք հնարավորություն ունեցան տեսնել իրական լաբորատոր պայմաններում կատարվող հետազոտությունները և լսել առաջատար գիտնականների դասախոսությունները։</p>
            <p>Այսպիսի այցելությունները օգնում են աշակերտներին ավելի հստակ պատկերացնել իրենց ապագա մասնագիտական ուղին և ավելի մեծ հետաքրքրությամբ ուսումնասիրել բնագիտական առարկաները։</p>
        `
    },
    {
        id: 4,
        date: "Հունվար 1, 2026",
        title: "Այցելություն ԵՊՀ",
        image: "EPH.jpeg",
        summary: "Բնագիտական հոսքի աշակերտները հյուրընկալվեցին ԵՊՀ-ում, որտեղ ծանոթացան հայ գիտնականների վերջին ձեռքբերումներին:",
        content: `
            <p>Էքսկուրսիան շատ տպավորիչ էր և ոգեշնչող մեր աշակերտների համար։ Նրանք հնարավորություն ունեցան տեսնել իրական լաբորատոր պայմաններում կատարվող հետազոտությունները և լսել առաջատար գիտնականների դասախոսությունները։</p>
            <p>Այսպիսի այցելությունները օգնում են աշակերտներին ավելի հստակ պատկերացնել իրենց ապագա մասնագիտական ուղին և ավելի մեծ հետաքրքրությամբ ուսումնասիրել բնագիտական առարկաները։</p>
        `
    }
];

function initNews() {
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
        newsGrid.innerHTML = sortedNews.map(n => `
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

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initNews();
    setupMobileMenu();
});
