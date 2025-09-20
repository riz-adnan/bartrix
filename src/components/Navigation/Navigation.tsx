import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

function Navigation() {
  return (
    <>
    <nav className="flex sm:justify-center space-x-4 h-10">
      
           <img
  src="/transparent.png"
  alt="Logo"
  className="w-32 h-32 object-contain mt-[-40px]"
/>
        <ThemeSwitch/>
    </nav>
    </>
  )
}

export default Navigation