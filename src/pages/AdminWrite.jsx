import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function AdminWrite() {
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [title, setTitle]       = useState('')
  const [content, setContent]   = useState('')
  const [category, setCategory] = useState('notice')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  if (!isAdmin) return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <p className="text-neutral-500 dark:text-neutral-400">접근 권한이 없습니다.</p>
    </div>
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) { setError('제목과 내용을 모두 입력해주세요.'); return }
    setLoading(true); setError('')
    const { error: err } = await supabase.from('posts').insert({
      title: title.trim(),
      content: content.trim(),
      category,
      user_id: user.id,
    })
    setLoading(false)
    if (err) { setError(err.message); return }
    navigate('/support/notice', { replace: true })
  }

  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20 py-16">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-8">
        <h1 className="mb-8 text-2xl font-black text-navy-950 dark:text-white">게시글 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">카테고리</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-neutral-900 dark:text-white outline-none focus:border-royal dark:focus:border-sky"
            >
              <option value="notice">공지사항</option>
              <option value="board">일반 게시글</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">내용</label>
            <textarea
              rows={14}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              className="w-full resize-y rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-xl border border-neutral-300 dark:border-navy-600 px-6 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 transition hover:bg-neutral-50 dark:hover:bg-navy-800"
            >취소</button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-royal dark:bg-sky px-8 py-2.5 text-sm font-bold text-white dark:text-navy-950 transition hover:brightness-110 disabled:opacity-50"
            >
              {loading ? '등록 중…' : '게시글 등록'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
