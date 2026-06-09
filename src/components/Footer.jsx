import { Link } from 'react-router-dom'
import { company } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-navy-950 transition-colors duration-200">
      {/* 상단 소개 */}
      <div className="mx-auto max-w-container px-4 py-16 md:px-10 lg:px-40 border-t border-neutral-200 dark:border-navy-800">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-start">
          {/* 로고 */}
          <div className="shrink-0">
            <span className="flex items-center gap-2 text-2xl font-extrabold text-royal dark:text-sky">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal dark:bg-sky text-white dark:text-navy-950 text-sm font-black">AI</span>
              {company.name}
            </span>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{company.slogan}</p>
          </div>
          <div className="flex-grow text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
            {company.intro.map((p, i) => (
              <p key={i} className="mb-3 last:mb-0">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 */}
      <div className="bg-navy-950 dark:bg-black px-4 py-10 md:px-10 lg:px-40">
        <div className="mx-auto flex max-w-container flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            {/* 주소 */}
            <div className="flex flex-col gap-1.5 text-sm text-neutral-400">
              {company.offices.map((o) => (
                <div key={o.label} className="flex flex-col gap-0.5 md:flex-row md:gap-6">
                  <span className="font-bold text-neutral-200 w-12 shrink-0">{o.label}</span>
                  <span>{o.address}</span>
                  <span>Tel {o.tel}</span>
                  <span>Fax {o.fax}</span>
                </div>
              ))}
            </div>
            {/* 유튜브 바로가기 */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-neutral-600 px-5 py-2.5 text-sm font-bold text-neutral-300 transition hover:border-sky hover:text-sky whitespace-nowrap"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
              YouTube 채널 바로가기
            </a>
          </div>

          {/* 정책 링크 + 카피라이트 */}
          <div className="flex flex-col justify-between gap-3 border-t border-neutral-800 pt-4 text-sm md:flex-row md:items-center">
            <ul className="flex flex-wrap gap-1">
              {company.footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={[
                      'px-4 first:pl-0 border-r border-neutral-700 last:border-r-0',
                      l.strong
                        ? 'font-bold text-white'
                        : 'text-neutral-500 hover:text-white transition',
                    ].join(' ')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-neutral-600">{company.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
