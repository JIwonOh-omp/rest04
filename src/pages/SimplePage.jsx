import { Link } from 'react-router-dom'

export default function SimplePage({ title }) {
  return (
    <div className="bg-white dark:bg-navy-950 transition-colors duration-200">
      {/* 페이지 타이틀 배너 */}
      <div className="h-48 w-full bg-gradient-to-r from-navy-950 via-royal-deep to-royal flex items-center md:h-64">
        <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
          <p className="text-sm font-semibold tracking-widest text-sky/80 mb-2 uppercase">AIEDU</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        </div>
      </div>

      <div className="mx-auto max-w-container px-4 py-24 text-center md:px-10 lg:px-40">
        <p className="text-xl font-medium text-neutral-600 dark:text-neutral-400">
          {title} 페이지는 준비 중입니다.
        </p>
        <p className="mt-3 text-neutral-400">
          콘텐츠가 곧 추가될 예정입니다.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-royal dark:bg-sky px-7 py-3.5 font-bold text-white dark:text-navy-950 transition hover:brightness-110"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
