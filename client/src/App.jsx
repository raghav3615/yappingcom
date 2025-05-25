import React, { useState } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-orange-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-bold text-xl">My Blog</div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-black hover:text-gray-300">Home</a>
            <a href="/blog" className="text-black hover:text-gray-300">Blog</a>
            <a href="/about" className="text-black hover:text-gray-300">About</a>
            <a href="/contact" className="text-black hover:text-gray-300">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-black focus:outline-none"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700 p-4">
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-black hover:text-gray-300">Home</a>
              <a href="/blog" className="text-black hover:text-gray-300">Blog</a>
              <a href="/about" className="text-black hover:text-gray-300">About</a>
              <a href="/contact" className="text-black hover:text-gray-300">Contact</a>
            </div>
          </div>
        )}
      </nav>
      <div>
      </div>
    </>
  )
}

export default App
