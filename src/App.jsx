import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Videos from './pages/Videos'
import Support from './pages/Support'
import SimplePage from './pages/SimplePage'

export default function App() {
  return (
    <div className="min-w-[320px] bg-white dark:bg-navy-950 transition-colors duration-200">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 회사소개 */}
          <Route path="/about" element={<Navigate to="/about/greetings" replace />} />
          <Route path="/about/:tab" element={<About />} />

          {/* 강좌소개 */}
          <Route path="/courses" element={<Navigate to="/courses/ai-core" replace />} />
          <Route path="/courses/:topic" element={<Courses />} />

          {/* 동영상 강의 */}
          <Route path="/videos" element={<Navigate to="/videos/ai-core" replace />} />
          <Route path="/videos/:topic" element={<Videos />} />

          {/* 고객센터 */}
          <Route path="/support" element={<Navigate to="/support/notice" replace />} />
          <Route path="/support/:tab" element={<Support />} />

          {/* 법적 페이지 */}
          <Route path="/privacy" element={<SimplePage title="개인정보처리방침" />} />
          <Route path="/terms"   element={<SimplePage title="이용약관" />} />

          <Route path="*" element={<SimplePage title="페이지를 찾을 수 없습니다" />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
