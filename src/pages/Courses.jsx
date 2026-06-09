import { useParams, Navigate, Link } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import { courseTabs, videoTopics, videos, courseCards } from '../data/site'

function CourseDetail({ topicKey }) {
  const topic   = videoTopics.find((t) => t.key === topicKey) || videoTopics[0]
  const card    = courseCards.find((c) => c.key === topicKey) || courseCards[0]
  const topicVideos = videos[topicKey] || []

  const highlights = {
    'ai-core': [
      '머신러닝 · 딥러닝 핵심 이론',
      'LLM 아키텍처 심층 분석',
      'RAG · AI 에이전트 구현',
      '프롬프트 엔지니어링 실전',
      '벡터 DB · 임베딩 기초',
    ],
    'ai-literacy': [
      'AI 리터러시 개념과 필요성',
      'AI 윤리 · 책임 이해',
      'ChatGPT · Claude 업무 활용',
      'AI와 미래 직업 트렌드',
      '딥페이크 분별 · 팩트체크',
    ],
    'trends': [
      '2026 AI 업계 트렌드 총정리',
      '최신 LLM 모델 비교 분석',
      'AI 코딩 어시스턴트 리뷰',
      '멀티모달 AI 동향',
      'AI 산업 · 투자 트렌드',
    ],
  }

  const level = {
    'ai-core':     { label: '중급~고급', color: 'text-gold' },
    'ai-literacy': { label: '입문~초급', color: 'text-sky' },
    'trends':      { label: '전체',     color: 'text-royal dark:text-sky' },
  }

  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      {/* 상단 소개 */}
      <div className="mb-16 grid gap-10 md:grid-cols-2 md:gap-16 items-start">
        <div>
          <span className="mb-3 inline-block rounded-full bg-royal/10 dark:bg-sky/10 px-3 py-1 text-xs font-bold text-royal dark:text-sky">
            {card.label}
          </span>
          <h2 className="mb-4 text-3xl font-black text-navy-950 dark:text-white md:text-4xl">{topic.label}</h2>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">{topic.desc}</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-neutral-400 mb-1">강의 수</p>
              <p className="text-xl font-black text-navy-950 dark:text-white">{topicVideos.length}개</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">난이도</p>
              <p className={`text-xl font-black ${level[topicKey]?.color}`}>{level[topicKey]?.label}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">수강료</p>
              <p className="text-xl font-black text-navy-950 dark:text-white">무료</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to={`/videos/${topicKey}`}
              className="inline-flex items-center gap-2 rounded-full bg-royal dark:bg-sky px-7 py-3.5 font-bold text-white dark:text-navy-950 transition hover:brightness-110"
            >
              강의 바로 보기 →
            </Link>
          </div>
        </div>

        {/* 학습 내용 */}
        <div className="rounded-2xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 p-8">
          <h3 className="mb-5 text-lg font-bold text-navy-950 dark:text-white">주요 학습 내용</h3>
          <ul className="space-y-3">
            {(highlights[topicKey] || []).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal dark:bg-sky text-white dark:text-navy-950 text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 강의 목록 미리보기 */}
      <div>
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 dark:border-navy-700 pb-4">
          <h3 className="text-xl font-black text-navy-950 dark:text-white">강의 목록</h3>
          <Link to={`/videos/${topicKey}`} className="text-sm font-semibold text-royal dark:text-sky hover:underline">
            전체 강의 보기 →
          </Link>
        </div>
        <ul className="divide-y divide-neutral-100 dark:divide-navy-700">
          {topicVideos.map((v, i) => (
            <li key={v.id}>
              <Link
                to={`/videos/${topicKey}`}
                className="flex items-center gap-4 py-4 transition hover:text-royal dark:hover:text-sky"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-navy-700 text-sm font-bold text-neutral-500 dark:text-neutral-400">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="truncate font-semibold text-neutral-800 dark:text-neutral-200">{v.title}</p>
                </div>
                <span className="shrink-0 rounded-full bg-royal/10 dark:bg-sky/10 px-2.5 py-0.5 text-xs font-bold text-royal dark:text-sky">
                  {v.tag}
                </span>
                <span className="hidden shrink-0 text-xs text-neutral-400 md:block">{v.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Courses() {
  const { topic = 'ai-core' } = useParams()
  const validKeys = videoTopics.map((t) => t.key)
  if (!validKeys.includes(topic)) return <Navigate to="/courses/ai-core" replace />

  const currentTopic = videoTopics.find((t) => t.key === topic)
  const tabs = courseTabs

  return (
    <SubPageLayout sectionTitle="강좌소개" tabs={tabs} headLabel={currentTopic?.label}>
      <CourseDetail topicKey={topic} />
    </SubPageLayout>
  )
}
