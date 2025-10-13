'use client'

import { useEffect } from 'react'

export default function ConfirmPage() {
  useEffect(() => {
    // Handle email confirmation
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.init()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Confirming your email...
        </h1>
        <p className="text-gray-600 mb-6">
          Please wait while we confirm your email address.
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  )
}
