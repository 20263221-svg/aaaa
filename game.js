// ==================== GAME DATA ====================
const STAGES = [
    {
        id: 1,
        title: '거실 풍경',
        subtitle: '평범한 거실에 전쟁의 그림자가 드리워졌습니다.',
        differences: [
            {
                id: 'tv',
                label: '텔레비전',
                titleText: '해외여행 자제',
                description: '인도 등은 에너지 위기에 대응해 보유 외환 확충을 위해 금 구매 및 해외여행을 자제해 달라고 촉구했다.',
                x: 62, y: 20, w: 30, h: 30
            },
            {
                id: 'gas',
                label: '주유소 가격',
                titleText: '유가 상승',
                description: '호르무즈 해협의 봉쇄 등으로 인해 국제 유가가 크게 치솟았다.',
                x: 5, y: 8, w: 30, h: 42
            },
            {
                id: 'newspaper',
                label: '신문',
                titleText: '생필품 부족',
                description: '에너지 수입 의존도가 높은 개발도상국들의 경우, 연료 부족이 물류 마비로 이어져 마트나 시장에서 생필품과 식료품을 구하기가 어려워졌다.',
                x: 38, y: 78, w: 24, h: 14
            },
            {
                id: 'bill',
                label: '전기료 고지서',
                titleText: '전기세 상승',
                description: '화석 연료 의존도가 높은 국가들을 중심으로 전력 단가가 급상승하여 가정의 전기요금 부담이 커졌다.',
                x: 55, y: 62, w: 20, h: 20
            },
            {
                id: 'calendar',
                label: '달력',
                titleText: '주 4일제',
                description: '필리핀, 파키스탄 등의 국가에서는 에너지 소비를 줄이기 위해 공무원들을 대상으로 주 4일제 근무를 실시하고 있다.',
                x: 80, y: 5, w: 14, h: 22
            }
        ]
    },
    {
        id: 2,
        title: '책상 위 풍경',
        subtitle: '사무실 책상 위에도 전쟁과 환경의 영향이 있습니다.',
        differences: [
            {
                id: 'monitor',
                label: '컴퓨터 모니터',
                titleText: '생산형 ai 사용 자제',
                description: '생산형 ai 사용에 엄청난 냉각수가 사용된다.',
                x: 30, y: 10, w: 40, h: 45
            },
            {
                id: 'drink',
                label: '음료',
                titleText: '커피 줄이고 채식하기',
                description: '가축이 방출하는 온실가스 절감, 커피 재배 이후 토양이 삭막해지는 현상을 방지하기 위함이다.',
                x: 70, y: 65, w: 10, h: 15
            },
            {
                id: 'sky',
                label: '하늘',
                titleText: '이산화 탄소를 회수하여 메탄올을 합성함',
                description: '이산화탄소를 줄이는 동시에 새로운 자원 창출<br>삼림 복원-살아있는 식물과 토양은 탄소를 저장하는 역할을 한다.',
                x: 5, y: 5, w: 25, h: 30
            },
            {
                id: 'sea',
                label: '바다',
                titleText: '해양을 이용한 탄소 제거',
                description: '식물 플랑크톤과 해조류, 산호와 같은 해양생물이 광합성을 통해 이산화탄소를 흡수한다.',
                x: 5, y: 35, w: 25, h: 25
            }
        ]
    },
    {
        id: 3,
        title: '마을 풍경',
        subtitle: '자연과 동물, 사람들의 생활 터전 또한 위협받고 있습니다.',
        differences: [
            {
                id: 'cow',
                label: '소',
                titleText: '가축 체내 축적 (생물농축)',
                description: '오염된 토양에서 자란 풀이나 오염된 물을 마신 가축은 다이옥신이 체내 지방에 쌓인다. 이로 인해 면역력 저하, 성장 이상, 번식 능력 감소 등이 나타날 수 있다.',
                x: 15, y: 60, w: 20, h: 25
            },
            {
                id: 'bird',
                label: '새',
                titleText: '먹이사슬을 통한 영향 (생물 증폭)',
                description: '가축을 먹는 인간, 물고기를 먹는 새 등 상위 단계로 갈수록 다이옥신 농도가 점점 높아진다. 장기 노출 시 암, 호르몬 이상, 면역 기능 저하 등 심각한 건강 문제가 발생할 수 있다.',
                x: 55, y: 35, w: 15, h: 20
            },
            {
                id: 'river',
                label: '강물',
                titleText: '전쟁 이후 환경 복구의 어려움',
                description: '다이옥신은 자연에서 잘 분해되지 않아 전쟁이 끝난 뒤에도 오랫동안 환경에 남아 있을 수 있다. 이 때문에 토양과 수질 오염이 지속되며 생태계 회복에도 많은 시간이 필요하다.',
                x: 50, y: 60, w: 40, h: 40
            },
            {
                id: 'fire',
                label: '소각',
                titleText: '전쟁 폐기물 소각 (다이옥신 발생)',
                description: '전쟁 중 폐기물이나 플라스틱, 화학물질 등을 불완전하게 태우면 다이옥신이 발생해 공기, 토양, 물을 오염시킨다.',
                x: 70, y: 25, w: 15, h: 15
            }
        ]
    },
    {
        id: 4,
        title: '침실',
        subtitle: '창밖 풍경과 남겨진 물건들도 이야기를 들려줍니다.',
        differences: [
            {
                id: 'flask',
                label: '플라스크',
                titleText: '미생물 vs 화학적 처리',
                description: '미생물은 유류나 유기오염물질을 분해하여 토양과 수질을 정화할 수 있으며, 화학적 처리보다 환경 피해가 적다는 장점이 있다.',
                x: 72, y: 40, w: 20, h: 35
            },
            {
                id: 'frame',
                label: '액자',
                titleText: '미생물을 활용 정화 기술',
                description: '미생물을 활용한 정화 기술은 오염된 환경을 친환경적으로 복원할 수 있으며, 생태계 훼손이 적은 지속 가능한 방법이라는 점에서 의미가 있다.',
                x: 35, y: 15, w: 30, h: 25
            },
            {
                id: 'bridge',
                label: '오염된 바다',
                titleText: '수질 악화 발생',
                description: '전쟁 이후에는 산림 훼손, 동식물 서식지 파괴, 수질 악화 등의 문제가 장기적으로 이어질 수 있으며, 복구에는 오랜 시간과 비용이 필요하다.',
                x: 5, y: 52, w: 30, h: 28
            }
        ]
    },
    {
        id: 5,
        title: '자연과 AI 기술',
        subtitle: 'AI 로봇과 위성 기술이 전쟁 피해와 환경을 관측하고 분석합니다.',
        differences: [
            {
                id: 'sky',
                label: '식생 지수 확인',
                titleText: '식생 지수(NDVI)와 합성 개구 레이더(SAR)',
                description: '식생 지수(NDVI)와 합성 개구 레이더(SAR) 데이터를 활용하면 구름이나 야간의 제약 없이 식생 파괴 정도와 포탄 구덩이의 분포를 픽셀 단위로 정확히 식별할 수 있다.',
                x: 45, y: 12, w: 20, h: 15
            },
            {
                id: 'river',
                label: '오염된 강물',
                titleText: 'AI 분석 환경 피해 지도',
                description: 'AI 분석을 통해 산림 소실, 토양의 중금속 오염 가능성, 유류 유출로 인한 수질 오염 확산 경로를 시각화함으로써 환경 피해 지도를 구축한다.',
                x: 20, y: 65, w: 30, h: 30
            },
            {
                id: 'screen',
                label: '모니터 (불탄 숲)',
                titleText: '과학적 복구 가이드라인',
                description: '데이터 기반의 분석은 전쟁 범죄의 객관적 증거가 될 뿐만 아니라, 전후 지속 가능한 생태계 복구를 위한 과학적 가이드라인으로 활용될 수 있다.',
                x: 50, y: 40, w: 25, h: 35
            },
            {
                id: 'satellite',
                label: '인공위성',
                titleText: '위성 원격 탐사 관측',
                description: '위험 지역 관측 불가와 거대한 범위를 효과적으로 관찰하기 위해 위성 원격 탐사를 활용해 환경 피해를 분석합니다.',
                x: 10, y: 10, w: 25, h: 25
            },
            {
                id: 'city',
                label: '불타는 도시',
                titleText: '전쟁 피해 지역',
                description: '전쟁은 즉각적인 인명 피해를 넘어 토양·수질 오염 및 산림 파괴 등 장기적인 환경 재앙을 초래하지만, 위험 지역 특성상 현장 조사가 어렵다는 한계가 있다.',
                x: 65, y: 10, w: 30, h: 25
            }
        ]
    }
];

// ==================== REPORT URLs ====================
const REPORT_URLS = {
    1: 'report1.html',
    2: 'report2.html',
    3: 'report3.html',
    4: 'report4.html',
    5: 'report5.html'
};

// ==================== GAME STATE ==
let currentStage = 0;
let foundDifferences = new Set();

// ==================== SCENE RENDERERS ====================

function renderStage1Left(container) {
    container.innerHTML = `
        <div class="room">
            <div class="wall"></div>
            <div class="floor">
                <div class="floor-board" style="top:25%"></div>
                <div class="floor-board" style="top:50%"></div>
                <div class="floor-board" style="top:75%"></div>
            </div>

            <!-- Window with gas station (panoramic, open panes) -->
            <div class="window-frame panoramic">
                <div class="window-glass">
                    <!-- Gas Station -->
                    <div class="gas-station">
                        <div class="gas-station-roof"></div>
                        <div class="gas-station-body">
                            <div class="gas-price-sign">1690원</div>
                            <div class="gas-station-sign">주유소</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wall Clock -->
            <div class="wall-clock">
                <div class="clock-center"></div>
                <div class="clock-hand-h"></div>
                <div class="clock-hand-m"></div>
            </div>

            <!-- Calendar on wall - blank -->
            <div class="calendar">
                <div class="calendar-header">6월</div>
                <div class="calendar-body">
                    ${Array(30).fill(0).map(() => '<div class="calendar-dot"></div>').join('')}
                </div>
            </div>

            <!-- Picture frame -->
            <div class="picture-frame" style="left:42%; top:12%; width:14%; height:18%;">
                <div class="picture-content">
                    <div class="picture-tree"></div>
                </div>
            </div>

            <!-- TV (OFF) -->
            <div class="tv-stand"></div>
            <div class="tv-body">
                <div class="tv-screen">
                    <div class="tv-content"></div>
                </div>
                <div class="tv-power-light"></div>
            </div>

            <!-- Plant -->
            <div class="plant-pot"></div>
            <div class="plant-leaf">
                <div class="leaf"></div>
                <div class="leaf"></div>
                <div class="leaf"></div>
            </div>

            <!-- Sofa (no bill) -->
            <div class="sofa">
                <div class="sofa-back"></div>
                <div class="sofa-seat"></div>
                <div class="sofa-arm-left"></div>
                <div class="sofa-arm-right"></div>
                <div class="sofa-leg" style="left:10%"></div>
                <div class="sofa-leg" style="right:10%"></div>
                <div class="sofa-cushion" style="left:10%"></div>
                <div class="sofa-cushion" style="right:10%"></div>
            </div>

            <!-- Rug -->
            <div class="rug"></div>

            <!-- Coffee Table (empty) -->
            <div class="coffee-table">
                <div class="table-top"></div>
                <div class="table-leg" style="left:10%"></div>
                <div class="table-leg" style="right:10%"></div>
            </div>
        </div>
    `;
}

function renderStage1Right(container) {
    container.innerHTML = `
        <div class="room">
            <div class="wall"></div>
            <div class="floor">
                <div class="floor-board" style="top:25%"></div>
                <div class="floor-board" style="top:50%"></div>
                <div class="floor-board" style="top:75%"></div>
            </div>

            <!-- Window with gas station (panoramic, open panes) - DIFFERENT PRICE -->
            <div class="window-frame panoramic">
                <div class="window-glass">
                    <div class="gas-station">
                        <div class="gas-station-roof"></div>
                        <div class="gas-station-body">
                            <div class="gas-price-sign" style="color:#d32f2f;">2010원</div>
                            <div class="gas-station-sign">주유소</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wall Clock (same) -->
            <div class="wall-clock">
                <div class="clock-center"></div>
                <div class="clock-hand-h"></div>
                <div class="clock-hand-m"></div>
            </div>

            <!-- Calendar on wall - HAS TEXT -->
            <div class="calendar">
                <div class="calendar-header">6월</div>
                <div class="calendar-body">
                    ${Array(30).fill(0).map(() => '<div class="calendar-dot"></div>').join('')}
                </div>
                <div class="calendar-note" style="display:block;">주 4일제 실시</div>
            </div>

            <!-- Picture frame (same) -->
            <div class="picture-frame" style="left:42%; top:12%; width:14%; height:18%;">
                <div class="picture-content">
                    <div class="picture-tree"></div>
                </div>
            </div>

            <!-- TV (ON) - DIFFERENT -->
            <div class="tv-stand"></div>
            <div class="tv-body">
                <div class="tv-screen on">
                    <div class="tv-content">
                        <div class="tv-anchor">
                            <div class="tv-anchor-head"></div>
                            <div class="tv-anchor-hair"></div>
                        </div>
                        <div class="tv-newsbar">정부, 해외여행 자제 촉구</div>
                    </div>
                </div>
                <div class="tv-power-light on"></div>
            </div>

            <!-- Plant (same) -->
            <div class="plant-pot"></div>
            <div class="plant-leaf">
                <div class="leaf"></div>
                <div class="leaf"></div>
                <div class="leaf"></div>
            </div>

            <!-- Sofa WITH electricity bill - DIFFERENT -->
            <div class="sofa">
                <div class="sofa-back"></div>
                <div class="sofa-seat"></div>
                <div class="sofa-arm-left"></div>
                <div class="sofa-arm-right"></div>
                <div class="sofa-leg" style="left:10%"></div>
                <div class="sofa-leg" style="right:10%"></div>
                <div class="sofa-cushion" style="left:10%"></div>
                <div class="sofa-cushion" style="right:10%"></div>
                <!-- Electricity Bill on sofa -->
                <div class="electricity-bill" style="display:block;">
                    <div class="bill-header">전기요금</div>
                    <div class="bill-content">사용량: 380kWh</div>
                    <div class="bill-amount">₩89,400</div>
                </div>
            </div>

            <!-- Rug (same) -->
            <div class="rug"></div>

            <!-- Coffee Table WITH newspaper - DIFFERENT -->
            <div class="coffee-table">
                <div class="table-top">
                    <div class="newspaper" style="display:block;">
                        <div class="newspaper-title">마트 생필품 부족</div>
                        <div class="newspaper-text">물류 마비로 인해<br>생필품 수급 차질</div>
                    </div>
                </div>
                <div class="table-leg" style="left:10%"></div>
                <div class="table-leg" style="right:10%"></div>
            </div>
        </div>
    `;
}

function renderStage2Left(container) {
    container.innerHTML = `
        <div class="desk-room">
            <div class="desk-wall"></div>
            <div class="desk"></div>
            
            <!-- Window -->
            <div class="desk-window">
                <div class="desk-sky sky-dirty"></div>
                <div class="desk-sea sea-dirty"></div>
            </div>
            
            <!-- Monitor (Generative AI) -->
            <div class="monitor-base"></div>
            <div class="monitor-neck"></div>
            <div class="monitor">
                <div class="screen-content">
                    <div class="screen-title">생성형 AI</div>
                    <div class="screen-body">AI 모델이<br>작업을<br>처리 중입니다...<br>⏳</div>
                </div>
            </div>
            
            <!-- Keyboard & Mouse -->
            <div class="keyboard"></div>
            <div class="mouse"></div>
            
            <!-- Drink (Coffee) -->
            <div class="cup cup-coffee">
                <div class="coffee-label"></div>
            </div>
        </div>
    `;
}

function renderStage2Right(container) {
    container.innerHTML = `
        <div class="desk-room">
            <div class="desk-wall"></div>
            <div class="desk"></div>
            
            <!-- Window (Clean) -->
            <div class="desk-window">
                <div class="desk-sky sky-clean"></div>
                <div class="desk-sea sea-clean">
                    <div class="pollution"></div>
                </div>
            </div>
            
            <!-- Monitor (Marine Carbon Removal) -->
            <div class="monitor-base"></div>
            <div class="monitor-neck"></div>
            <div class="monitor">
                <div class="screen-content">
                    <div class="screen-title">해양 탄소 제거</div>
                    <div class="screen-body">플랑크톤과<br>해조류를 활용한<br>탄소 흡수<br>방안 검색 완료.</div>
                </div>
            </div>
            
            <!-- Keyboard & Mouse -->
            <div class="keyboard"></div>
            <div class="mouse"></div>
            
            <!-- Drink (Water) -->
            <div class="cup cup-water">
                <div class="water-level"></div>
            </div>
        </div>
    `;
}

function renderStage3Left(container) {
    container.innerHTML = `
        <div class="village-room">
            <div class="bg-hills"></div>
            
            <!-- Village -->
            <div class="village-houses">
                <div class="house" style="left:5%">
                    <div class="house-roof"></div>
                </div>
                <div class="house" style="left:40%; height:80%">
                    <div class="house-roof"></div>
                </div>
                <div class="house" style="left:75%; height:50%">
                    <div class="house-roof"></div>
                </div>
            </div>
            
            <!-- River (Clean) -->
            <div class="river river-clean"></div>
            
            <!-- Cow (Clean) -->
            <div class="cow">
                <div class="cow-legs" style="left:20%"></div>
                <div class="cow-legs" style="left:40%"></div>
                <div class="cow-legs" style="left:70%"></div>
                <div class="cow-legs" style="left:90%"></div>
                <div class="cow-body">
                    <div class="cow-spots"></div>
                    <div class="cow-spots" style="left:60%; top:40%; width:20%; height:30%"></div>
                </div>
                <div class="cow-head">
                    <div class="cow-horn left"></div>
                    <div class="cow-horn right"></div>
                    <div class="cow-eye left"></div>
                    <div class="cow-eye right"></div>
                    <div class="cow-nose"></div>
                </div>
            </div>
            
            <!-- Bird (Clean) -->
            <div class="bird">
                <div class="bird-body">
                    <div class="bird-eye"></div>
                    <div class="bird-beak"></div>
                </div>
                <div class="bird-wing"></div>
            </div>
        </div>
    `;
}

function renderStage3Right(container) {
    container.innerHTML = `
        <div class="village-room">
            <div class="bg-hills"></div>
            
            <!-- Village with Fire -->
            <div class="village-houses">
                <div class="house" style="left:5%">
                    <div class="house-roof"></div>
                </div>
                <div class="house" style="left:40%; height:80%">
                    <div class="house-roof"></div>
                </div>
                <div class="house" style="left:75%; height:50%">
                    <div class="house-roof"></div>
                </div>
            </div>
            
            <div class="fire-waste">
                <div class="waste-pile"></div>
                <div class="fire-flame">
                    <svg viewBox="0 0 100 100" class="fire-vector" width="100%" height="100%">
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <g filter="url(#glow)">
                            <path d="M45,90 C45,90 20,70 30,40 C35,25 50,5 50,5 C50,5 65,20 70,45 C75,70 55,90 55,90 Z" fill="#d84315"/>
                            <path d="M48,85 C48,85 28,65 35,45 C40,30 50,15 50,15 C50,15 62,30 65,50 C68,70 52,85 52,85 Z" fill="#ff5722"/>
                            <path d="M49,85 C49,85 35,70 40,55 C42,45 50,30 50,30 C50,30 58,45 60,55 C62,70 51,85 51,85 Z" fill="#ff9800"/>
                            <path d="M50,85 C50,85 42,75 45,65 C48,55 50,45 50,45 C50,45 55,55 55,65 C58,75 50,85 50,85 Z" fill="#ffe082"/>
                            <!-- Small embers -->
                            <circle cx="35" cy="30" r="1.5" fill="#ffeb3b" opacity="0.8"/>
                            <circle cx="65" cy="20" r="1" fill="#ffeb3b" opacity="0.6"/>
                            <circle cx="50" cy="10" r="2" fill="#ffeb3b" opacity="0.5"/>
                        </g>
                    </svg>
                </div>
            </div>
            
            <!-- River (Dirty) -->
            <div class="river river-dirty"></div>
            
            <!-- Cow (Dirty) -->
            <div class="cow cow-dirty">
                <div class="cow-legs" style="left:20%"></div>
                <div class="cow-legs" style="left:40%"></div>
                <div class="cow-legs" style="left:70%"></div>
                <div class="cow-legs" style="left:90%"></div>
                <div class="cow-body">
                    <div class="cow-spots"></div>
                    <div class="cow-spots" style="left:60%; top:40%; width:20%; height:30%"></div>
                </div>
                <div class="cow-head">
                    <div class="cow-horn left"></div>
                    <div class="cow-horn right"></div>
                    <div class="cow-eye left"></div>
                    <div class="cow-eye right"></div>
                    <div class="cow-nose"></div>
                </div>
            </div>
            
            <!-- Bird (Sick) -->
            <div class="bird bird-sick">
                <div class="bird-body">
                    <div class="bird-eye"></div>
                    <div class="bird-beak"></div>
                </div>
                <div class="bird-wing"></div>
            </div>
        </div>
    `;
}

function renderStage4Left(container) {
    container.innerHTML = `
        <div class="bedroom">
            <!-- Big Window with Sea and Bridge -->
            <div class="big-window">
                <div class="window-sea"></div>
            </div>

            <!-- Wall Frame (Mountain) -->
            <div class="wall-frame">
                <div class="frame-mountain"></div>
                <div class="frame-mountain-2"></div>
            </div>

            <!-- Bed -->
            <div class="bed">
                <div class="bed-headboard"></div>
                <div class="bed-frame"></div>
                <div class="bed-mattress"></div>
                <div class="bed-blanket"></div>
                <div class="bed-pillow"></div>
            </div>

            <!-- Nightstand (Empty) -->
            <div class="nightstand"></div>
        </div>
    `;
}

function renderStage4Right(container) {
    container.innerHTML = `
        <div class="bedroom">
            <!-- Big Window with Sea and Broken Bridge -->
            <div class="big-window">
                <div class="window-sea gray-sea"></div>
            </div>

            <!-- Wall Frame (Microbes) -->
            <div class="wall-frame">
                <div class="frame-microbe frame-microbe-1"></div>
                <div class="frame-microbe frame-microbe-2"></div>
                <div class="frame-microbe frame-microbe-3"></div>
            </div>

            <!-- Bed -->
            <div class="bed">
                <div class="bed-headboard"></div>
                <div class="bed-frame"></div>
                <div class="bed-mattress"></div>
                <div class="bed-blanket"></div>
                <div class="bed-pillow"></div>
            </div>

            <!-- Nightstand With Flask -->
            <div class="nightstand">
                <div class="flask" style="display:block;">
                    <div class="flask-body"></div>
                    <div class="flask-liquid"></div>
                    <div class="flask-neck"></div>
                </div>
            </div>
        </div>
    `;
}

function renderStage5Left(container) {
    container.innerHTML = `
        <div class="nature-room">
            <!-- Clean Sky -->
            <div class="sky-cloud" style="left: 45%; top: 15%;"></div>

            <!-- City -->
            <div class="city">
                <div class="city-building" style="left: 10%; width: 25%; height: 80%"></div>
                <div class="city-building" style="left: 40%; width: 25%; height: 60%"></div>
                <div class="city-building" style="left: 70%; width: 20%; height: 90%"></div>
            </div>

            <!-- Clean River -->
            <div class="nature-river"></div>

            <!-- AI Robot -->
            <div class="robot">
                <div class="robot-arm"></div>
                <div class="robot-arm right"></div>
                <div class="robot-body"></div>
                <div class="robot-head">
                    <div class="robot-eye"></div>
                    <div class="robot-eye"></div>
                </div>
            </div>

            <!-- Robot Monitor (Clean Forest) -->
            <div class="robot-monitor">
                <div class="robot-monitor-screen">
                    <div class="forest-tree" style="left: 10%"></div>
                    <div class="forest-tree" style="left: 40%"></div>
                    <div class="forest-tree" style="left: 70%"></div>
                </div>
            </div>
        </div>
    `;
}

function renderStage5Right(container) {
    container.innerHTML = `
        <div class="nature-room">
            <!-- Polluted Sky with Satellite -->
            <div class="satellite">
                <div class="sat-antenna"></div>
                <div class="sat-dish"></div>
                <div class="sat-panel left"></div>
                <div class="sat-panel right"></div>
                <div class="sat-body"></div>
            </div>
            
            <!-- Polluted Cloud -->
            <div class="sky-cloud sky-cloud-polluted" style="left: 45%; top: 15%;"></div>

            <!-- Burning City -->
            <div class="city">
                <div class="city-fire">
                    <svg viewBox="0 0 100 100" class="fire-vector" width="100%" height="100%">
                        <defs>
                            <filter id="city-glow" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <g filter="url(#city-glow)">
                            <!-- Multiple animated flames spreading out -->
                            <path d="M20,95 C15,80 25,60 30,50 C35,40 25,20 25,20 C25,20 40,35 45,55 C50,70 30,95 30,95 Z" fill="#d84315"/>
                            <path d="M80,95 C85,75 70,55 60,40 C55,30 75,10 75,10 C75,10 55,30 50,55 C45,75 70,95 70,95 Z" fill="#bf360c"/>
                            
                            <!-- Main large central fire -->
                            <path d="M45,100 C20,70 30,40 35,25 C40,10 50,0 50,0 C50,0 60,15 65,30 C70,50 60,75 55,100 Z" fill="#e64a19"/>
                            <path d="M47,95 C25,75 35,50 40,35 C45,20 50,15 50,15 C50,15 55,25 60,40 C65,55 55,80 50,95 Z" fill="#ff7043"/>
                            <path d="M49,90 C35,75 42,60 45,45 C47,35 50,25 50,25 C50,25 53,35 55,45 C58,60 52,75 50,90 Z" fill="#ffb74d"/>
                            <path d="M50,85 C42,75 45,65 48,55 C49,45 50,40 50,40 C50,40 51,45 52,55 C55,65 52,75 50,85 Z" fill="#fff176"/>
                            
                            <!-- Massive Embers/Sparks -->
                            <circle cx="30" cy="50" r="1.5" fill="#ffeb3b" opacity="0.7"/>
                            <circle cx="70" cy="40" r="2" fill="#ffeb3b" opacity="0.6"/>
                            <circle cx="50" cy="20" r="2.5" fill="#fff59d" opacity="0.5"/>
                            <circle cx="40" cy="15" r="1" fill="#fff59d" opacity="0.8"/>
                        </g>
                    </svg>
                </div>
                <div class="city-building" style="left: 10%; width: 25%; height: 80%"></div>
                <div class="city-building" style="left: 40%; width: 25%; height: 60%"></div>
                <div class="city-building" style="left: 70%; width: 20%; height: 90%"></div>
            </div>

            <!-- Polluted River -->
            <div class="nature-river river-oil">
                <div class="oil-spill"></div>
                <div class="oil-spill" style="top: 10%; left: 60%; width: 30%"></div>
            </div>

            <!-- AI Robot -->
            <div class="robot">
                <div class="robot-arm"></div>
                <div class="robot-arm right"></div>
                <div class="robot-body"></div>
                <div class="robot-head">
                    <div class="robot-eye"></div>
                    <div class="robot-eye"></div>
                </div>
            </div>

            <!-- Robot Monitor (Burnt Forest) -->
            <div class="robot-monitor">
                <div class="robot-monitor-screen burnt">
                    <div class="forest-tree forest-tree-burnt" style="left: 10%"></div>
                    <div class="forest-tree forest-tree-burnt" style="left: 40%"></div>
                    <div class="forest-tree forest-tree-burnt" style="left: 70%"></div>
                </div>
            </div>
        </div>
    `;
}

// ==================== SCENE RENDERER DISPATCH ====================
const sceneRenderers = {
    1: { left: renderStage1Left, right: renderStage1Right },
    2: { left: renderStage2Left, right: renderStage2Right },
    3: { left: renderStage3Left, right: renderStage3Right },
    4: { left: renderStage4Left, right: renderStage4Right },
    5: { left: renderStage5Left, right: renderStage5Right }
};

// ==================== CORE FUNCTIONS ====================

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showTitle() {
    showScreen('title-screen');
    document.getElementById('stage-clear').classList.remove('active');
    document.getElementById('final-message').classList.remove('active');
}

function startGame() {
    currentStage = 0;
    loadStage();
}

function loadStage() {
    const stage = STAGES[currentStage];
    foundDifferences = new Set();

    // Update header targets
    document.getElementById('stage-badge').textContent = `STAGE ${stage.id}`;
    document.getElementById('stage-title').textContent = stage.title;
    document.getElementById('found-count').textContent = '0';
    document.getElementById('total-count').textContent = stage.differences.length;
    
    // Hide next stage & finish buttons
    document.getElementById('header-next-btn').classList.remove('visible');
    const existingFinalBtn = document.getElementById('final-clear-btn');
    if (existingFinalBtn) existingFinalBtn.remove();

    // Render scenes
    const leftContainer = document.getElementById('scene-left');
    const rightContainer = document.getElementById('scene-right');

    const renderer = sceneRenderers[stage.id] || sceneRenderers[1];
    renderer.left(leftContainer);
    renderer.right(rightContainer);

    // Add hotspots to only the right image
    addHotspots(rightContainer, stage.differences);

    // Render found indicators
    renderIndicators(stage.differences.length);

    // Show game
    showScreen('game-screen');
    document.getElementById('stage-clear').classList.remove('active');
    document.getElementById('final-message').classList.remove('active');
}

function addHotspots(container, differences) {
    differences.forEach(diff => {
        const hotspot = document.createElement('div');
        hotspot.className = 'hotspot';
        hotspot.dataset.id = diff.id;
        hotspot.style.left = diff.x + '%';
        hotspot.style.top = diff.y + '%';
        hotspot.style.width = diff.w + '%';
        hotspot.style.height = diff.h + '%';

        // Hover → show tooltip
        hotspot.addEventListener('mouseenter', (e) => {
            if (foundDifferences.has(diff.id)) {
                showTooltip(e, diff.titleText, diff.description);
            }
        });
        hotspot.addEventListener('mousemove', (e) => {
            if (foundDifferences.has(diff.id)) {
                moveTooltip(e);
            }
        });
        hotspot.addEventListener('mouseleave', () => {
            hideTooltip();
        });

        // Click → find difference
        hotspot.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!foundDifferences.has(diff.id)) {
                findDifference(diff);
            }
        });

        // Some stages may have custom room wrappers, fallback to parent if it exists.
        const wrapper = container.querySelector('.room') || container.querySelector('.desk-room') || container.querySelector('.village-room') || container.querySelector('.bedroom') || container.querySelector('.nature-room') || container;
        wrapper.appendChild(hotspot);
    });
}

function findDifference(diff) {
    foundDifferences.add(diff.id);

    // Mark hotspots as found on right panel
    document.querySelectorAll(`.hotspot[data-id="${diff.id}"]`).forEach(h => {
        h.classList.add('found');
    });

    // Update counter
    document.getElementById('found-count').textContent = foundDifferences.size;

    // Update indicator
    const indicators = document.querySelectorAll('.indicator');
    if (indicators[foundDifferences.size - 1]) {
        indicators[foundDifferences.size - 1].classList.add('found');
    }

    // Show tooltip immediately
    const stage = STAGES[currentStage];
    const tooltipEl = document.getElementById('tooltip');
    document.getElementById('tooltip-title').textContent = diff.titleText;
    document.getElementById('tooltip-text').innerHTML = diff.description;

    // Position tooltip near center of screen briefly
    tooltipEl.style.left = '50%';
    tooltipEl.style.top = '50%';
    tooltipEl.style.transform = 'translate(-50%, -50%)';
    tooltipEl.classList.add('visible');

    setTimeout(() => {
        tooltipEl.classList.remove('visible');
        tooltipEl.style.transform = '';
    }, 2000);

    // Check if all found
    if (foundDifferences.size === stage.differences.length) {
        setTimeout(() => showStageClear(), 800);
    }
}

function renderIndicators(count) {
    const container = document.getElementById('found-indicators');
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'indicator';
        container.appendChild(dot);
    }
}

// ==================== TOOLTIP ====================

function showTooltip(e, title, text) {
    const tooltip = document.getElementById('tooltip');
    document.getElementById('tooltip-title').textContent = title;
    document.getElementById('tooltip-text').innerHTML = text; // allow <br>
    tooltip.style.transform = '';
    moveTooltip(e);
    tooltip.classList.add('visible');
}

function moveTooltip(e) {
    const tooltip = document.getElementById('tooltip');
    const pad = 15;
    let x = e.clientX + pad;
    let y = e.clientY + pad;

    // Keep tooltip in viewport
    const rect = tooltip.getBoundingClientRect();
    if (x + 360 > window.innerWidth) {
        x = e.clientX - 360 - pad;
    }
    if (y + rect.height > window.innerHeight) {
        y = e.clientY - rect.height - pad;
    }

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

function hideTooltip() {
    document.getElementById('tooltip').classList.remove('visible');
}

// ==================== STAGE CLEAR ====================

function showStageClear() {
    spawnConfetti();

    if (currentStage >= STAGES.length - 1) {
        // Show stage clear button in header-right instead of final message auto
        setTimeout(() => {
            const btn = document.createElement('button');
            btn.id = 'final-clear-btn';
            btn.className = 'btn-primary';
            btn.textContent = '스테이지 클리어 🔥';
            btn.style.marginRight = '12px';
            btn.style.fontSize = '1.2rem';
            btn.onclick = () => {
                document.getElementById('final-message').classList.add('active');
            };
            document.querySelector('.header-right').prepend(btn);
        }, 1500);
    } else {
        // Show Next Stage Button in Top Right header
        const nextBtn = document.getElementById('header-next-btn');
        nextBtn.classList.add('visible');
    }
}

function nextStage() {
    if (currentStage >= STAGES.length - 1) {
        showTitle();
        return;
    }
    currentStage++;
    loadStage();
}

// ==================== CONFETTI ====================

function spawnConfetti() {
    const colors = ['#f59e0b', '#ef4444', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
    for (let i = 0; i < 40; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + '%';
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.width = (Math.random() * 8 + 5) + 'px';
        conf.style.height = (Math.random() * 8 + 5) + 'px';
        conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
        conf.style.animationDelay = (Math.random() * 0.5) + 's';
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 4000);
    }
}

// ==================== WRONG CLICK HANDLER ====================

document.addEventListener('click', (e) => {
    const scene = e.target.closest('.scene-container');
    if (!scene) return;
    if (e.target.closest('.hotspot')) return;
    // Disallow clicks on left panel after change
    if (e.target.closest('#scene-left')) return;

    // Show wrong click animation
    const rect = scene.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const wrongEl = document.createElement('div');
    wrongEl.className = 'wrong-click';
    wrongEl.style.left = (x - 15) + 'px';
    wrongEl.style.top = (y - 15) + 'px';
    wrongEl.innerHTML = '<div class="wrong-x">✕</div>';
    scene.appendChild(wrongEl);
    setTimeout(() => wrongEl.remove(), 600);
});

// ==================== REPORT ====================
function openReport() {
    const stage = STAGES[currentStage];
    const htmlContent = typeof REPORT_CONTENTS !== 'undefined' ? REPORT_CONTENTS[stage.id] : null;
    
    if (htmlContent) {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            
            const badge = doc.querySelector('.report-badge')?.innerHTML || `STAGE ${stage.id} REPORT`;
            const title = doc.querySelector('.report-title')?.innerHTML || '보고서';
            const author = doc.querySelector('.report-author')?.innerHTML || '';
            const body = doc.querySelector('.report-body')?.innerHTML || '';
            
            document.getElementById('report-badge').innerHTML = badge;
            document.getElementById('report-super-title').innerHTML = title;
            document.getElementById('report-author').innerHTML = author;
            document.getElementById('report-content-body').innerHTML = body;
            
            showScreen('report-screen');
        } catch (e) {
            console.error('Failed to parse report:', e);
        }
    } else {
        // Fallback if reportsData.js is missing
        const url = REPORT_URLS[stage.id];
        if (url) {
            window.open(url, '_blank');
        }
    }
}

function closeReport() {
    showScreen('game-screen');
}

// ==================== INIT ====================
// Start on title screen
showScreen('title-screen');
