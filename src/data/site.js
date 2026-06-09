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
    { id: 'REPLACE_AI_001', title: '머신러닝 입문 — 핵심 개념 완전 정복',       desc: '지도학습, 비지도학습, 강화학습의 차이와 실제 적용 사례를 알아봅니다.', date: '2026.05.20', tag: 'ML 기초' },
    { id: 'REPLACE_AI_002', title: '딥러닝 구조 이해하기 — CNN부터 Transformer까지', desc: '신경망의 기본 구조와 대표 아키텍처를 시각적으로 설명합니다.',         date: '2026.05.15', tag: '딥러닝' },
    { id: 'REPLACE_AI_003', title: 'LLM 작동 원리 완전 해설',                  desc: 'GPT, Claude, Gemini 등 대규모 언어 모델의 작동 방식을 심층 분석합니다.',  date: '2026.05.10', tag: 'LLM' },
    { id: 'REPLACE_AI_004', title: '프롬프트 엔지니어링 실전 가이드',           desc: '효과적인 프롬프트 작성법과 Chain-of-Thought, Few-shot 기법을 배웁니다.',   date: '2026.05.05', tag: '프롬프트' },
    { id: 'REPLACE_AI_005', title: 'RAG(검색 증강 생성) 아키텍처 구현',         desc: '외부 지식 베이스를 LLM에 연결하는 RAG 시스템을 단계별로 구현합니다.',     date: '2026.04.28', tag: 'RAG' },
    { id: 'REPLACE_AI_006', title: 'AI 에이전트 개발 입문',                    desc: 'Tool Use, 멀티에이전트 시스템 설계와 구현 방법을 소개합니다.',               date: '2026.04.20', tag: 'Agent' },
    { id: 'REPLACE_AI_007', title: 'Fine-tuning vs Prompt Tuning 비교',        desc: '모델 파인튜닝과 프롬프트 튜닝의 차이점과 각각의 활용 상황을 분석합니다.',   date: '2026.04.12', tag: '파인튜닝' },
    { id: 'REPLACE_AI_008', title: '벡터 데이터베이스와 임베딩 기초',           desc: 'Semantic Search와 벡터 DB의 원리, 주요 솔루션을 비교 분석합니다.',         date: '2026.04.05', tag: '벡터DB' },
  ],
  'ai-literacy': [
    { id: 'REPLACE_LIT_001', title: 'AI 리터러시란 무엇인가 — 디지털 시대의 필수 역량', desc: 'AI 시대에 모든 직종에서 요구되는 기본 AI 이해 능력을 소개합니다.',           date: '2026.05.22', tag: '입문' },
    { id: 'REPLACE_LIT_002', title: 'AI 윤리와 책임 — 사회적 영향 이해하기',            desc: '편향, 프라이버시, 저작권 등 AI 사용의 윤리적 쟁점을 탐구합니다.',             date: '2026.05.18', tag: 'AI 윤리' },
    { id: 'REPLACE_LIT_003', title: 'AI 도구 활용법 — ChatGPT/Claude 업무 적용',        desc: '실무에서 바로 쓰는 AI 도구 활용 전략과 생산성 향상 팁을 공유합니다.',         date: '2026.05.12', tag: '실무활용' },
    { id: 'REPLACE_LIT_004', title: 'AI와 일자리 — 미래 직업 트렌드 분석',              desc: 'AI 자동화가 바꾸는 직업 생태계와 미래에 유망한 스킬을 분석합니다.',           date: '2026.05.06', tag: '미래직업' },
    { id: 'REPLACE_LIT_005', title: 'AI 생성 콘텐츠 분별하기 — 딥페이크와 팩트체크',    desc: 'AI가 만든 이미지, 텍스트, 영상을 식별하는 방법을 실습합니다.',               date: '2026.04.30', tag: '미디어리터러시' },
    { id: 'REPLACE_LIT_006', title: '교육 현장에서의 AI 활용 사례',                     desc: '학교와 기업 교육에서 AI를 효과적으로 도입하는 방법을 소개합니다.',             date: '2026.04.22', tag: '교육혁신' },
    { id: 'REPLACE_LIT_007', title: 'AI 정책과 규제 이해하기 — EU AI Act 분석',         desc: '글로벌 AI 규제 동향과 기업/개인이 알아야 할 컴플라이언스를 정리합니다.',      date: '2026.04.15', tag: 'AI 정책' },
    { id: 'REPLACE_LIT_008', title: '비전공자를 위한 AI 개념 정리',                     desc: '수학·코딩 없이 AI의 핵심 개념을 쉽고 명확하게 이해합니다.',                  date: '2026.04.08', tag: '비전공자' },
  ],
  'trends': [
    { id: 'REPLACE_TRD_001', title: '2026 AI 트렌드 총정리 — 올해 주목할 5가지',    desc: '멀티모달, AI 에이전트, 소형 모델 등 2026년 AI 업계 주요 흐름을 분석합니다.',  date: '2026.06.01', tag: '트렌드' },
    { id: 'REPLACE_TRD_002', title: '생성형 AI 최신 동향 — 주요 모델 비교',         desc: '최신 LLM 모델들의 성능과 특징을 비교하고 활용 방향을 제시합니다.',             date: '2026.05.25', tag: '생성형 AI' },
    { id: 'REPLACE_TRD_003', title: 'AI 코딩 어시스턴트 심층 리뷰',               desc: 'Cursor, GitHub Copilot, Claude Code 등 AI 코딩 도구를 실무 관점에서 비교합니다.', date: '2026.05.19', tag: 'AI 코딩' },
    { id: 'REPLACE_TRD_004', title: '멀티모달 AI의 현재와 미래',                   desc: '텍스트·이미지·음성·영상을 동시에 처리하는 멀티모달 AI 기술 동향을 살펴봅니다.',  date: '2026.05.13', tag: '멀티모달' },
    { id: 'REPLACE_TRD_005', title: 'On-device AI — 스마트폰 속의 AI 혁명',        desc: '엣지 AI와 온디바이스 추론의 발전이 가져올 변화를 분석합니다.',                  date: '2026.05.07', tag: '엣지AI' },
    { id: 'REPLACE_TRD_006', title: 'AI 스타트업 투자 동향 2026',                  desc: '글로벌 AI 투자 흐름과 주목받는 AI 스타트업 생태계를 분석합니다.',               date: '2026.05.01', tag: 'AI 산업' },
    { id: 'REPLACE_TRD_007', title: '헬스케어 AI — 의료 혁신의 현재',             desc: '진단, 신약 개발, 원격 의료에서 AI가 만들어내는 변화를 소개합니다.',             date: '2026.04.24', tag: '헬스케어' },
    { id: 'REPLACE_TRD_008', title: 'AI 반도체 전쟁 — NVIDIA·AMD·인텔 비교',      desc: 'AI 가속기 시장의 경쟁 구도와 각 제품의 특징을 분석합니다.',                     date: '2026.04.17', tag: 'AI 반도체' },
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
