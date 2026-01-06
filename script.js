const streamsData = [
    {
        id: 'hum',
        title: 'Հումանիտար',
        summary: 'Լեզուների և բանասիրության խորացված ուսուցում',
        desc: 'Հումանիտար հոսքը կենտրոնանում է մայրենի և օտար լեզուների խորացված ուսումնասիրության ու գրականության վերլուծության վրա։ Այն զարգացնում է սովորողների թարգմանչական հմտությունները և բառապաշարը:',
        features: ['Լեզվաբանություն', 'Գրականություն', 'Թարգմանություն'],
        stats: '85% Ընդունելություն',
        img: 'images/stream_history.png',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
    },
    {
        id: 'ict',
        title: 'ՏՀՏ',
        summary: 'Ծրագրավորման և թվային տեխնոլոգիաների ուսուցում',
        desc: 'Այս հոսքը նպատակ ունի զարգացնել ալգորիթմական մտածողությունը և տիրապետել ժամանակակից ծրագրավորման լեզուներին։ Սովորողները ձեռք են բերում գործնական հմտություններ IT ոլորտում։',
        features: ['Python & C++', 'Վեբ Դիզայն', 'Ռոբոտաշինություն'],
        stats: '95% IT Կարիերա',
        img: 'images/stream_ict.png',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    },
    {
        id: 'art',
        title: 'Արվեստ',
        summary: 'Ստեղծագործական հմտությունների զարգացում',
        desc: 'Այս ուղղությունը կենտրոնանում է կերպարվեստի, դիզայնի և արվեստի պատմության ուսումնասիրության վրա։ Այն օգնում է սովորողներին բացահայտել իրենց ստեղծագործական ներուժը։',
        features: ['Կերպարվեստ', 'Թվային Արվեստ', 'Դիզայն'],
        stats: 'Creative Hub',
        img: 'images/stream_art.png',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>`
    },
    {
        id: 'phys',
        title: 'Ֆիզմաթ',
        summary: 'Ֆիզիկայի և մաթեմատիկայի խորացված ուսուցում',
        desc: 'Այս հոսքը նախատեսված է տրամաբանական և վերլուծական ուժեղ մտածողություն ունեցողների համար։ Սովորողները խորությամբ ուսումնասիրում են բնության օրենքները։',
        features: ['Լոգիկա', 'Մաթեմատիկա', 'Ինժեներիա'],
        stats: 'Elite Alumni',
        img: 'images/stream_physmath.png',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>`
    },
    {
        id: 'bio',
        title: 'Կենսաքիմիա',
        summary: 'Կենսաբանության և քիմիայի ուսումնասիրություն',
        desc: 'Այս ուղղությունը կենտրոնանում է կենդանի օրգանիզմների և նյութերի քիմիական կառուցվածքի հետազոտման վրա։ Հիանալի հիմք է բժշկական կրթության համար։',
        features: ['Գենետիկա', 'Օրգանական Քիմիա', 'Լաբորատորիա'],
        stats: 'Future Medics',
        img: 'images/stream_biochem.png',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 2v7.31"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>`
    }
];

function populateStreams() {
    const grid = document.getElementById('streams-grid');
    if (!grid) return;

    grid.innerHTML = streamsData.map((s, index) => `
        <div class="glass-card-max" onclick="openPortal('${s.id}')">
            <div class="card-bg-subtle">
                <img src="${s.img}" alt="${s.title}">
            </div>
            <div class="card-content-max">
                <span class="card-tag">ՀՈՍՔ ${index + 1}</span>
                <h3 class="serif">${s.title}</h3>
                <p>${s.summary}</p>
            </div>
        </div>
    `).join('');
}

function openPortal(id) {
    const stream = streamsData.find(x => x.id === id);
    const modal = document.getElementById('portal-modal');
    const body = document.getElementById('portal-body');

    // Close button now INSIDE the frame
    body.innerHTML = `
        <button id="portal-close-internal" class="portal-close-max" onclick="closePortal()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        
        <div class="portal-visual-max">
            <img src="${stream.img}" alt="${stream.title}">
        </div>
        <div class="portal-content-max">
            <div style="margin-bottom: 50px;">
                <span class="card-tag" style="color: var(--accent-sapphire);">ՊԱՇՏՈՆԱԿԱՆ ՈՒՍՈՒՄՆԱԿԱՆ ՊՐՈՖԻԼ</span>
                <h2 class="serif">${stream.title}</h2>
                <div style="width: 60px; height: 3px; background: var(--accent-sapphire); margin: 20px 0 30px;"></div>
            </div>

            <p style="font-size: 1.15rem; color: var(--text-muted); margin-bottom: 50px; line-height: 1.8; font-weight: 300;">
                ${stream.summary}
                <br><br>
                ${stream.desc}
            </p>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--silk-border); padding: 40px; border-radius: 30px;">
                <h4 style="font-size: 0.8rem; letter-spacing: 4px; color: var(--text-pure); margin-bottom: 25px; text-transform: uppercase; font-weight: 800;">Մասնագիտացված Ուսումնական Ծրագիր</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                    ${stream.features.map(f => `
                        <span style="background: rgba(255,255,255,0.03); border: 1px solid var(--silk-border); padding: 12px 28px; border-radius: 100px; font-size: 0.85rem; color: var(--text-pure); font-weight: 600; transition: 0.3s;" onmouseover="this.style.borderColor='var(--accent-sapphire)'" onmouseout="this.style.borderColor='var(--silk-border)'">${f}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePortal() {
    const modal = document.getElementById('portal-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}


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

// Global click to close modals
window.onclick = (e) => {
    if (e.target.id === 'portal-modal') closePortal();
    if (e.target.id === 'wiki-modal') closeWiki();
    if (e.target.id === 'news-modal') closeNews();
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePortal();
        if (typeof closeWiki === 'function') closeWiki();
        if (typeof closeNews === 'function') closeNews();
    }
});

