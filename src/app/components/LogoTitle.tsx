'use client'

interface LogoTitleProps {
  logo?: string
  title: string
}

export default function LogoTitle({ logo, title }: LogoTitleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      {logo && (
        <img 
          src={logo} 
          alt="Logo" 
          className="h-16 w-16 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <h1 className="text-5xl font-bold text-gray-900">
        {title}
      </h1>
    </div>
  )
}
