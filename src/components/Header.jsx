import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { nav, company } from '../data/site'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered]       = useState(null)
  const { dark, toggle }            = useTheme()
  const { user, isAdmin, signOut }  = useAuth()
  const navigate                    = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="bg-white dark:bg-navy-900 shadow-sm dark:shadow-navy-950/50 transition-colors duration-200"
        onMouseLeave={() => setHovered(null)}
      >
        <div className="mx-auto flex h-20 max-w-container items-center justify-between border-b border-neutral-200 dark:border-navy-700 px-4 md:px-10 lg:px-20">

          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-royal dark:text-sky">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal dark:bg-sky text-white dark:text-navy-950 text-sm font-black">AI</span>
            {company.name}
          </Link>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden items-stretch lg:flex">
            {nav.map((item) => (
              <li
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'px-6 py-7 text-base font-semibold transition-colors',
                      isActive
                        ? 'text-royal dark:text-sky'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-royal dark:hover:text-sky',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>

                {/* 세로 드롭다운 */}
                {hovered === item.label && (
                  <ul className="absolute left-1/2 top-full z-50 min-w-[9rem] -translate-x-1/2 overflow-hidden rounded-xl border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-lg py-2">
                    {item.children.map((c) => (
                      <li key={c.label + c.to}>
                        <Link
                          to={c.to}
                          onClick={() => setHovered(null)}
                          className="block whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-neutral-600 dark:text-neutral-400 transition hover:bg-royal/10 dark:hover:bg-sky/10 hover:text-royal dark:hover:text-sky"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* 우측 — 다크모드 토글 + 로그인/유저 + 햄버거 */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={dark ? '라이트 모드로 전환' : '다크 모드로 전환'}
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-navy-600 text-neutral-600 dark:text-neutral-300 transition hover:bg-neutral-100 dark:hover:bg-navy-700"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* 데스크탑 로그인/유저 */}
            <div className="hidden lg:flex items-center gap-2">
              {user ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin/write"
                      className="rounded-xl bg-gold/10 dark:bg-gold/20 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold/20 dark:hover:bg-gold/30"
                    >+ 글쓰기</Link>
                  )}
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="rounded-xl border border-neutral-200 dark:border-navy-600 px-4 py-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300 transition hover:bg-neutral-100 dark:hover:bg-navy-700"
                  >로그아웃</button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="rounded-xl bg-royal dark:bg-sky px-5 py-2 text-sm font-bold text-white dark:text-navy-950 transition hover:brightness-110"
                >로그인</Link>
              )}
            </div>

            <button
              type="button"
              aria-label="메뉴 열기"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden text-neutral-800 dark:text-white"
              onClick={() => setMobileOpen(true)}
            >
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
            </button>
          </div>
        </div>

      </nav>

      {/* 모바일 패널 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm overflow-y-auto bg-white dark:bg-navy-900 p-6 shadow-2xl transition-colors">
            <div className="mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xl font-extrabold text-royal dark:text-sky">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-royal dark:bg-sky text-white dark:text-navy-950 text-xs font-black">AI</span>
                {company.name}
              </span>
              <button
                type="button"
                aria-label="메뉴 닫기"
                className="text-2xl text-neutral-500 dark:text-neutral-400"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* 다크모드 토글 (모바일) */}
            <button
              type="button"
              onClick={toggle}
              className="flex w-full items-center justify-between rounded-xl border border-neutral-200 dark:border-navy-600 px-4 py-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
            >
              <span>{dark ? '라이트 모드' : '다크 모드'}</span>
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* 모바일 로그인/유저 */}
            <div className="mb-6 mt-3">
              {user ? (
                <div className="flex flex-col gap-2">
                  {isAdmin && (
                    <Link
                      to="/admin/write"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center rounded-xl bg-gold/10 dark:bg-gold/20 px-4 py-2.5 text-sm font-bold text-gold"
                    >+ 글쓰기</Link>
                  )}
                  <button
                    type="button"
                    onClick={() => { setMobileOpen(false); handleSignOut() }}
                    className="rounded-xl border border-neutral-200 dark:border-navy-600 px-4 py-2.5 text-sm font-semibold text-neutral-600 dark:text-neutral-300"
                  >로그아웃</button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-royal dark:bg-sky px-4 py-2.5 text-sm font-bold text-white dark:text-navy-950"
                >로그인</Link>
              )}
            </div>

            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.label} className="border-b border-neutral-100 dark:border-navy-700 pb-2">
                  <Link
                    to={item.to}
                    className="block py-2 text-lg font-bold text-neutral-900 dark:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <ul className="flex flex-col">
                    {item.children.map((c) => (
                      <li key={c.label + c.to}>
                        <Link
                          to={c.to}
                          className="block py-1.5 pl-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-royal dark:hover:text-sky"
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
