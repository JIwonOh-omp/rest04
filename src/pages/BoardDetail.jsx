import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

const fmt = (d) =>
  new Date(d).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })

export default function BoardDetail() {
  const { id }    = useParams()
  const navigate  = useNavigate()
  const { isAdmin } = useAuth()
  const [post, setPost]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    supabase.from('posts').select('*').eq('id', id).single()
      .then(({ data, error }) => {
        if (error || !data) setNotFound(true)
        else setPost(data)
        setLoading(false)
      })
  }, [id])

  const handleDelete = async () => {
    if (!window.confirm('이 게시글을 삭제하시겠습니까?')) return
    await supabase.from('posts').delete().eq('id', id)
    navigate('/support/notice', { replace: true })
  }

  if (loading) return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-royal dark:border-sky border-t-transparent" />
    </div>
  )

  if (notFound || !post) return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4">
      <p className="text-neutral-500 dark:text-neutral-400">게시글을 찾을 수 없습니다.</p>
      <button
        onClick={() => navigate('/support/notice')}
        className="rounded-xl border border-neutral-300 dark:border-navy-600 px-6 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 transition hover:bg-neutral-50 dark:hover:bg-navy-800"
      >목록으로</button>
    </div>
  )

  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20 py-16">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-900">
        {/* 헤더 */}
        <div className="border-b border-neutral-200 dark:border-navy-700 px-8 py-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-royal/10 dark:bg-sky/10 px-2.5 py-0.5 text-xs font-bold text-royal dark:text-sky">공지</span>
            {isAdmin && (
              <button
                onClick={handleDelete}
                className="text-sm font-semibold text-red-500 hover:text-red-600 transition"
              >삭제</button>
            )}
          </div>
          <h1 className="mb-2 text-2xl font-black text-neutral-900 dark:text-white">{post.title}</h1>
          <p className="text-sm text-neutral-400">{fmt(post.created_at)}</p>
        </div>
        {/* 본문 */}
        <div className="px-8 py-8">
          <p className="whitespace-pre-wrap leading-relaxed text-neutral-700 dark:text-neutral-300">{post.content}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => navigate('/support/notice')}
          className="rounded-xl border border-neutral-300 dark:border-navy-600 px-6 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 transition hover:bg-neutral-50 dark:hover:bg-navy-800"
        >목록으로</button>
        {isAdmin && (
          <button
            type="button"
            onClick={() => navigate('/admin/write')}
            className="rounded-xl bg-royal dark:bg-sky px-6 py-2.5 text-sm font-bold text-white dark:text-navy-950 transition hover:brightness-110"
          >새 글 쓰기</button>
        )}
      </div>
    </div>
  )
}
