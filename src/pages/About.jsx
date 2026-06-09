import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import { aboutTabs, instructors } from '../data/site'

function Greetings() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-widest text-royal dark:text-sky uppercase">CEO Message</p>
          <h2 className="mb-6 text-3xl font-black text-navy-950 dark:text-white md:text-4xl">
            AI 교육으로<br />더 나은 미래를
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>안녕하세요, 에이아이에듀 대표 홍길동입니다.</p>
            <p>인공지능은 이제 특정 전문가만의 영역이 아닙니다. AI를 이해하고 활용하는 능력은 모든 직종, 모든 세대가 갖춰야 할 기본 소양이 되었습니다.</p>
            <p>에이아이에듀는 이러한 시대적 요구에 부응하여, 누구나 쉽고 무료로 AI를 배울 수 있는 플랫폼을 만들었습니다. 현직 AI 전문가들이 직접 제작한 강의로 AI 핵심 기술부터 실생활 활용까지 체계적으로 배울 수 있습니다.</p>
            <p>여러분의 AI 여정에 에이아이에듀가 함께하겠습니다.</p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-royal to-sky flex items-center justify-center text-2xl text-white font-black">홍</div>
            <div>
              <p className="font-bold text-navy-950 dark:text-white">홍길동</p>
              <p className="text-sm text-neutral-500">에이아이에듀 대표</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-navy-950 to-royal h-80 flex items-center justify-center">
          <p className="text-white/30 text-sm">대표 사진</p>
        </div>
      </div>
    </div>
  )
}

function Vision() {
  const items = [
    { title: '비전',    desc: 'AI 교육의 민주화 — 누구나, 어디서나 AI를 배울 수 있는 세상을 만듭니다.', accent: true },
    { title: '미션',    desc: '최고 품질의 AI 교육 콘텐츠를 무료로 제공하여 AI 리터러시 격차를 해소합니다.', accent: true },
    { title: '접근성',  desc: '비용과 배경에 상관없이 누구나 AI 교육에 접근할 수 있어야 합니다.' },
    { title: '품질',    desc: '현직 전문가가 만드는 실무 중심의 최고 수준 콘텐츠를 제공합니다.' },
    { title: '최신성',  desc: '빠르게 변화하는 AI 업계 트렌드를 즉시 반영하여 업데이트합니다.' },
    { title: '실용성',  desc: '이론에 그치지 않고 현장에서 바로 적용 가능한 지식을 전달합니다.' },
  ]
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title}
            className={`rounded-2xl p-7 ${item.accent ? 'bg-royal dark:bg-navy-800 border border-royal dark:border-sky' : 'bg-white dark:bg-navy-800 border border-neutral-200 dark:border-navy-700'}`}>
            <p className={`mb-3 text-xs font-bold tracking-widest uppercase ${item.accent ? 'text-sky' : 'text-royal dark:text-sky'}`}>{item.title}</p>
            <p className={`text-sm leading-relaxed ${item.accent ? 'text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function History() {
  const items = [
    { year: '2026', events: ['에이아이에듀 설립', 'AI 핵심 기술 시리즈 론칭 (8강)', 'AI 리터러시 시리즈 론칭 (8강)'] },
    { year: '2026 하반기', events: ['최신 AI 트렌드 시리즈 론칭', '유튜브 구독자 1만 명 돌파', '기업 교육 서비스 시작'] },
    { year: '2027 (예정)', events: ['AI 실습 강좌 추가', '수료증 발급 시스템 구축', '강의 수 50개 달성'] },
  ]
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <div className="relative border-l-2 border-royal dark:border-sky pl-8 space-y-12">
        {items.map((block) => (
          <div key={block.year} className="relative">
            <div className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full bg-royal dark:bg-sky border-4 border-white dark:border-navy-950" />
            <p className="mb-4 text-xl font-black text-royal dark:text-sky">{block.year}</p>
            <ul className="space-y-2">
              {block.events.map((e, j) => (
                <li key={j} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function InstructorsContent() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <div className="grid gap-6 md:grid-cols-3">
        {instructors.map((p) => (
          <div key={p.name} className="rounded-2xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-navy-950 via-royal-deep to-royal flex items-end p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur text-2xl font-black text-white">
                {p.name[0]}
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-1 text-lg font-black text-navy-950 dark:text-white">{p.name}</h3>
              <p className="mb-3 text-sm font-semibold text-royal dark:text-sky">{p.title}</p>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <span key={t} className="rounded-full bg-royal/10 dark:bg-sky/10 px-3 py-1 text-xs font-semibold text-royal dark:text-sky">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const tabContent = {
  greetings:   { label: '인사말',    component: <Greetings /> },
  vision:      { label: '비전/미션', component: <Vision /> },
  history:     { label: '연혁',      component: <History /> },
  instructors: { label: '강사소개',  component: <InstructorsContent /> },
}

export default function About() {
  const { tab = 'greetings' } = useParams()
  const content = tabContent[tab]
  if (!content) return <Navigate to="/about/greetings" replace />

  return (
    <SubPageLayout sectionTitle="회사소개" tabs={aboutTabs} headLabel={content.label}>
      {content.component}
    </SubPageLayout>
  )
}
