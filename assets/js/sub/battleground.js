const weapons = [
    {
        name: 'ace32',
        type: 'AR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/AR/weapons-ace32.webp'
    },
    {
        name: 'aug_a3',
        type: 'AR',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/AR/weapons-aug_a3.webp'
    },
    {
        name: 'm416',
        type: 'AR',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/AR/weapons-m416.webp'
    },
    {
        name: 'beryl_m762',
        type: 'AR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/AR/weapons-beryl_m762.webp'
    },
    {
        name: 'm16a4',
        type: 'AR',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/AR/weapons-m16a4.webp'
    },
    {
        name: 'akm',
        type: 'AR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/AR/weapons-akm.webp'
    },
    {
        name: 'mk47_mutant',
        type: 'AR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/AR/weapons-mk47_mutant.webp'
    },
    {
        name: 'scar-l',
        type: 'AR',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/AR/weapons-scar-l.webp'
    },
    {
        name: 'dragunov',
        type: 'DMR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/DMR/weapons-dragunov.webp'
    },
    {
        name: 'mini14',
        type: 'DMR',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/DMR/weapons-mini14.webp'
    },
    {
        name: 'mk12',
        type: 'DMR',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/DMR/weapons-mk12.webp'
    },
    {
        name: 'sks',
        type: 'DMR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/DMR/weapons-sks.webp'
    },
    {
        name: 'SLR',
        type: 'DMR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/DMR/weapons-slr.webp'
    },
    {
        name: 'm249',
        type: 'LMG',
        ammo: '5.56',
        img: 'assets/img/sub/battleground/shared/etc/weapons-m249.webp'
    },
    {
        name: 'dp28',
        type: 'LMG',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/etc/weapons-dp28.webp'
    },
    {
        name: 'crossbow',
        type: 'ETC',
        ammo: 'Arrow',
        img: 'assets/img/sub/battleground/shared/etc/weapons-crossbow.webp'
    },
    {
        name: 'VSS',
        type: 'DMR',
        ammo: '9',
        img: 'assets/img/sub/battleground/shared/etc/weapons-vss.webp'
    },
    {
        name: 'win94',
        type: 'SR',
        ammo: '45',
        img: 'assets/img/sub/battleground/shared/etc/weapons-win94.webp'
    },
    {
        name: 's12k',
        type: 'SG',
        ammo: '12',
        img: 'assets/img/sub/battleground/shared/SG/weapons-s12k.webp'
    },
    {
        name: 's686',
        type: 'SG',
        ammo: '12',
        img: 'assets/img/sub/battleground/shared/SG/weapons-s686.webp'
    },
    {
        name: 's1897',
        type: 'SG',
        ammo: '12',
        img: 'assets/img/sub/battleground/shared/SG/weapons-s1897.webp'
    },
    {
        name: 'micro_uzi',
        type: 'SMG',
        ammo: '9',
        img: 'assets/img/sub/battleground/shared/SMG/weapons-micro_uzi.webp'
    },
    {
        name: 'mp5k',
        type: 'SMG',
        ammo: '9',
        img: 'assets/img/sub/battleground/shared/SMG/weapons-mp5k.webp'
    },
    {
        name: 'tommy_gun',
        type: 'SMG',
        ammo: '45',
        img: 'assets/img/sub/battleground/shared/SMG/weapons-tommy_gun.webp'
    },
    {
        name: 'ump45',
        type: 'SMG',
        ammo: '9',
        img: 'assets/img/sub/battleground/shared/SMG/weapons-ump45.webp'
    },
    {
        name: 'vector',
        type: 'SMG',
        ammo: '9',
        img: 'assets/img/sub/battleground/shared/SMG/weapons-vector.webp'
    },
    {
        name: 'kar98k',
        type: 'SR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/SR/weapons-kar98k.webp'
    },
    {
        name: 'm24',
        type: 'SR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/SR/weapons-m24.webp'
    },
    {
        name: 'mosin_nagant',
        type: 'SR',
        ammo: '7.62',
        img: 'assets/img/sub/battleground/shared/SR/weapons-mosin_nagant.webp'
    },
]

const bans = [
    '차량금지',
    'AR 금지',
    'DMR 금지',
    'SMG 금지',
    'SG 금지',
    'SR 금지',
    'UI 끄기',
    '파츠장착 금지',
    '3LV 금지',
    '6배 이상 금지',
    '도트 사용금지',
    '5.56mm 금지',
    '7.62mm',
    '9mm 금지',
]


const primaryList = document.querySelector(".item-primary .roulette-list");
const secondList = document.querySelector(".item-second .roulette-list");
const banList = document.querySelector(".item-ban .roulette-ban");
const rouletteBtn = document.querySelector(".roulette-btn");
let isRolling = false;
const itemHeight = 300;

function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
const shuffledWeapons = shuffle(weapons);
const shuffledBans = shuffle(bans);


const renderWeapons = [...shuffledWeapons, ...shuffledWeapons, ...shuffledWeapons, ...shuffledWeapons, ...shuffledWeapons, ...shuffledWeapons]
let weaponHtml = '';
renderWeapons.forEach(weapon => {
    weaponHtml += `
        <div class="roulette-item">
            <span class="weapon-name">${weapon.name}</span>
            <div class="weapon-img">
                <img src="${weapon.img}" alt="${weapon.name}">
            </div>
        </div>
    `;
});
primaryList.innerHTML = weaponHtml;
secondList.innerHTML = weaponHtml;

const renderBans = [...shuffledBans, ...shuffledBans, ...shuffledBans, ...shuffledBans, ...shuffledBans, ...shuffledBans, ...shuffledBans, ...shuffledBans,] 
let banHtml = '';
renderBans.forEach(ban => {
    banHtml += `
        <div class="roulette-item ban-item">
            <span class="ban-name">${ban}</span>
        </div>
    `;
});
banList.innerHTML = banHtml;

rouletteBtn.addEventListener('click', () => {
    if (isRolling) return; 
    isRolling = true;

    const currentItem = document.querySelector(".roulette-item");
    const itemHeight = currentItem ? currentItem.offsetHeight : 300;

    banList.style.transition = 'none';
    primaryList.style.transition = 'none'; 
    secondList.style.transition = 'none';
    
    banList.style.transform = 'translateY(0)';
    primaryList.style.transform = 'translateY(0)';
    secondList.style.transform = 'translateY(0)';

    primaryList.innerHTML = weaponHtml; 
    secondList.innerHTML = weaponHtml;
    banList.innerHTML = banHtml; 

    void banList.offsetHeight;
    void primaryList.offsetHeight; 
    void secondList.offsetHeight;

    banList.style.transition = 'transform 7s cubic-bezier(.15, .85, .1, 1)';
    primaryList.style.transition = 'transform 5s cubic-bezier(.15, .85, .1, 1)';
    secondList.style.transition = 'transform 5s cubic-bezier(.15, .85, .1, 1)';

    const banWinnerIndex = Math.floor(Math.random() * shuffledBans.length);
    const selecteBan = shuffledBans[banWinnerIndex];
    const banType = selecteBan.split(' ')[0]; 

    const banTargetY = Math.floor((shuffledBans.length * 4 + banWinnerIndex) * itemHeight);

    banList.style.transform = `translateY(-${banTargetY}px)`; 

    setTimeout(() => {

        const filteredWeapons = weapons.filter(weapon => {return weapon.type !== banType && weapon.ammo !== banType;});
        const shuffledFiltered = shuffle(filteredWeapons);
        const renderFilteredWeapons = [
            ...shuffledFiltered, ...shuffledFiltered, ...shuffledFiltered, ...shuffledFiltered, ...shuffledFiltered
        ];

        primaryList.style.transition = 'none';
        secondList.style.transition = 'none';
        primaryList.style.transform = 'translateY(0)';
        secondList.style.transform = 'translateY(0)';

        let filteredWeaponHtml = '';
        renderFilteredWeapons.forEach(weapon => {
            filteredWeaponHtml += `
                <div class="roulette-item">
                    <span class="weapon-name">${weapon.name}</span>
                    <div class="weapon-img">
                        <img src="${weapon.img}" alt="${weapon.name}">
                    </div>
                </div>
            `;
        });
        primaryList.innerHTML = filteredWeaponHtml;
        secondList.innerHTML = filteredWeaponHtml;

        void primaryList.offsetHeight;
        void secondList.offsetHeight;

        primaryList.style.transition = 'transform 5s cubic-bezier(.15, .85, .1, 1)';
        secondList.style.transition = 'transform 5s cubic-bezier(.15, .85, .1, 1)';

        const primaryWinnerIndex = Math.floor(Math.random() * shuffledFiltered.length);
        const secondWinnerIndex = Math.floor(Math.random() * shuffledFiltered.length);

        const primaryTargetY = Math.floor((shuffledFiltered.length * 4 + primaryWinnerIndex) * itemHeight);
        const secondTargetY = Math.floor((shuffledFiltered.length * 4 + secondWinnerIndex) * itemHeight);

        primaryList.style.transform = `translateY(-${primaryTargetY}px)`;
        setTimeout(() => {
            secondList.style.transform = `translateY(-${secondTargetY}px)`;
        }, 3000);
        setTimeout(() => {
            isRolling = false; 
        }, 6100);
    }, 8000);
});

const tabBtns = document.querySelectorAll(".pubg__tab-btn");
const contentBoxs = document.querySelectorAll(".pubg__panel");

tabBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (typeof isRolling !== 'undefined' && isRolling) {
            alert('룰렛이 돌아가는 중에는 탭을 변경할 수 없습니다!');
            return;
        }
        tabBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll(".pubg__tab-item").forEach(li => li.classList.remove('active'));
        button.classList.add('active');
        const tabLi = button.closest(".pubg__tab-item");
        if (tabLi) {
            tabLi.classList.add('active');
        }
        const targetTabId = button.getAttribute('data-tab');
        contentBoxs.forEach(box => box.classList.remove('active'));
        const targetBox = document.getElementById(targetTabId);
        if (targetBox) {
            targetBox.classList.add('active');
        }
    });
});

const bingoTabBtns = document.querySelectorAll(".bingo__item-btn");
const bingoBoxs = document.querySelectorAll(".bingo-board");

bingoTabBtns.forEach(button => {
    button.addEventListener('click', () => {
        bingoTabBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll(".bingo__item").forEach(li => li.classList.remove('active'));
        button.classList.add('active');
        const bingoTab = button.closest(".bingo__item");
        if (bingoTab) {
            bingoTab.classList.add('active');
        }
        const targetTabId = button.getAttribute('data-tab');
        bingoBoxs.forEach(box => box.classList.remove('active'));
        const targetBox = document.getElementById(targetTabId);
        if (targetBox) {
            targetBox.classList.add('active');
        }
    });
});

function getRandomNumbers(count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

// 빙고판 초기화 및 이벤트 연결 함수
function initBingoBoards() {
    const boards = document.querySelectorAll('.bingo-board');

    boards.forEach(board => {
        const items = board.querySelectorAll('.bingo-item');
        const itemCount = items.length;
        const randomNumbers = getRandomNumbers(itemCount);

        // 1. 각 칸에 랜덤 숫자 부여
        items.forEach((item, index) => {
            const span = item.querySelector('span');
            if (span) {
                span.textContent = randomNumbers[index];
            }
        });

        // 2. 이벤트 위임(Event Delegation)을 이용한 클릭 이벤트 등록
        board.addEventListener('click', (e) => {
            // 클릭된 요소에서 가장 가까운 .bingo-item 버튼을 찾음
            const targetButton = e.target.closest('.bingo-item');
            
            // 빙고판 내부의 버튼이 클릭된 게 아니라면 무시
            if (!targetButton) return;

            // 'is-active' 클래스를 토글 (있으면 제거, 없으면 추가)
            // 만약 한번 누르면 취소가 안 되게 하고 싶다면 toggle 대신 add를 사용하세요.
            targetButton.classList.toggle('is-active');
        });
    });
}

// 페이지 로드 완료 시 실행
window.addEventListener('DOMContentLoaded', initBingoBoards);

const mapBtns = document.querySelectorAll(".map-btn");
const mapBoxs = document.querySelectorAll(".map__img-item");

mapBtns.forEach(button => {
    button.addEventListener('click', () => {
        mapBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll(".map-item").forEach(li => li.classList.remove('active'));
        button.classList.add('active');
        const mapTab = button.closest(".map-item");
        if (mapTab) {
            mapTab.classList.add('active');
        }
        const targetTabId = button.getAttribute('data-tab');
        mapBoxs.forEach(box => box.classList.remove('active'));
        const targetBox = document.getElementById(targetTabId);
        if (targetBox) {
            targetBox.classList.add('active');
        }
    });
});