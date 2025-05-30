// JSON Data
const standingsData = [
    { rank: 1, team: "AANSLAG SQUAD", matches: 2, wins: 4, losses: 1, pts: "1", points: 4 },
    { rank: 2, team: "VALOR HEXA SQUAD", matches: 2, wins: 4, losses: 1, pts: "2", points: 4 },
    { rank: 3, team: "BASTARD SQUAD", matches: 2, wins: 1, losses: 4, pts: "3", points: 1 },
    { rank: 4, team: "BAJIR SQUAD", matches: 2, wins: 1, losses: 4, pts: "4", points: 1 }
    ];

const topPlayersData = [
    { player: "Player", team: "SQUAD", kills: 0, deaths: 0, assists: 0, kda: 0, hero: "HERO", heroImg: "https://i.ibb.co/9W1JX9P/arlott.png", role: "Exp" },
    { player: "Player", team: "SQUAD", kills: 0, deaths: 0, assists: 0, kda: 0, hero: "HERO", heroImg: "https://i.ibb.co/6YF3cKp/ling.png", role: "Jungle" },
    { player: "Player", team: "SQUAD", kills: 0, deaths: 0, assists: 0, kda: 0, hero: "HERO", heroImg: "https://i.ibb.co/85PBgZ4/valentina.png", role: "Mid" },
    { player: "Player", team: "SQUAD", kills: 0, deaths: 0, assists: 0, kda: 0, hero: "HERO", heroImg: "https://i.ibb.co/MZc7JnY/atlas.png", role: "Roam" }
];

const playerStatsData = [
    { player: "Asrofi", team: "BAJIR SQUAD", kills: 9, deaths: 25, assists: 24, kda: 0, hero: "HERO" },
    { player: "sunflowers", team: "BAJIR SQUAD", kills: 7, deaths: 12, assists: 19, kda: 0, hero: "HERO" },
    { player: "paitua ternate", team: "BAJIR SQUAD", kills: 6, deaths: 17, assists: 17, kda: 0, hero: "HERO" },
    { player: "Peli Gedi", team: "BAJIR SQUAD", kills: 17, deaths: 13, assists: 17, kda: 0, hero: "HERO" },
    { player: "jj@44", team: "BAJIR SQUAD", kills: 14, deaths: 7, assists: 17, kda: 0, hero: "HERO" },
    { player: "davis", team: "AANSLAG SQUAD", kills: 9, deaths: 8, assists: 18, kda: 0, hero: "HERO" },
    { player: "JTfast", team: "AANSLAG SQUAD", kills: 23, deaths: 17, assists: 33, kda: 0, hero: "HERO" },
    { player: "VJEST", team: "AANSLAG SQUAD", kills: 5, deaths: 7, assists: 27, kda: 0, hero: "HERO" },
    { player: "Feurmooninho", team: "AANSLAG SQUAD", kills: 26, deaths: 8, assists: 11, kda: 0, hero: "HERO" },
    { player: "Yudzz", team: "AANSLAG SQUAD", kills: 11, deaths: 14, assists: 44, kda: 0, hero: "HERO" },
    { player: "Aveiro", team: "AANSLAG SQUAD", kills: 8, deaths: 1, assists: 13, kda: 0, hero: "HERO" },
    { player: "FIQRAM CARRY US", team: "BASTARD SQUAD", kills: 36, deaths: 18, assists: 24, kda: 0, hero: "HERO" },
    { player: "Arkaaa", team: "BASTARD SQUAD", kills: 12, deaths: 11, assists: 45, kda: 0, hero: "HERO" },
    { player: "TALIBAN07", team: "BASTARD SQUAD", kills: 10, deaths: 20, assists: 22, kda: 0, hero: "HERO" },
    { player: "El Chapo", team: "BASTARD SQUAD", kills: 13, deaths: 11, assists: 29, kda: 0, hero: "HERO" },
    { player: "SL4B3R", team: "BASTARD SQUAD", kills: 3, deaths: 20, assists: 40, kda: 0, hero: "HERO" },
    { player: "zetsu", team: "VALOR HEXA SQUAD", kills: 16, deaths: 14, assists: 45, kda: 0, hero: "HERO" },
    { player: "Zanzzz", team: "VALOR HEXA SQUAD", kills: 14, deaths: 14, assists: 42, kda: 0, hero: "HERO" },
    { player: "FIDHEL", team: "VALOR HEXA SQUAD", kills: 20, deaths: 15, assists: 25, kda: 0, hero: "HERO" },
    { player: "silaban", team: "VALOR HEXA SQUAD", kills: 0, deaths: 0, assists: 0, kda: 0, hero: "HERO" },
    { player: "AKAZA", team: "VALOR HEXA SQUAD", kills: 16, deaths: 10, assists: 45, kda: 0, hero: "HERO" }
];

// Load Standings Data
function loadStandingsData() {
    const standingsContainer = document.querySelector('.standings-container');
    standingsContainer.innerHTML = '';
    
    standingsData.forEach(team => {
        const teamRow = document.createElement('div');
        teamRow.className = 'grid grid-cols-12 p-4 border-b border-[#6A0DAD]/20 hover:bg-[#3A3A3A]/50 transition-colors';
        
        const rankClass = team.rank === 1 ? 'text-[#FFD700] font-bold' : 'text-[#F8F8F8]';
        const teamClass = team.rank === 1 ? 'font-bold' : '';
        
        teamRow.innerHTML = `
            <div class="col-span-1 text-center digital-font ${rankClass}">${team.rank}</div>
            <div class="col-span-5 flex items-center ${teamClass}">
                <img src="${getTeamImage(team.team)}" alt="${team.team}" class="w-8 h-8 mr-2 rounded-full">
                <span class="subtitle-font">${team.team}</span>
            </div>
            <div class="col-span-1 text-center digital-font ${teamClass}">${team.matches}</div>
            <div class="col-span-1 text-center digital-font ${teamClass}">${team.wins}</div>
            <div class="col-span-1 text-center digital-font ${teamClass}">${team.losses}</div>
            <div class="col-span-1 text-center digital-font ${teamClass}">${team.pts}</div>
            <div class="col-span-2 text-center digital-font ${rankClass}">${team.points}</div>
        `;
        
        standingsContainer.appendChild(teamRow);
    });
}

function getTeamImage(teamName) {
    const images = {
        "BAJIR SQUAD": "https://i.ibb.co/C5JQXrS/dragon-logo.png",
        "AANSLAG SQUAD": "https://i.ibb.co/qBRyH5H/gladiator-logo.png",
        "BASTARD SQUAD": "https://i.ibb.co/d0x3M3Q/celestial-logo.png",
        "VALOR HEXA SQUAD": "https://i.ibb.co/fH2x2pK/titan-logo.png"
    };
    return images[teamName];
}

// Load Top Players
function loadTopPlayers() {
    const topPlayersContainer = document.querySelector('#stats .grid.grid-cols-1.md\\:grid-cols-4.gap-6');
    topPlayersContainer.innerHTML = '';
    
    topPlayersData.forEach((player, index) => {
        const delayClasses = ['delay-0', 'delay-1', 'delay-2', 'delay-3'];
        
        const playerCard = document.createElement('div');
        playerCard.className = `card-glass rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#6A0DAD]/30 float-animation ${delayClasses[index]}`;
        
        playerCard.innerHTML = `
            <div class="flex justify-center -mt-12 mb-4 relative">
                <img src="https://i.ibb.co/1nZJfQX/mlbb-avatar.png" alt="Player" class="w-24 h-24 rounded-full border-4 border-[#6A0DAD] bg-[#2C2C2C]">
                <div class="absolute -bottom-2 bg-[#FFD700] text-[#2C2C2C] px-3 py-1 rounded-full text-xs font-bold subtitle-font">#${index + 1}</div>
            </div>
            <h4 class="text-lg font-bold text-[#FFD700] mb-1 title-font">${player.player}</h4>
            <p class="text-sm text-[#F8F8F8] mb-3 subtitle-font">${player.team}</p>
            <div class="flex justify-center mb-4">
                <img src="${player.heroImg}" alt="${player.hero}" class="w-12 h-12 rounded-full">
                <div class="ml-2 text-left">
                    <p class="text-xs text-[#FFD700] subtitle-font">BEST HERO</p>
                    <p class="text-sm text-[#F8F8F8] -mt-1 title-font">${player.hero}</p>
                    <p class="text-xs text-[#F8F8F8]">${player.role}</p>
                </div>
            </div>
            <div class="bg-[#3A3A3A]/50 rounded-lg p-2">
                <p class="text-sm text-[#FFD700] digital-font">KDA ${player.kda.toFixed(2)}</p>
                <div class="grid grid-cols-3 gap-2 text-xs text-[#F8F8F8]">
                    <div>
                        <p class="font-bold">${player.kills}</p>
                        <p>KILLS</p>
                    </div>
                    <div>
                        <p class="font-bold">${player.deaths}</p>
                        <p>DEATHS</p>
                    </div>
                    <div>
                        <p class="font-bold">${player.assists}</p>
                        <p>ASSISTS</p>
                    </div>
                </div>
            </div>
        `;
        
        topPlayersContainer.appendChild(playerCard);
    });
}

// Load Player Stats
function loadPlayerStats() {
    const playerStatsContainer = document.querySelector('.player-stats-container');
    playerStatsContainer.innerHTML = '';
    
    playerStatsData.forEach((player, index) => {
        const kdaPercentage = Math.min(100, Math.max(0, (player.kda / 5) * 100));
        
        const playerRow = document.createElement('div');
        playerRow.className = 'grid grid-cols-12 p-4 border-b border-[#6A0DAD]/20 hover:bg-[#3A3A3A]/50 transition-colors';
        
        playerRow.innerHTML = `
            <div class="col-span-3 flex items-center" data-label="Player">
                <img src="https://i.ibb.co/1nZJfQX/mlbb-avatar.png" alt="${player.player}" class="w-8 h-8 rounded-full mr-2">
                <span class="subtitle-font">${player.player}</span>
            </div>
            <div class="col-span-2 flex items-center" data-label="Team">
                <img src="${getTeamImage(player.team)}" alt="${player.team}" class="w-6 h-6 rounded-full mr-2">
                <span class="text-sm subtitle-font">${player.team}</span>
            </div>
            <div class="col-span-1 text-center digital-font" data-label="Kill">${player.kills}</div>
            <div class="col-span-1 text-center digital-font" data-label="Death">${player.deaths}</div>
            <div class="col-span-1 text-center digital-font" data-label="Assist">${player.assists}</div>
            <div class="col-span-1 text-center digital-font font-bold ${player.kda > 3 ? 'text-[#FFD700]' : ''}" data-label="KDA">${player.kda.toFixed(2)}</div>
            <div class="col-span-3 flex items-center justify-center" data-label="Best Hero">
                <div class="w-3/4">
                    <div class="stats-bar" style="width: ${kdaPercentage}%">${player.kda.toFixed(2)}</div>
                </div>
                <img src="${getHeroImage(player.hero)}" alt="${player.hero}" class="w-8 h-8 rounded-full ml-2">
            </div>
        `;
        
        playerStatsContainer.appendChild(playerRow);
    });
}

function getHeroImage(heroName) {
    const heroImages = {
        "HERO": "https://i.ibb.co/9W1JX9P/arlott.png",
        "HERO": "https://i.ibb.co/6YF3cKp/ling.png",
        "HERO": "https://i.ibb.co/85PBgZ4/valentina.png",
        "HERO": "https://i.ibb.co/m9QHqYY/lancelot.png",
        "HERO": "https://i.ibb.co/PZ7hNQK/kagura.png",
        "HERO": "https://i.ibb.co/Np4R2YR/balmond.png",
        "HERO": "https://i.ibb.co/F0XjW8n/grock.png",
        "HERO": "https://i.ibb.co/MZc7JnY/atlas.png",
        "HERO": "https://i.ibb.co/CtMhY5b/diggie.png",
        "HERO": "https://i.ibb.co/Zfm8NQc/bruno.png"
    };
    return heroImages[heroName];
}

// Initialize mobile menu
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    // Toggle mobile menu visibility
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuButton.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Initialize animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.team-card, .card-glass').forEach(card => {
        observer.observe(card);
    });
}

// Initialize table scroll indicators
function initTableScrollIndicators() {
    // Gunakan selector yang benar dengan escape karakter yang tepat
    const tableContainers = document.querySelectorAll('#standings .bg-\\[\\#3A3A3A\\]\\/50, #stats .bg-\\[\\#3A3A3A\\]\\/50');
    
    tableContainers.forEach(container => {
        // Check if scroll is needed
        const checkScrollable = () => {
            if (container.scrollWidth > container.clientWidth) {
                container.classList.add('scrollable');
                // Tambahkan class untuk menunjukkan bahwa tabel dapat di-scroll
                container.classList.add('table-scrollable');
            } else {
                container.classList.remove('scrollable');
                container.classList.remove('table-scrollable');
            }
        };
        
        // Initial check
        checkScrollable();
        
        // Check on resize
        window.addEventListener('resize', checkScrollable);
        
        // Hide indicator when scrolled to the end
        container.addEventListener('scroll', function() {
            const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
            if (isAtEnd) {
                container.classList.add('scrolled-end');
            } else {
                container.classList.remove('scrolled-end');
            }
        });
        
        // Tambahkan animasi pulse pada indikator scroll untuk menarik perhatian
        setTimeout(() => {
            if (container.classList.contains('scrollable')) {
                const indicator = container.querySelector('::after');
                if (indicator) {
                    indicator.style.animation = 'pulse 2s infinite';
                }
            }
        }, 1000);
        
        // Implementasi drag-to-scroll untuk pengalaman mobile yang lebih baik
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            if (container.classList.contains('scrollable')) {
                isDown = true;
                container.classList.add('active');
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            }
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('active');
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('active');
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Kecepatan scroll
            container.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        container.addEventListener('touchstart', (e) => {
            if (container.classList.contains('scrollable')) {
                isDown = true;
                container.classList.add('active');
                startX = e.touches[0].pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            }
        });

        container.addEventListener('touchend', () => {
            isDown = false;
            container.classList.remove('active');
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
}

// Page Load
document.addEventListener('DOMContentLoaded', function() {
    loadStandingsData();
    loadTopPlayers();
    loadPlayerStats();
    initMobileMenu();
    initSmoothScrolling();
    initAnimations();
    initTableScrollIndicators();
    
    // Add style for fade-in animation and table scroll indicators
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
        }
        
        @keyframes pulse {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
        }
        
        /* Tambahkan gaya untuk tabel yang dapat di-scroll */
        .table-scrollable {
            position: relative;
            cursor: grab;
        }
        
        .table-scrollable:active {
            cursor: grabbing;
        }
        
        /* Hide scroll indicator when not needed or at end */
        #standings .bg-\\[\\#3A3A3A\\]\\/50:not(.scrollable)::after,
        #stats .bg-\\[\\#3A3A3A\\]\\/50:not(.scrollable)::after,
        #standings .bg-\\[\\#3A3A3A\\]\\/50.scrolled-end::after,
        #stats .bg-\\[\\#3A3A3A\\]\\/50.scrolled-end::after {
            display: none;
        }
        
        /* Tambahkan gaya untuk indikator scroll yang lebih mencolok pada mobile */
        @media (max-width: 480px) {
            #standings .bg-\\[\\#3A3A3A\\]\\/50::after,
            #stats .bg-\\[\\#3A3A3A\\]\\/50::after {
                font-size: 0.9rem;
                padding: 10px;
                background-color: rgba(44, 44, 44, 0.9);
                border-top: 1px solid var(--gold);
                animation: pulse 2s infinite;
            }
        }
    `;
    document.head.appendChild(style);
});
