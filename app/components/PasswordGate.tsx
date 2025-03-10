"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { createClient } from "../supabase/client"
import { Session } from "@supabase/supabase-js"

export function PasswordGate({
  children,
  redirectUrl,
}: {
  children: React.ReactNode
  redirectUrl?: string
}) {
  const supabase = createClient()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const isAdminEmail = (session?: Session) => {
    return session?.user.id === `${process.env.NEXT_PUBLIC_SUPABASE_ADMIN_ID}`
  }
  useEffect(() => {
    checkAuth()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(isAdminEmail(session ?? undefined))
      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const checkAuth = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setIsAuthenticated(isAdminEmail(session ?? undefined))
    } catch (error) {
      console.error(error)
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSending(true)

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo:
            redirectUrl != null
              ? `${window.location.origin}/${redirectUrl}`
              : window.location.href,
        },
      })

      if (error) {
        setError(error.message)
      } else {
        setEmailSent(true)
      }
    } catch (error) {
      console.error(error)
      setError("An error occurred. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to access this page
          </h2>
        </div>

        {emailSent ? (
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Check your email for the magic link to sign in.
            </p>
            <p className="text-sm text-gray-500">
              Didn&apos;t receive the email?{" "}
              <button
                onClick={() => setEmailSent(false)}
                className="text-indigo-600 hover:text-indigo-500"
              >
                Try again
              </button>
            </p>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded relative block w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={isSending}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Sending...
                  </>
                ) : (
                  "Send Magic Link"
                )}
              </button>
            </div>

            <p className="text-sm text-center text-gray-600">
              A secure login link will be sent to your email
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
