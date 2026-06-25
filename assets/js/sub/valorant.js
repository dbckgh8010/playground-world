const agentAll = [
    {name: '게코', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_gaeko.webp'},
    {name: '네온', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_neon.webp'},
    {name: '데드록', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_deadlock.webp'},
    {name: '레이나', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_reyna.webp'},
    {name: '레이즈', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_raze.webp'},
    {name: '믹스', role:'controller', img: 'assets/img/sub/valorant/agent/agent_mix.webp'},
    {name: '바이스', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_vise.webp'},
    {name: '바이퍼', role:'controller', img: 'assets/img/sub/valorant/agent/agent_viper.webp'},
    {name: '브리치', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_breach.webp'},
    {name: '브림스톤', role:'controller', img: 'assets/img/sub/valorant/agent/agent_brimstone.webp'},
    {name: '비토', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_vito.webp'},
    {name: '사이퍼', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_cyper.webp'},
    {name: '세이지', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_sage.webp'},
    {name: '소바', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_sova.webp'},
    {name: '스카이', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_sky.webp'},
    {name: '아스트라', role:'controller', img: 'assets/img/sub/valorant/agent/agent_astra.webp'},
    {name: '아이소', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_iso.webp'},
    {name: '오멘', role:'controller', img: 'assets/img/sub/valorant/agent/agent_omen.webp'},
    {name: '요루', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_yoru.webp'},
    {name: '웨이레이', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_wayray.webp'},
    {name: '제트', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_jett.webp'},
    {name: '체임버', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_chamber.webp'},
    {name: '케이오', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_ko.webp'},
    {name: '클로브', role:'controller', img: 'assets/img/sub/valorant/agent/agent_clove.webp'},
    {name: '킬조이', role:'sentinel', img: 'assets/img/sub/valorant/agent/agent_killjoy.webp'},
    {name: '테호', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_teaho.webp'},
    {name: '페이드', role:'initiaor', img: 'assets/img/sub/valorant/agent/agent_fade.webp'},
    {name: '피닉스', role:'duelist', img: 'assets/img/sub/valorant/agent/agent_phinix.webp'},
    {name: '하버', role:'controller', img: 'assets/img/sub/valorant/agent/agent_harvor.webp'}
]

const roleButtons = document.querySelectorAll('.valorant__role-tab button');
const rouletteList = document.querySelector('.valorant__roulette-list');
const spinBtn = document.querySelector('.spin-btn');

let isSpinning = false;  
const ITEM_WIDTH = 1000;
let currentRouletteData = []; 

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function createRoulette(role) {
    const filteredAgents = role === 'all' 
        ? agentAll 
        : agentAll.filter(agent => agent.role === role);
    
    if (filteredAgents.length === 0) return;

    const shuffled = shuffle(filteredAgents);

    const renderAgents = [
        ...shuffled, ...shuffled, ...shuffled, ...shuffled, 
        ...shuffled, ...shuffled, ...shuffled, ...shuffled
    ];

    rouletteList.innerHTML = '';
    rouletteList.style.transition = 'none'; 
    rouletteList.style.transform = 'translateX(0)';

    renderAgents.forEach(agent => {
        const li = document.createElement('li');
        li.classList.add('valorant__agent-item');
        li.innerHTML = `
            <img src="${agent.img}" alt="${agent.name}">
            <span>${agent.name}</span>
        `;
        rouletteList.appendChild(li);
    });
    currentRouletteData = renderAgents; 
}

spinBtn.addEventListener('click', () => {
    if (isSpinning) return;
    if (currentRouletteData.length === 0) return;
    
    isSpinning = true;

    // 1. 현재 화면에 렌더링된 부모 박스와 요원 칸의 실제 크기를 가져옵니다.
    const rouletteBox = document.querySelector('.valorant__roulette-box');
    const currentItem = document.querySelector('.valorant__agent-item');
    
    const boxWidth = rouletteBox ? rouletteBox.getBoundingClientRect().width : 1000;
    const dynamicWidth = currentItem ? currentItem.getBoundingClientRect().width : 1000;

    const targetIndex = 20; 
    const winner = currentRouletteData[targetIndex];

    // 2. ★ [중앙 정렬 보정 공식]
    // 원래 이동해야 할 거리에서 (부모 박스 절반 - 요원 칸 절반)만큼의 오차를 빼줍니다.
    const boxCenterOffset = (boxWidth / 2) - (dynamicWidth / 2);
    const moveX = (targetIndex * dynamicWidth) - boxCenterOffset;

    console.log("보정 공식이 반영된 최종 가로 거리:", moveX);

    // 3. 애니메이션 연출 구동
    rouletteList.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.2, 1)';
    rouletteList.style.transform = `translateX(-${moveX}px)`;

    // 후속 리셋 로직은 기존과 동일...
    setTimeout(() => {
        alert(`🎉 당첨된 요원: ${winner.name}`);
        rouletteList.style.transition = 'none';
        rouletteList.style.transform = 'translateX(0)';
        
        const activeRole = document.querySelector('.valorant__role-tab button.is-active')?.dataset.role || 'all';
        createRoulette(activeRole);
        isSpinning = false;
    }, 4100);
});

roleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (isSpinning) return;  
        roleButtons.forEach(btn => btn.classList.remove('is-active'));
        e.target.classList.add('is-active');
        const role = e.target.dataset.role;
        createRoulette(role);
    });
});
createRoulette('all');