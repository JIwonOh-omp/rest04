import { NavLink } from 'react-router-dom'

export default function SubPageLayout({ sectionTitle, tabs, headLabel, children }) {
  return (
    <div>
      {/* sticky 탭 네비 */}
      <div className="sticky top-20 z-30 bg-white dark:bg-navy-900 shadow-sm transition-colors duration-200">
        <div className="mx-auto max-w-container px-4 pt-10 md:px-10 lg:px-20">
          <div className="flex flex-col-reverse justify-between md:flex-row">
            <h2 className="mb-5 text-3xl font-bold leading-none text-neutral-500 dark:text-neutral-400 md:mb-10 md:text-4xl">
              {sectionTitle}
            </h2>
            <p className="mb-3 text-sm font-medium text-neutral-400 dark:text-neutral-500 md:mb-0">
              홈
              <span className="ml-2 border-l border-neutral-300 dark:border-navy-600 pl-2">{sectionTitle}</span>
              {headLabel && (
                <span className="ml-2 border-l border-neutral-300 dark:border-navy-600 pl-2 text-royal dark:text-sky">
                  {headLabel}
                </span>
              )}
            </p>
          </div>
          <ul className="flex w-full overflow-x-auto font-semibold">
            {tabs.map((t) => (
              <li key={t.to} className="shrink-0">
                <NavLink
                  to={t.to}
                  className={({ isActive }) =>
                    [
                      'block whitespace-nowrap border-b-2 px-4 py-5 text-sm transition md:px-8 md:py-6 md:text-base',
                      isActive
                        ? 'border-royal dark:border-sky text-royal dark:text-sky'
                        : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-royal dark:hover:text-sky',
                    ].join(' ')
                  }
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 페이지헤드 배너 */}
      <div className="h-48 w-full bg-gradient-to-r from-navy-950 via-royal-deep to-royal flex items-center md:h-64">
        <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
          <p className="text-sm font-semibold tracking-widest text-sky/80 mb-2">{sectionTitle}</p>
          <h3 className="text-3xl font-bold text-white md:text-4xl">{headLabel}</h3>
        </div>
      </div>

      {/* 본문 */}
      <div className="border-b border-neutral-200 dark:border-navy-800 py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors duration-200">
        {children}
      </div>
    </div>
  )
}
