/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 5-color palette
        // 1. 다크블루 (Dark Blue)
        navy: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4338ca',
          700: '#1e3a8a',
          800: '#1e2d6e',
          900: '#0f1f4a',
          950: '#0d1b2a',
        },
        // 2. 로열블루 (Royal Blue)
        royal: {
          DEFAULT: '#1e40af',
          light:   '#3b82f6',
          deep:    '#1e3a8a',
        },
        // 3. 스카이블루 포인트 컬러
        sky: {
          DEFAULT: '#0ea5e9',
          light:   '#38bdf8',
          dark:    '#0284c7',
        },
        // 4. 골드 포인트 컬러
        gold: {
          DEFAULT: '#f59e0b',
          light:   '#fbbf24',
          dark:    '#d97706',
        },
        // 5. 슬레이트 보조 컬러
        slate: {
          brand: '#475569',
        },
        // 편의 별칭
        brand: {
          DEFAULT: '#1e40af',
          deep:    '#1e3a8a',
          dark:    '#0d1b2a',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
}
