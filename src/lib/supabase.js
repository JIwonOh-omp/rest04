import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  { auth: { detectSessionInUrl: true, flowType: 'implicit' } }
)

// HashRouter와 OAuth 토큰 hash 충돌 방지 — Supabase가 토큰을 처리한 뒤 즉시 정리
if (typeof window !== 'undefined' && window.location.hash.startsWith('#access_token=')) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search + '#/')
}
