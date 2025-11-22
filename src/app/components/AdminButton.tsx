'use client'

export default function AdminButton() {
  return (
    <button 
      onClick={() => {
        if (typeof window !== 'undefined' && window.netlifyIdentity) {
          window.netlifyIdentity.open()
        }
      }}
      className="text-sm text-gray-400 hover:text-white transition"
    >
      Admin Login
    </button>
  )
}
