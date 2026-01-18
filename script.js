const streamsData = [
    {
        id: 'hum',
        url: 'streams/humanitarian.html',
        title: 'Հումանիտար',
        summary: 'Լեզուների և բանասիրության խորացված ուսուցում',
        img: 'images/stream_humanitarian.png'
    },
    {
        id: 'hist',
        url: 'streams/history.html',
        title: 'Պատմագիտական',
        summary: 'Պատմության և հասարակագիտության խորացված ուսումնասիրություն',
        img: 'images/stream_history.png'
    },
    {
        id: 'econ',
        url: 'streams/economics.html',
        title: 'Տնտեսագիտական',
        summary: 'Տնտեսագիտության և մաթեմատիկայի ուսուցում',
        img: 'images/stream_economics.png'
    },
    {
        id: 'ict',
        url: 'streams/ict.html',
        title: 'ՏՀՏ',
        summary: 'Ծրագրավորման և թվային տեխնոլոգիաների ուսուցում',
        img: 'images/stream_ict.png'
    },
    {
        id: 'phys',
        url: 'streams/physmath.html',
        title: 'Ֆիզմաթ',
        summary: 'Ֆիզիկայի և մաթեմատիկայի խորացված ուսուցում',
        img: 'images/stream_physmath.png'
    },
    {
        id: 'bio',
        url: 'streams/biochem.html',
        title: 'Կենսաքիմիա',
        summary: 'Կենսաբանության և քիմիայի ուսումնասիրություն',
        img: 'images/stream_biochem.png'
    },
    {
        id: 'art',
        url: 'streams/art.html',
        title: 'Արվեստ',
        summary: 'Ստեղծագործական հմտությունների զարգացում',
        img: 'images/stream_art.png'
    }
];

// CAROUSEL LOGIC
let currentSlide = 0;
let carouselInterval;
const autoPlayDelay = 5000;

function populateStreams() {
    const track = document.getElementById('streams-track');
    if (!track) return;

    // Clear existing content
    track.innerHTML = '';

    // Create Slides
    track.innerHTML = streamsData.map((s, index) => `
        <div class="carousel-slide ${index === 0 ? 'active-slide' : ''}" data-index="${index}">
            <a href="${s.url}" class="glass-card-carousel" style="text-decoration: none; color: inherit;">
                <div class="card-bg-subtle">
                    <img src="${s.img}" alt="${s.title}">
                </div>
                <div class="card-content-max">
                    <span class="card-tag">ՀՈՍՔ ${index + 1}</span>
                    <h3 class="serif">${s.title}</h3>
                    <p>${s.summary}</p>
                </div>
            </a>
        </div>
    `).join('');

    updateCarousel();
    startAutoPlay();

    // Pause on hover
    const container = document.querySelector('.streams-carousel-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }
}

function updateCarousel() {
    const track = document.getElementById('streams-track');
    const slides = document.querySelectorAll('.carousel-slide');
    if (!track || slides.length === 0) return;

    // Get number of visible slides based on window width
    let slidesPerView = 1;
    if (window.innerWidth > 1024) slidesPerView = 3;
    else if (window.innerWidth > 768) slidesPerView = 2;

    const maxIndex = slides.length - slidesPerView;

    // Looping logic correction
    if (currentSlide < 0) currentSlide = maxIndex; // Go to end
    if (currentSlide > maxIndex) currentSlide = 0; // Go to start

    // Calculate move percentage
    // Each slide width % is 100 / slidesPerView.
    // We move by index * (100 / slidesPerView) but we must account for gap?
    // Flexbox gap handling in transform is tricky. safer to use slide width px or simpler calc.
    // CSS uses calc(33.333% - 20px) etc.
    // Let's rely on slide offsetWidth which includes gaps if we account for it, or just %.

    // Simpler approach: Slide width includes gap in calculation if we assume uniform breakdown
    const slideWidthPercent = 100 / slidesPerView;
    const movePercent = -(currentSlide * slideWidthPercent);

    // Apply transform. Note: Gap logic in pure % transform is slightly off without calc, 
    // but if we move by 100% / visual count, it works if container fits exactly.
    // To make it perfect with gap, we can scroll the track? 
    // Or we use the property that slide width is (100% - totalGaps)/N.
    // Let's try simple translateX.
    track.style.transform = `translateX(${movePercent}%)`;

    // Update active class for center/focus effect
    slides.forEach(s => s.classList.remove('active-slide'));
    // Mark the visible ones as active
    for (let i = 0; i < slidesPerView; i++) {
        if (slides[currentSlide + i]) slides[currentSlide + i].classList.add('active-slide');
    }
}

function moveCarousel(direction) {
    currentSlide += direction;
    updateCarousel();
    resetAutoPlay();
}

function startAutoPlay() {
    stopAutoPlay();
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, autoPlayDelay);
}

function stopAutoPlay() {
    if (carouselInterval) clearInterval(carouselInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Update on resize
window.addEventListener('resize', updateCarousel);


// Existing Streams Data...
// (Assuming populateStreams is called conditionally on streams.html)

const projectsData = [
    {
        id: 3,
        title: "Ռոբոտաշինություն և AI",
        author: "12-րդ դասարան",
        year: "2024",
        summary: "Արհեստական բանականությամբ աշխատող ինքնավար ռոբոտի նախագծում:",
        content: `
            <h1>Ռոբոտաշինություն և AI</h1>
            <p><strong>Հեղինակ՝</strong> 12-րդ դասարան | <strong>Տարեթիվ՝</strong> 2024</p>
            <hr>
            <h2>Ներածություն</h2>
            <p>Այս նախագիծը նպատակ ուներ ստեղծել ռոբոտ, որը կարող է ինքնուրույն կողմնորոշվել տարածության մեջ...</p>
            <h2>Մեթոդաբանություն</h2>
            <p>Օգտագործվել են Python ծրագրավորման լեզուն և Raspberry Pi միկրոհամակարգիչը...</p>
            <h2>Արդյունքներ</h2>
            <p>Ռոբոտը հաջողությամբ անցավ լաբիրինթոսը 3 րոպեում:</p>
            <h2>Եզրակացություն</h2>
            <p>AI տեխնոլոգիաների կիրառումը դպրոցական մակարդակում հնարավոր է և արդյունավետ:</p>
        `
    },
    {
        id: 2,
        title: "Էկոլոգիական Մաքրում",
        author: "11-րդ դասարան",
        year: "2023",
        summary: "Դպրոցամերձ տարածքի կանաչապատման և մաքրման ծրագիր:",
        content: `
            <h1>Էկոլոգիական Մաքրում</h1>
            <p><strong>Հեղինակ՝</strong> 11-րդ դասարան | <strong>Տարեթիվ՝</strong> 2023</p>
            <hr>
            <h2>Նպատակը</h2>
            <p>Բարձրացնել էկոլոգիական գիտակցությունը աշակերտների շրջանում...</p>
        `
    },
    {
        id: 1,
        title: "Հայոց Պատմության Ուղիներով",
        author: "10-րդ դասարան",
        year: "2023",
        summary: "Ինտերակտիվ քարտեզի ստեղծում պատմական իրադարձություններով:",
        content: `
            <h1>Հայոց Պատմության Ուղիներով</h1>
            <p><strong>Հեղինակ՝</strong> 10-րդ դասարան | <strong>Տարեթիվ՝</strong> 2023</p>
            <hr>
            <h2>Նկարագրություն</h2>
            <p>Ստեղծվել է թվային քարտեզ, որը ցույց է տալիս հայոց պատմության կարևորագույն ճակատամարտերը...</p>
        `
    }
];

const newsData = [
    {
        id: 1,
        author: "Դպրոցի Տնօրինություն",
        date: "20 Հունվար, 2024",
        image: "images/94dproc.jpg",
        content: "Սիրելի աշակերտներ և ծնողներ, հայտնում ենք, որ...",
        fullContent: "Սիրելի աշակերտներ և ծնողներ, հայտնում ենք, որ հաջորդ շաբաթվանից մեկնարկում են օլիմպիադաների դպրոցական փուլերը: Խնդրում ենք բոլոր մասնակիցներին ներկայանալ ժամանակին: Հաջողություն ենք մաղթում բոլորին:"
    },
    {
        id: 2,
        author: "Աշակերտական Խորհուրդ",
        date: "15 Փետրվար, 2024",
        image: "images/stream_ict.png",
        content: "Մեր դպրոցի թիմը հաղթանակ տարավ ինտելեկտուալ խաղում...",
        fullContent: "Մեր դպրոցի թիմը փայլուն հաղթանակ տարավ քաղաքային ինտելեկտուալ խաղում՝ գրավելով առաջին պատվավոր տեղը: Շնորհավորում ենք թիմի անդամներին և մաղթում նորանոր հաջողություններ:"
    },
    {
        id: 3,
        author: "Գրադարանավար",
        date: "01 Մարտ, 2024",
        image: "images/stream_history.png",
        content: "Գրադարանը համալրվել է նոր մասնագիտական գրականությամբ...",
        fullContent: "Ուրախությամբ տեղեկացնում ենք, որ մեր գրադարանը համալրվել է նոր մասնագիտական և գեղարվեստական գրականությամբ: Բոլոր ցանկացողները կարող են այցելել և ծանոթանալ նոր գրքերին:"
    }
];

function populateProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    // Sort by ID descending
    const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

    grid.innerHTML = sortedProjects.map(p => `
        <div class="wiki-card" onclick="openWiki(${p.id})">
            <span class="wiki-id">#${p.id}</span>
            <div class="wiki-title">${p.title}</div>
            <div class="wiki-meta">Հեղինակ: ${p.author} | ${p.year}</div>
            <p>${p.summary}</p>
        </div>
    `).join('');
}

function openWiki(id) {
    const project = projectsData.find(p => p.id === id);
    const modal = document.getElementById('wiki-modal');
    const body = document.getElementById('wiki-body');

    body.innerHTML = `
        <button class="portal-close-max" style="position:absolute; top: 20px; right: 20px; color: #fff; background: rgba(255,255,255,0.1);" onclick="closeWiki()">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <h1 style="border-bottom: 2px solid #555; padding-bottom: 15px; margin-bottom: 30px;">${project.title}</h1>
        <div style="font-family: 'Times New Roman', serif; font-size: 1.2rem; line-height: 1.8;">
             ${project.content}
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWiki() {
    document.getElementById('wiki-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function populateNews() {
    const grid = document.getElementById('news-grid');
    if (!grid) return;

    // Sort by ID desc
    const sortedNews = [...newsData].sort((a, b) => b.id - a.id);

    grid.innerHTML = sortedNews.map(n => `
        <div class="news-card-social">
            <div class="news-header">
                <div class="news-avatar">${n.author[0]}</div>
                <div class="news-author-info">
                    <span class="news-author">${n.author}</span>
                </div>
            </div>
            
            <div class="news-body">
                ${n.content}
            </div>

            <div class="news-image-container">
                <img src="${n.image}" alt="News Image">
            </div>

            <div class="news-meta-footer">
                <span class="news-date-small">${n.date}</span>
                <div class="news-read-more" onclick="openNews(${n.id})">Կարդալ Ավելին</div>
            </div>
        </div>
    `).join('');
}

function openNews(id) {
    const item = newsData.find(n => n.id === id);
    const modal = document.getElementById('news-modal');
    const body = document.getElementById('news-body');

    body.innerHTML = `
        <button class="portal-close-max" onclick="closeNews()" style="top: 20px; right: 20px; z-index: 2200;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        
        <div style="flex: 1; overflow: hidden; position: relative;">
            <img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="News Cover">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-deep) 10%, transparent 80%);"></div>
        </div>

        <div style="padding: 40px; color: #fff; flex: 1; overflow-y: auto;">
            <div class="news-header" style="margin-bottom: 30px;">
                <div class="news-avatar" style="width: 60px; height: 60px; font-size: 1.5rem;">${item.author[0]}</div>
                <div class="news-author-info">
                    <span class="news-author" style="font-size: 1.2rem;">${item.author}</span>
                    <span class="news-date">${item.date}</span>
                </div>
            </div>
            <p style="font-size: 1.2rem; line-height: 1.8; color: #ddd;">${item.fullContent}</p>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNews() {
    document.getElementById('news-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const links = document.getElementById('academy-links');
    links.classList.toggle('active');

    // Toggle icon state if desired, or simpler just toggle menu
    // Prevent body scroll when menu is open? 
    if (links.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Global click to close modals
window.onclick = (e) => {
    if (e.target.id === 'wiki-modal') closeWiki();
    if (e.target.id === 'news-modal') closeNews();
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (typeof closeWiki === 'function') closeWiki();
        if (typeof closeNews === 'function') closeNews();
    }
});

