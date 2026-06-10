# 02. Supabase 인증 및 게시판 기능 구현

작업일: 2026-06-10

## 목표
Supabase를 백엔드로 연결하여 로그인/회원가입(이메일+소셜) 기능과 관리자 전용 공지사항 게시판을 구현한다.

## 기술 선택
- **@supabase/supabase-js v2** — 인증(Auth) + DB(PostgreSQL) 클라이언트
- **Supabase Auth** — 이메일/비밀번호, Google OAuth, Kakao OAuth
- **Supabase RLS(Row Level Security)** — 관리자만 게시글 CUD 가능, 전체 공개 읽기
- 환경변수: `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` (`.env.local` + GitHub Secrets)

## DB 설계

### profiles 테이블
| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid (PK, FK → auth.users) | 사용자 ID |
| email | text | 이메일 |
| is_admin | boolean (default false) | 관리자 여부 |
| created_at | timestamptz | 생성일 |

- 회원가입 시 트리거(`on_auth_user_created`)로 자동 생성
- Supabase Table Editor에서 `is_admin = true` 로 관리자 지정

### posts 테이블
| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| id | uuid (PK) | 게시글 ID |
| title | text | 제목 |
| content | text | 본문 |
| category | text (default 'notice') | 카테고리 (notice / board) |
| created_at | timestamptz | 작성일 |
| user_id | uuid (FK → auth.users) | 작성자 |

### RLS 정책
- SELECT: 전체 공개
- INSERT / DELETE: `profiles.is_admin = true` 인 인증 사용자만

## 구현 범위

| 파일 | 내용 |
| --- | --- |
| `src/lib/supabase.js` | Supabase 클라이언트 초기화, HashRouter OAuth hash 충돌 방지 |
| `src/context/AuthContext.jsx` | user / isAdmin / loading 상태, 로그인·로그아웃·소셜 로그인 함수 |
| `src/components/ProtectedRoute.jsx` | 비로그인 → /login 리디렉트, adminOnly 옵션 |
| `src/pages/Login.jsx` | 로그인/회원가입 탭, Google·Kakao 소셜 버튼, 에러/성공 메시지 |
| `src/pages/BoardDetail.jsx` | 공지 상세 페이지, 관리자 삭제 버튼 |
| `src/pages/AdminWrite.jsx` | 관리자 전용 게시글 작성 폼 (카테고리·제목·본문) |
| `src/pages/Support.jsx` | Notice 컴포넌트 Supabase 연동, 로딩/빈 상태, 페이지네이션 |
| `src/components/Header.jsx` | 로그인/로그아웃 버튼, 관리자 글쓰기 버튼 (데스크탑+모바일) |
| `src/App.jsx` | `/login`, `/admin/write`, `/support/notice/:id` 라우트 추가 |
| `src/main.jsx` | AuthProvider 추가 |
| `.github/workflows/deploy.yml` | GitHub Secrets로 Supabase 환경변수 빌드 주입 |

## 주요 이슈 및 해결

### HashRouter + Supabase OAuth 충돌
- **문제**: OAuth 리디렉트 시 URL이 `#access_token=...` 형태로 반환되어 HashRouter가 잘못된 경로로 해석
- **해결**: `supabase.js` 모듈 로드 시점에 hash에 `access_token=` 포함 여부를 확인하고 `#/`로 즉시 교체. Supabase는 클라이언트 생성 시 `detectSessionInUrl: true`로 토큰을 먼저 처리하므로 세션은 보존됨

### GitHub Secrets 미설정으로 빈 값 번들
- **문제**: Secrets 추가 전에 빌드가 실행되어 `VITE_SUPABASE_URL`이 빈 문자열로 번들 → `createClient('')` 호출 → 앱 전체 크래시 → 빈 페이지
- **해결**: `supabase.js`에 fallback placeholder 값 적용 후 재빌드 트리거

### Supabase Site URL 미설정으로 인증 이메일 오류
- **문제**: Supabase 기본 Site URL이 `http://localhost:3000`이라 인증 이메일 링크가 localhost로 리디렉트 → `otp_expired` 에러
- **해결**: Supabase → Authentication → URL Configuration에서 Site URL을 `https://jiwonoh-omp.github.io/rest04/`로 변경

## 검증
- `npm run build` 성공 (94 modules, 447 kB)
- 로컬 `npm run dev` 동작 확인
- GitHub Actions 배포 성공

## 배포
- 배포 URL: https://jiwonoh-omp.github.io/rest04/
- main 브랜치 push → GitHub Actions 자동 빌드·배포

## TODO (후속)
- Google / Kakao OAuth 활성화 (각 플랫폼 개발자 콘솔 설정 필요)
- 문의하기(Contact) 폼 Supabase 연동
- 홈 페이지 공지사항 섹션을 Supabase 실시간 데이터로 교체
