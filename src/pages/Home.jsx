import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { courseCards, notices, videos, videoTopics } from '../data/site'

// ── 히어로 슬라이드 ───────────────────────────────────────────
const slides = [
  {
    headline: 'AI 교육의\n새로운 기준',
    sub: 'AI 핵심 기술부터 AI 리터러시까지,\n누구나 쉽게 배울 수 있는 온라인 동영상 강좌',
    cta: { label: '강의 바로 보기', to: '/videos/ai-core' },
  },
  {
    headline: 'AI 리터러시,\n이제 선택이 아닌 필수',
    sub: 'AI 시대를 살아가는 모든 사람을 위한\n실용적인 AI 이해와 활용 강좌',
    cta: { label: 'AI 리터러시 강의', to: '/videos/ai-literacy' },
  },
  {
    headline: '최신 AI 트렌드를\n가장 빠르게',
    sub: '빠르게 변화하는 AI 업계의 최신 동향을\n전문가의 시각으로 분석합니다',
    cta: { label: '트렌드 강의 보기', to: '/videos/trends' },
  },
]

function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const go = (dir) => setIdx((i) => (i + dir + slides.length) % slides.length)

  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden bg-navy-950">
      {/* 배경 그라데이션 애니메이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-royal-deep to-navy-800" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 40%)' }}
      />

      {/* 슬라이드 콘텐츠 */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={[
            'absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 px-[6%]',
            i === idx ? 'opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-sky/80 uppercase">AI Education Platform</p>
          <h1 className="mb-6 whitespace-pre-line text-5xl font-black leading-tight text-white drop-shadow md:text-7xl lg:text-8xl">
            {s.headline}
          </h1>
          <p className="mb-10 max-w-xl whitespace-pre-line text-base leading-relaxed text-white/70 md:text-lg">
            {s.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={s.cta.to}
              className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 font-bold text-white transition hover:bg-royal-deep"
            >
              {s.cta.label} <span>→</span>
            </Link>
            <Link
              to="/about/greetings"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-bold text-white/80 transition hover:border-white hover:text-white"
            >
              회사 소개
            </Link>
          </div>
        </div>
      ))}

      {/* 슬라이드 컨트롤 */}
      <div className="absolute bottom-8 left-[6%] z-10 flex items-center gap-4">
        <button type="button" aria-label="이전 슬라이드" onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/20">
          ‹
        </button>
        <button type="button" aria-label="다음 슬라이드" onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/20">
          ›
        </button>
        <div className="flex gap-2 ml-2">
          {slides.map((_, i) => (
            <button key={i} type="button" aria-label={`슬라이드 ${i + 1}`} onClick={() => setIdx(i)}
              className={['h-1.5 rounded-full transition-all', i === idx ? 'w-8 bg-sky' : 'w-2 bg-white/40'].join(' ')}
            />
          ))}
        </div>
      </div>

      {/* 통계 (우하단) */}
      <div className="absolute bottom-8 right-[6%] z-10 hidden gap-8 md:flex">
        {[
          { num: '24+', label: '강의 영상' },
          { num: '3',   label: '전문 분야' },
          { num: '100%', label: '무료 수강' },
        ].map((s) => (
          <div key={s.label} className="text-right">
            <p className="text-2xl font-black text-sky">{s.num}</p>
            <p className="text-xs text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── 빠른 메뉴 ─────────────────────────────────────────────────
function QuickMenu() {
  const links = [
    { label: 'AI 핵심 기술',   to: '/videos/ai-core',     icon: '🤖' },
    { label: 'AI 리터러시',    to: '/videos/ai-literacy', icon: '📚' },
    { label: '최신 트렌드',    to: '/videos/trends',      icon: '🔥' },
    { label: '강사 소개',      to: '/about/instructors',  icon: '👩‍🏫' },
  ]
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-navy-950 transition-colors duration-200">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-40">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 dark:border-navy-700 bg-neutral-50 dark:bg-navy-900 p-6 text-center font-bold transition hover:border-royal dark:hover:border-sky hover:shadow-md"
              >
                <span className="text-3xl">{l.icon}</span>
                <span className="text-sm text-neutral-800 dark:text-neutral-200">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── 강좌 소개 카드 ────────────────────────────────────────────
function CoursesSection() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-navy-900 transition-colors duration-200">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-40">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-sky uppercase">Our Courses</p>
          <h2 className="text-4xl font-black leading-tight text-navy-950 dark:text-white md:text-5xl">
            체계적인 AI 교육<br />커리큘럼
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {courseCards.map((c) => (
            <Link
              key={c.key}
              to={c.to}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-navy-800 border border-neutral-200 dark:border-navy-700 p-8 transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-royal/10 dark:bg-sky/10 px-3 py-1 text-xs font-bold text-royal dark:text-sky">
                  {c.label}
                </span>
                <span className="text-sm text-neutral-400">{c.count}개 강의</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy-950 dark:text-white">{c.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{c.desc}</p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-royal dark:text-sky opacity-0 transition-opacity group-hover:opacity-100">
                강의 보러 가기 <span>→</span>
              </div>
              {/* 데코 */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-royal/5 dark:bg-sky/5 transition group-hover:scale-150" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 최신 강의 미리보기 ────────────────────────────────────────
function FeaturedVideos() {
  const featured = videoTopics.flatMap((t) =>
    (videos[t.key] || []).slice(0, 2).map((v) => ({ ...v, topic: t.label }))
  ).slice(0, 6)

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-navy-950 transition-colors duration-200">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-40">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-sky uppercase">Latest Videos</p>
            <h2 className="text-4xl font-black text-navy-950 dark:text-white md:text-5xl">최신 강의</h2>
          </div>
          <Link to="/videos/ai-core"
            className="inline-flex items-center gap-2 font-semibold text-royal dark:text-sky hover:underline self-start md:self-auto">
            전체 강의 보기 →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v) => (
            <VideoPreviewCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoPreviewCard({ video }) {
  return (
    <Link
      to="/videos/ai-core"
      className="group rounded-xl overflow-hidden border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 transition hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* 썸네일 영역 */}
      <div className="relative aspect-video bg-navy-900 overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="h-full w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-navy-950/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow transition group-hover:scale-110">
            <svg className="ml-1" width="20" height="20" viewBox="0 0 24 24" fill="#1e40af">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
          {video.tag}
        </span>
      </div>
      {/* 정보 */}
      <div className="p-4">
        <h3 className="mb-1 line-clamp-2 text-sm font-bold text-neutral-900 dark:text-white">{video.title}</h3>
        <p className="text-xs text-neutral-400">{video.date}</p>
      </div>
    </Link>
  )
}

// ── CTA 배너 ──────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-royal" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #0ea5e9 0%, transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-container px-4 text-center md:px-10 lg:px-40">
        <p className="mb-3 text-sm font-semibold tracking-widest text-sky/80 uppercase">Free Online Courses</p>
        <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
          지금 바로 무료로<br />AI를 배워보세요
        </h2>
        <p className="mb-10 text-white/70">
          모든 강의는 유튜브에서 무료로 제공됩니다. 구독하고 최신 강의 알림을 받으세요.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/videos/ai-core"
            className="inline-flex items-center gap-2 rounded-full bg-sky px-8 py-4 font-bold text-navy-950 transition hover:brightness-110">
            강의 시작하기 →
          </Link>
          <Link to="/about/greetings"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:border-white">
            더 알아보기
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── 공지사항 ──────────────────────────────────────────────────
function NoticeSection() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-navy-900 transition-colors duration-200">
      <div className="mx-auto flex max-w-container flex-col px-4 md:px-10 lg:px-40">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b-2 border-royal dark:border-sky pb-8 md:flex-row md:items-center">
          <h2 className="text-3xl font-black text-navy-950 dark:text-white md:text-4xl">공지사항</h2>
          <Link
            to="/support/notice"
            className="inline-flex items-center gap-2 rounded-full border border-royal dark:border-sky px-5 py-2.5 text-sm font-bold text-royal dark:text-sky transition hover:bg-royal hover:text-white dark:hover:bg-sky dark:hover:text-navy-950"
          >
            전체보기 →
          </Link>
        </div>
        <ul className="flex flex-col divide-y divide-neutral-200 dark:divide-navy-700">
          {notices.map((n) => (
            <li key={n.id}>
              <Link
                to="/support/notice"
                className="flex flex-col justify-between gap-1 py-5 transition hover:text-royal dark:hover:text-sky md:flex-row md:items-center"
              >
                <span className="text-base font-semibold text-neutral-800 dark:text-neutral-200 md:text-lg">{n.title}</span>
                <span className="text-sm text-neutral-400 md:text-base">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <QuickMenu />
      <CoursesSection />
      <FeaturedVideos />
      <CtaBanner />
      <NoticeSection />
    </>
  )
}
