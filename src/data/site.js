// ============================================================
// 사이트 전역 데이터 — 교육 회사 / 네비게이션 / 동영상 / 공지
// 이 파일만 수정하면 대부분의 콘텐츠가 반영됩니다.
// YouTube 동영상 ID는 실제 업로드 후 id 값을 교체하세요.
// ============================================================

export const company = {
  name: 'AIEDU',
  nameKo: '에이아이에듀',
  fullName: 'AIEDU Corp.',
  slogan: 'AI 교육의 새로운 기준',
  copyright: '© 2026 AIEDU Corp. All rights reserved.',
  intro: [
    '에이아이에듀는 AI 핵심 기술과 AI 리터러시를 누구나 쉽게 배울 수 있도록 고품질 온라인 동영상 강좌를 제공합니다.',
    '현직 AI 전문가와 교육 전문가가 함께 만든 커리큘럼으로, 입문자부터 실무자까지 단계별 학습이 가능합니다.',
  ],
  offices: [
    {
      label: '본사',
      address: '서울특별시 강남구 테헤란로 123 AI타워 10층',
      tel: '02-1234-5678',
      fax: '02-1234-5679',
    },
  ],
  footerLinks: [
    { label: '개인정보처리방침', to: '/privacy', strong: true },
    { label: '이용약관',        to: '/terms' },
    { label: '고객센터',        to: '/support/notice' },
  ],
}

// ── GNB 내비게이션 ──────────────────────────────────────────
export const nav = [
  {
    label: '회사소개',
    to: '/about/greetings',
    children: [
      { label: '인사말',    to: '/about/greetings' },
      { label: '비전/미션', to: '/about/vision' },
      { label: '연혁',      to: '/about/history' },
      { label: '강사소개',  to: '/about/instructors' },
    ],
  },
  {
    label: '강좌소개',
    to: '/courses/ai-core',
    children: [
      { label: 'AI 핵심 기술',   to: '/courses/ai-core' },
      { label: 'AI 리터러시',    to: '/courses/ai-literacy' },
      { label: '최신 AI 트렌드', to: '/courses/trends' },
    ],
  },
  {
    label: '동영상 강의',
    to: '/videos/ai-core',
    children: [
      { label: 'AI 핵심 기술',   to: '/videos/ai-core' },
      { label: 'AI 리터러시',    to: '/videos/ai-literacy' },
      { label: '최신 AI 트렌드', to: '/videos/trends' },
    ],
  },
  {
    label: '고객센터',
    to: '/support/notice',
    children: [
      { label: '공지사항', to: '/support/notice' },
      { label: 'FAQ',      to: '/support/faq' },
      { label: '문의하기', to: '/support/contact' },
    ],
  },
]

// ── 동영상 주제 탭 메타 ─────────────────────────────────────
export const videoTopics = [
  { key: 'ai-core',     label: 'AI 핵심 기술',   desc: '머신러닝, 딥러닝, LLM 등 AI 핵심 기술을 체계적으로 학습합니다.' },
  { key: 'ai-literacy', label: 'AI 리터러시',    desc: 'AI 시대를 살아가는 필수 역량, AI 리터러시를 키웁니다.' },
  { key: 'trends',      label: '최신 AI 트렌드', desc: '빠르게 변하는 AI 업계의 최신 동향을 파악합니다.' },
]

// ── YouTube 동영상 데이터 ────────────────────────────────────
// id: YouTube 동영상 ID (11자리) — 실제 영상 업로드 후 교체하세요.
// 비공개/링크공개 영상도 embed URL로 재생 가능합니다.
export const videos = {
  'ai-core': [
    { id: 'CgSvahZkJmc', title: '머신러닝 입문강의 — 국내 Top AI대학원 박사가 알려주는 핵심',   desc: '지도학습·비지도학습·강화학습의 개념부터 실제 적용 사례까지 체계적으로 정리합니다.', date: '2024.01', tag: 'ML 기초' },
    { id: 'PxoAO9IXJco', title: '딥러닝 기초부터 LLM 실습까지 — 세계 Top 캐글 마스터 강의',   desc: '신경망 구조부터 LLM 실습까지, 세계 최고 랭킹 캐글 마스터가 직접 설명합니다.', date: '2024.03', tag: '딥러닝' },
    { id: 'tTacED-uDN0', title: '대규모 언어 모델(LLM) 완전 정복 — 머신러닝+딥러닝 기초 강의', desc: 'LLM의 구조와 작동 원리를 머신러닝·딥러닝 기초와 연결해 명확하게 설명합니다.',    date: '2024.05', tag: 'LLM' },
    { id: 'osv2csoHVAo', title: 'LLM 바닥부터 만들기 — 대형언어모델 1시간 핵심 정리 [홍정모]', desc: '사전학습부터 파인튜닝까지, LLM을 직접 구현하며 원리를 파악합니다.',               date: '2024.07', tag: 'LLM' },
    { id: '1DhFbPHWobc', title: '프롬프트 엔지니어링과 RAG — 생성형 AI 앱 개발 실전 가이드',   desc: '노코드·로우코드 기반 프롬프트 엔지니어링과 RAG 구현 방법을 단계별로 안내합니다.', date: '2024.09', tag: '프롬프트/RAG' },
    { id: 'XFPvy2JUFmY', title: 'Agentic RAG 완벽 정리 — 검색만 하는 AI는 이제 그만!',        desc: '단순 RAG를 넘어 스스로 판단하고 행동하는 Agentic RAG 아키텍처를 해설합니다.',    date: '2024.10', tag: 'RAG' },
    { id: '3MPEFYmprAM', title: 'AI 에이전트 엔지니어링 — 오케스트레이션 실전',               desc: '멀티에이전트 시스템의 오케스트레이션 설계와 구현 방법을 실습 중심으로 다룹니다.', date: '2024.11', tag: 'AI 에이전트' },
    { id: 'ylJy6c-tt20', title: '실무 RAG와 Agentic AI 전부 공개 — 서울대병원 출신 AI 현직자', desc: '의료·제약 현장에서 실제로 사용되는 RAG와 Agentic AI 구현 사례를 공개합니다.',    date: '2025.02', tag: 'RAG/Agent' },
  ],
  'ai-literacy': [
    { id: 'DbYCcDMA8rQ', title: 'AI 리터러시 교육 자료 보급 — 서울특별시교육청 센스체크',       desc: 'AI 리터러시의 개념과 교육 현장에서 활용할 수 있는 자료를 소개합니다.',           date: '2024.03', tag: 'AI 리터러시' },
    { id: 'hVAvhE1YW6U', title: 'AI 교육 접목 사례와 AI 리터러시 — NWEC 2023 강연',           desc: '뤼튼 CSO가 AI 리터러시의 정의와 교육 현장 접목 사례를 구체적으로 발표합니다.',    date: '2023.11', tag: '교육 활용' },
    { id: 'X7POfW5H3SM', title: '챗GPT 사용법 완전 정복 — 2시간 풀 강의',                     desc: 'ChatGPT의 기본 사용법부터 업무 효율화 활용법까지 2시간에 완전히 정리합니다.',     date: '2024.02', tag: 'ChatGPT 활용' },
    { id: '1dqKskYb1yk', title: '아직도 AI가 쓸모없다는 분들을 위한 실제 활용 사례 모음',       desc: '실생활과 업무에서 AI를 200% 활용하는 방법을 실제 사례 중심으로 공개합니다.',      date: '2024.04', tag: '실무 활용' },
    { id: 'HRMA-Drex8Q', title: '노트북LM으로 요약·정리·한국어 팟캐스트까지 — AI 학습 혁명',    desc: '구글 NotebookLM을 활용해 문서 요약부터 한국어 팟캐스트 생성까지 실습합니다.',     date: '2024.10', tag: 'AI 도구' },
    { id: 'gUdOScXj1xQ', title: '"챗GPT, 얼마나 믿으십니까?" — 이상욱 교수의 AI 윤리 특강',    desc: 'UNESCO AI 윤리 위원이 AI의 신뢰성, 편향, 사회적 책임을 심도 있게 분석합니다.',    date: '2024.05', tag: 'AI 윤리' },
    { id: 'ly_DqAtdLqs', title: 'ChatGPT 시대의 AI 윤리 포럼 — 저작권·개인정보·책임',         desc: 'AI 윤리의 핵심 쟁점인 저작권, 개인정보 보호, 알고리즘 책임 문제를 토론합니다.',   date: '2024.06', tag: 'AI 윤리' },
    { id: 'pmL9u5LgAEY', title: '서울대학교 생성 AI 활용 글쓰기 윤리 교육 — 주의사항 총정리',   desc: '생성 AI 활용 시 표절·저작권·학문 윤리 등 반드시 알아야 할 주의사항을 정리합니다.', date: '2024.04', tag: '글쓰기 윤리' },
  ],
  'trends': [
    { id: 'q4IseUyBZnQ', title: '2026 최신 AI 트렌드 — 안 보면 손해! AWS AI x Industry Week', desc: 'Agentic AI, 산업별 AI 혁신 등 2026년 주목해야 할 AI 트렌드를 AWS가 정리했습니다.', date: '2025.09', tag: '2026 트렌드' },
    { id: 'IMuClNioBlI', title: 'AI 기본 개념부터 미래 트렌드까지 — 비전공자도 이해하는 총정리', desc: '비전공자도 쉽게 이해할 수 있도록 AI 기술 현황과 미래 인사이트를 총정리합니다.',   date: '2025.05', tag: 'AI 미래' },
    { id: 'EyAvqkdzPo4', title: '2025년 AI로 인한 미래 생활 변화 18가지 — 신년 특강',          desc: '2025년 AI가 일상·업무·산업에 가져올 18가지 구체적 변화를 예측·분석합니다.',       date: '2025.01', tag: '미래 변화' },
    { id: 'zV0FMtKov1A', title: '상위 1%는 지금 AI를 이렇게 씁니다 — 머니디깅클럽 EP.3',       desc: '박정호·신혜원·김덕진이 공개하는 AI 도구 실전 활용 전략과 넥스트 디바이스 인사이트.', date: '2026.04', tag: 'AI 활용' },
    { id: '_bW3wbZAyo0', title: 'ChatGPT와 Claude 중 아직 선택 못 하셨다면 — 필수 시청!',       desc: '두 AI의 강점·약점을 실무 관점에서 비교하고 상황별 최적 선택 기준을 제시합니다.',   date: '2025.06', tag: 'LLM 비교' },
    { id: 'OMLhHpp01fg', title: '코딩 이제 안 배워도 될까? — GPT vs 클로드 코딩 실력 비교',     desc: 'ChatGPT와 Claude의 실제 코딩 능력을 같은 문제로 직접 테스트해 비교합니다.',       date: '2025.07', tag: 'AI 코딩' },
    { id: 'h0JS0E6dhyQ', title: 'AI 이미지 생성 대결 — ChatGPT vs Gemini 야차 뜨기',           desc: 'ChatGPT와 Gemini의 이미지 생성 품질을 동일 프롬프트로 비교 테스트합니다.',         date: '2025.04', tag: '멀티모달' },
    { id: 'y1I5VAGF3Qs', title: 'ChatGPT vs Claude 2026 — 지금 어떤 AI를 써야 할까?',          desc: '2026년 기준 ChatGPT와 Claude의 최신 성능·요금·활용 시나리오를 완벽 비교합니다.',  date: '2026.06', tag: 'AI 비교' },
  ],
}

// ── 홈 — 강좌 카드 ──────────────────────────────────────────
export const courseCards = [
  {
    key: 'ai-core',
    title: 'AI 핵심 기술',
    label: 'AI Core',
    desc: '머신러닝, 딥러닝, LLM, RAG, AI 에이전트까지 AI의 핵심 기술을 체계적으로 학습합니다.',
    to: '/videos/ai-core',
    count: 8,
  },
  {
    key: 'ai-literacy',
    title: 'AI 리터러시',
    label: 'AI Literacy',
    desc: 'AI 시대를 살아가는 모든 사람이 반드시 갖춰야 할 AI 이해와 활용 역량을 기릅니다.',
    to: '/videos/ai-literacy',
    count: 8,
  },
  {
    key: 'trends',
    title: '최신 AI 트렌드',
    label: 'AI Trends',
    desc: '빠르게 변화하는 AI 업계의 최신 기술 동향과 산업 트렌드를 빠르게 파악합니다.',
    to: '/videos/trends',
    count: 8,
  },
]

// ── 홈 — 공지사항 ───────────────────────────────────────────
export const notices = [
  { id: 5, title: '2026년 하반기 신규 강좌 업로드 일정 안내',            date: '2026.06.05' },
  { id: 4, title: 'AI 리터러시 시리즈 완강 이벤트 — 수료증 발급 안내',   date: '2026.05.28' },
  { id: 3, title: '에이아이에듀 유튜브 채널 구독자 1만 명 돌파 감사 이벤트', date: '2026.05.15' },
  { id: 2, title: '강의 수강 및 유튜브 영상 이용 안내',                   date: '2026.05.01' },
]

// ── 탭 메타 ─────────────────────────────────────────────────
export const aboutTabs = [
  { label: '인사말',    to: '/about/greetings' },
  { label: '비전/미션', to: '/about/vision' },
  { label: '연혁',      to: '/about/history' },
  { label: '강사소개',  to: '/about/instructors' },
]

export const courseTabs = [
  { label: 'AI 핵심 기술',   to: '/courses/ai-core',     key: 'ai-core' },
  { label: 'AI 리터러시',    to: '/courses/ai-literacy', key: 'ai-literacy' },
  { label: '최신 AI 트렌드', to: '/courses/trends',      key: 'trends' },
]

export const supportTabs = [
  { label: '공지사항', to: '/support/notice' },
  { label: 'FAQ',      to: '/support/faq' },
  { label: '문의하기', to: '/support/contact' },
]

// ── 강사 소개 ───────────────────────────────────────────────
export const instructors = [
  {
    name: '김민준',
    title: 'AI 연구소 수석 연구원',
    desc: 'KAIST AI 박사 출신. LLM 아키텍처와 프롬프트 엔지니어링 전문가로, 삼성SDS AI 연구팀 출신.',
    topics: ['LLM', '프롬프트 엔지니어링', 'RAG'],
  },
  {
    name: '이서연',
    title: '前 구글 AI 엔지니어',
    desc: '구글 Brain 팀 출신. 딥러닝과 컴퓨터 비전 분야 전문가. 현재 AI 스타트업 CTO.',
    topics: ['딥러닝', '컴퓨터 비전', '멀티모달'],
  },
  {
    name: '박지훈',
    title: 'AI 리터러시 교육 전문가',
    desc: '비전공자를 위한 AI 교육 콘텐츠 개발 10년 경력. EBS·네이버 AI 교육 콘텐츠 제작.',
    topics: ['AI 리터러시', 'AI 윤리', '교육 혁신'],
  },
]

// ── FAQ ─────────────────────────────────────────────────────
export const faqs = [
  { q: '동영상은 어디서 볼 수 있나요?',           a: '모든 강좌는 이 사이트의 동영상 강의 메뉴에서 바로 시청하실 수 있습니다. 일부 영상은 유튜브 링크 공개 방식으로 제공됩니다.' },
  { q: '수료증을 받을 수 있나요?',                a: '각 시리즈별 완강 이벤트 기간 중 신청하시면 디지털 수료증을 발급해드립니다. 공지사항에서 이벤트 일정을 확인해주세요.' },
  { q: '강좌는 얼마나 자주 업로드되나요?',        a: '매월 주제별로 2~4편씩 새로운 강좌가 업로드됩니다. 유튜브 채널을 구독하시면 최신 강좌 업로드 알림을 받으실 수 있습니다.' },
  { q: '비전공자도 수강할 수 있나요?',            a: 'AI 리터러시 시리즈는 코딩·수학 지식 없이 누구나 수강할 수 있습니다. AI 핵심 기술 시리즈는 기초 Python 이해가 도움이 됩니다.' },
  { q: '기업 단체 수강 문의는 어떻게 하나요?',   a: '문의하기 메뉴 또는 이메일(edu@aiedu.kr)로 남겨주시면 2영업일 내 담당자가 연락드립니다.' },
]
