import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder',
  { auth: { detectSessionInUrl: true, flowType: 'implicit' } }
)

// HashRouter와 OAuth 토큰 hash 충돌 방지 — Supabase가 토큰을 처리한 뒤 즉시 정리
if (typeof window !== 'undefined' && window.location.hash.startsWith('#access_token=')) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search + '#/')
}
