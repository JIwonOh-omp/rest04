import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [tab, setTab]         = useState('login')
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const { signInWithEmail, signUpWithEmail, signInWithGoogle, signInWithKakao } = useAuth()
  const navigate  = useNavigate()
  const location  = useLocation()
  const from      = location.state?.from?.pathname ?? '/'

  const reset = () => { setError(''); setSuccess('') }

  const handleSubmit = async (e) => {
    e.preventDefault()
    reset(); setLoading(true)
    const { error: err } = tab === 'login'
      ? await signInWithEmail(email, password)
      : await signUpWithEmail(email, password)
    setLoading(false)
    if (err) { setError(err.message); return }
    if (tab === 'signup') { setSuccess('가입 확인 이메일을 발송했습니다. 이메일을 확인해주세요.'); return }
    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-neutral-50 dark:bg-navy-950 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-8 shadow-xl">

          {/* 로고 */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-extrabold text-royal dark:text-sky">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-royal dark:bg-sky text-white dark:text-navy-950 text-sm font-black">AI</span>
              AIEDU
            </Link>
          </div>

          {/* 탭 */}
          <div className="mb-6 flex rounded-xl border border-neutral-200 dark:border-navy-700 p-1">
            {[['login', '로그인'], ['signup', '회원가입']].map(([t, label]) => (
              <button
                key={t}
                type="button"
                onClick={() => { setTab(t); reset() }}
                className={[
                  'flex-1 rounded-lg py-2.5 text-sm font-bold transition',
                  tab === t
                    ? 'bg-royal dark:bg-sky text-white dark:text-navy-950'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200',
                ].join(' ')}
              >{label}</button>
            ))}
          </div>

          {/* 폼 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">이메일</label>
              <input
                type="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                className="w-full rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">비밀번호</label>
              <input
                type="password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요 (6자 이상)"
                className="w-full rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none transition focus:border-royal dark:focus:border-sky focus:ring-2 focus:ring-royal/20 dark:focus:ring-sky/20"
              />
            </div>

            {error   && <p className="rounded-xl bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
            {success && <p className="rounded-xl bg-green-50 dark:bg-green-900/20 px-4 py-3 text-sm text-green-600 dark:text-green-400">{success}</p>}

            <button
              type="submit" disabled={loading}
              className="w-full rounded-xl bg-royal dark:bg-sky py-3.5 font-bold text-white dark:text-navy-950 transition hover:brightness-110 disabled:opacity-50"
            >
              {loading ? '처리 중…' : tab === 'login' ? '로그인' : '회원가입'}
            </button>
          </form>

          {/* 구분선 */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200 dark:bg-navy-700" />
            <span className="text-xs text-neutral-400">소셜 로그인</span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-navy-700" />
          </div>

          {/* 소셜 버튼 */}
          <div className="space-y-3">
            <button
              type="button" onClick={() => { reset(); signInWithGoogle() }}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-300 dark:border-navy-600 bg-white dark:bg-navy-800 py-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200 transition hover:bg-neutral-50 dark:hover:bg-navy-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google로 계속하기
            </button>

            <button
              type="button" onClick={() => { reset(); signInWithKakao() }}
              className="flex w-full items-center justify-center gap-3 rounded-xl py-3 text-sm font-semibold transition hover:brightness-95"
              style={{ backgroundColor: '#FEE500', color: '#191919' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.617 2 11.1c0 2.778 1.647 5.232 4.146 6.768l-1.054 3.929a.25.25 0 00.366.278L9.75 19.62A11.5 11.5 0 0012 19.8c5.523 0 10-3.617 10-8.1S17.523 3 12 3z"/>
              </svg>
              카카오로 계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
