import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-800 text-white min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <header>
        <h1 className='font-bold text-5xl m-10 text-center'>
          Drum Machine
        </h1>
      </header>

      <main>
        <h1>
          Hello World!
        </h1>
      </main>

      <footer className="flex justify-end">
        <a target="_blank" href="https://github.com/gjtiquia/markdown-previewer" className="p-3" rel="noreferrer">
          <img alt="GitHub link" src='/github.svg' className="w-8"></img>
        </a>
      </footer>
    </div>
  )
}

export default App
