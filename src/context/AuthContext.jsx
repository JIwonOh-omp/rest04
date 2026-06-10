import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const Ctx = createContext(null)
export const useAuth = () => useContext(Ctx)

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  async function loadProfile(uid) {
    const { data } = await supabase.from('profiles').select('is_admin').eq('id', uid).single()
    setIsAdmin(data?.is_admin ?? false)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) loadProfile(u.id)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) loadProfile(u.id)
      else setIsAdmin(false)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const baseUrl = typeof window !== 'undefined'
    ? window.location.origin + window.location.pathname
    : ''

  const value = {
    user,
    isAdmin,
    loading,
    signInWithEmail: (email, pw) =>
      supabase.auth.signInWithPassword({ email, password: pw }),
    signUpWithEmail: (email, pw) =>
      supabase.auth.signUp({ email, password: pw }),
    signOut: () => supabase.auth.signOut(),
    signInWithGoogle: () =>
      supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: baseUrl } }),
    signInWithKakao: () =>
      supabase.auth.signInWithOAuth({ provider: 'kakao', options: { redirectTo: baseUrl } }),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
