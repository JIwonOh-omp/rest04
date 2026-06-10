import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import { supportTabs, faqs } from '../data/site'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

const fmt = (d) =>
  new Date(d).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })

function Notice() {
  const { isAdmin }           = useAuth()
  const navigate              = useNavigate()
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage]       = useState(1)
  const PER_PAGE = 10

  useEffect(() => {
    supabase
      .from('posts')
      .select('id, title, created_at')
      .eq('category', 'notice')
      .order('created_at', { ascending: false })
      .then(({ data }) => { setPosts(data ?? []); setLoading(false) })
  }, [])

  const total = Math.ceil(posts.length / PER_PAGE)
  const slice = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-royal dark:border-sky border-t-transparent" />
    </div>
  )

  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      {isAdmin && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => navigate('/admin/write')}
            className="rounded-xl bg-royal dark:bg-sky px-5 py-2.5 text-sm font-bold text-white dark:text-navy-950 transition hover:brightness-110"
          >+ 글쓰기</button>
        </div>
      )}
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-navy-700">
        <div className="hidden grid-cols-[1fr_auto] border-b border-neutral-200 dark:border-navy-700 bg-neutral-50 dark:bg-navy-800 px-6 py-4 text-sm font-bold text-neutral-500 dark:text-neutral-400 md:grid">
          <span>제목</span>
          <span>날짜</span>
        </div>
        {slice.length === 0 ? (
          <div className="py-20 text-center text-sm text-neutral-400 dark:text-neutral-500">
            등록된 공지사항이 없습니다.
          </div>
        ) : (
          <ul className="divide-y divide-neutral-100 dark:divide-navy-700">
            {slice.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => navigate(`/support/notice/${n.id}`)}
                  className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-1 px-6 py-5 text-left transition hover:bg-neutral-50 dark:hover:bg-navy-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 rounded-full bg-royal/10 dark:bg-sky/10 px-2.5 py-0.5 text-xs font-bold text-royal dark:text-sky">공지</span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">{n.title}</span>
                  </div>
                  <span className="text-sm text-neutral-400 md:ml-4 shrink-0">{fmt(n.created_at)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {total > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={[
                'h-9 w-9 rounded-xl text-sm font-semibold transition',
                page === i + 1
                  ? 'bg-royal dark:bg-sky text-white dark:text-navy-950'
                  : 'border border-neutral-200 dark:border-navy-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-navy-800',
              ].join(' ')}
            >{i + 1}</button>
          ))}
        </div>
      )}
    </div>
  )
}

function Faq() {
  const [open, setOpen] = useState(null)
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <ul className="space-y-3">
        {faqs.map((f, i) => (
          <li key={i} className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-navy-700">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-neutral-50 dark:hover:bg-navy-800"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 font-black text-royal dark:text-sky">Q.</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{f.q}</span>
              </div>
              <svg
                className={['shrink-0 transition-transform', open === i ? 'rotate-180' : ''].join(' ')}
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {open === i && (
              <div className="border-t border-neutral-100 dark:border-navy-700 bg-neutral-50 dark:bg-navy-800/50 px-6 py-5">
                <div className="flex gap-3">
                  <span className="shrink-0 font-black text-gold">A.</span>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{f.a}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Contact() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {/* 문의 폼 */}
        <div>
          <h3 className="mb-6 text-2xl font-black text-navy-950 dark:text-white">문의하기</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">이름 *</label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">이메일 *</label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">문의 유형</label>
              <select className="w-full rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20">
                <option>강의 내용 문의</option>
                <option>기업 교육 문의</option>
                <option>수료증 발급 문의</option>
                <option>기타 문의</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">문의 내용 *</label>
              <textarea
                rows={5}
                placeholder="문의 내용을 입력하세요"
                className="w-full resize-none rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-royal dark:bg-sky py-3.5 font-bold text-white dark:text-navy-950 transition hover:brightness-110"
            >
              문의 보내기
            </button>
          </form>
        </div>

        {/* 연락처 정보 */}
        <div className="space-y-6">
          <h3 className="mb-6 text-2xl font-black text-navy-950 dark:text-white">연락처 정보</h3>
          {[
            { label: '이메일', value: 'edu@aiedu.kr', icon: '✉️' },
            { label: '전화',   value: '02-1234-5678', icon: '📞' },
            { label: '주소',   value: '서울시 강남구 테헤란로 123 AI타워 10층', icon: '📍' },
            { label: '운영시간', value: '평일 09:00 – 18:00 (주말·공휴일 휴무)', icon: '🕘' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 p-5">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-xs font-bold text-royal dark:text-sky mb-1">{item.label}</p>
                <p className="text-neutral-700 dark:text-neutral-300">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const tabContent = {
  notice:  { label: '공지사항', component: <Notice /> },
  faq:     { label: 'FAQ',      component: <Faq /> },
  contact: { label: '문의하기', component: <Contact /> },
}

export default function Support() {
  const { tab = 'notice' } = useParams()
  const content = tabContent[tab]
  if (!content) return <Navigate to="/support/notice" replace />

  return (
    <SubPageLayout sectionTitle="고객센터" tabs={supportTabs} headLabel={content.label}>
      {content.component}
    </SubPageLayout>
  )
}
