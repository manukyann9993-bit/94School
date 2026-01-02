const newsData = [
    {
        id: 1,
        date: "Հունվար 3, 2026",
        title: "Նոր Տեխնոլոգիական Լաբորատորիայի Բացում",
        image: "school_hero.png",
        summary: "Մեր դպրոցում բացվեց նորագույն սարքավորումներով հագեցած լաբորատորիա՝ ռոբոտաշինության և ԱԻ հետազոտությունների համար:",
        content: "Լաբորատորիան հնարավորություն կտա աշակերտներին գործնականում կիրառել իրենց գիտելիքները և ստեղծել նորարարական նախագծեր..."
    },
    {
        id: 2,
        date: "Դեկտեմբեր 25, 2025",
        title: "Շախմատի Ներդպրոցական Մրցաշար",
        image: "campus_life.png",
        summary: "Ավարտվեց ամենամյա շախմատային մրցաշարը, որին մասնակցեցին ավելի քան 50 աշակերտներ բոլոր դասարաններից:",
        content: "Լարված պայքարում հաղթող ճանաչվեց 11-րդ դասարանի աշակերտ Արմեն Սարգսյանը..."
    },
    {
        id: 3,
        date: "Դեկտեմբեր 20, 2025",
        title: "Այցելություն Գիտությունների Ազգային Ակադեմիա",
        image: "school_history.png",
        summary: "Բնագիտական հոսքի աշակերտները հյուրընկալվեցին ԳԱԱ-ում, որտեղ ծանոթացան հայ գիտնականների վերջին ձեռքբերումներին:",
        content: "Էքսկուրսիան շատ տպավորիչ էր և ոգեշնչող մեր աշակերտների համար..."
    }
];

function initNews() {
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        newsGrid.innerHTML = newsData.map(news => `
            <div class="card news-card">
                <div class="news-date">${news.date}</div>
                <img src="${news.image}" class="card-img" alt="${news.title}">
                <h3>${news.title}</h3>
                <p>${news.summary}</p>
                <button class="btn-text" onclick="alert('Ավելին շուտով...')">Կարդալ ավելին →</button>
            </div>
        `).join('');
    }
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
