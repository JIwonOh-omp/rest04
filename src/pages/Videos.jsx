import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { videos, videoTopics } from '../data/site'
import SubPageLayout from '../components/SubPageLayout'

const VIDEOS_PER_PAGE = 6 // 2열 × 3행

// ── 유튜브 클릭-투-플레이 카드 ───────────────────────────────
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 shadow-sm transition hover:shadow-md">
      {/* 영상 영역 */}
      <div className="relative aspect-video bg-navy-900 overflow-hidden">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            aria-label={`${video.title} 재생`}
            className="group absolute inset-0 w-full h-full"
            onClick={() => setPlaying(true)}
          >
            {/* 썸네일 */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-navy-800', 'to-royal-deep')
              }}
            />
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-navy-950/30 transition group-hover:bg-navy-950/10" />
            {/* 플레이 버튼 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition duration-200 group-hover:scale-110 group-hover:bg-white">
                <svg className="ml-1.5" width="24" height="24" viewBox="0 0 24 24" fill="#1e40af">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            {/* 태그 */}
            <span className="absolute bottom-3 left-3 rounded-md bg-royal/90 px-2.5 py-1 text-xs font-bold text-white">
              {video.tag}
            </span>
          </button>
        )}
      </div>

      {/* 정보 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-base font-bold leading-snug text-neutral-900 dark:text-white line-clamp-2">
          {video.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2 flex-1">
          {video.desc}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-400">{video.date}</span>
          {!playing && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="text-xs font-semibold text-royal dark:text-sky hover:underline"
            >
              재생 ▶
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── 페이지네이션 ─────────────────────────────────────────────
function Pagination({ current, total, onChange }) {
  if (total <= 1) return null
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-navy-600 text-neutral-600 dark:text-neutral-300 transition hover:border-royal hover:text-royal dark:hover:border-sky dark:hover:text-sky disabled:opacity-30 disabled:cursor-not-allowed"
      >
        ‹
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className={[
            'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition',
            p === current
              ? 'bg-royal dark:bg-sky text-white dark:text-navy-950'
              : 'border border-neutral-300 dark:border-navy-600 text-neutral-600 dark:text-neutral-300 hover:border-royal hover:text-royal dark:hover:border-sky dark:hover:text-sky',
          ].join(' ')}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-navy-600 text-neutral-600 dark:text-neutral-300 transition hover:border-royal hover:text-royal dark:hover:border-sky dark:hover:text-sky disabled:opacity-30 disabled:cursor-not-allowed"
      >
        ›
      </button>
    </div>
  )
}

// ── 메인 Videos 페이지 ────────────────────────────────────────
export default function Videos() {
  const { topic = 'ai-core' } = useParams()
  const [page, setPage] = useState(1)

  const currentTopic = videoTopics.find((t) => t.key === topic) || videoTopics[0]
  const allVideos    = videos[topic] || []
  const totalPages   = Math.ceil(allVideos.length / VIDEOS_PER_PAGE)
  const pageVideos   = allVideos.slice((page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE)

  const tabs = videoTopics.map((t) => ({ label: t.label, to: `/videos/${t.key}` }))

  const handlePageChange = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 토픽 변경 시 페이지 초기화
  const handleTopicChange = () => setPage(1)

  return (
    <SubPageLayout
      sectionTitle="동영상 강의"
      tabs={tabs}
      headLabel={currentTopic.label}
    >
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
        {/* 토픽 설명 */}
        <div className="mb-10 rounded-2xl border border-royal/20 dark:border-sky/20 bg-royal/5 dark:bg-sky/5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-black text-navy-950 dark:text-white md:text-3xl">
                {currentTopic.label}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">{currentTopic.desc}</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white dark:bg-navy-800 px-5 py-3 border border-neutral-200 dark:border-navy-600 self-start">
              <span className="text-2xl font-black text-royal dark:text-sky">{allVideos.length}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">개 강의</span>
            </div>
          </div>
        </div>

        {/* 주제 탭 (추가 탐색용) */}
        <div className="mb-8 flex flex-wrap gap-3">
          {videoTopics.map((t) => (
            <Link
              key={t.key}
              to={`/videos/${t.key}`}
              onClick={handleTopicChange}
              className={[
                'rounded-full px-5 py-2 text-sm font-bold transition',
                t.key === topic
                  ? 'bg-royal dark:bg-sky text-white dark:text-navy-950'
                  : 'border border-neutral-300 dark:border-navy-600 text-neutral-600 dark:text-neutral-300 hover:border-royal hover:text-royal dark:hover:border-sky dark:hover:text-sky',
              ].join(' ')}
            >
              {t.label}
            </Link>
          ))}
        </div>

        {/* 영상 그리드 — 2열 × 3행 = 6개/페이지 */}
        {pageVideos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {pageVideos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-neutral-400 dark:text-neutral-500">
            <p className="text-lg">준비 중인 강의입니다.</p>
          </div>
        )}

        {/* 페이지네이션 */}
        <Pagination current={page} total={totalPages} onChange={handlePageChange} />

        {/* 유튜브 채널 안내 */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-navy-950 to-royal-deep p-8 text-center">
          <p className="mb-2 text-sm font-semibold text-sky/80">YouTube Channel</p>
          <h3 className="mb-3 text-xl font-bold text-white">더 많은 강의를 유튜브에서 만나보세요</h3>
          <p className="mb-6 text-white/60 text-sm">구독하시면 새로운 강의 업로드 알림을 받으실 수 있습니다.</p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 font-bold text-navy-950 transition hover:brightness-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
            YouTube 채널 구독하기
          </a>
        </div>
      </div>
    </SubPageLayout>
  )
}
