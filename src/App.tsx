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

      <main className='justify-self-center'>
        <div id='drum-machine' className='bg-slate-700 p-10 flex flex-col items-center rounded-2xl'>
          <div id='display' className='bg-slate-800 w-64 text-center py-3 mb-5 text-slate-400'>Display</div>
          <div className='grid grid-cols-3 gap-4'>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>Q</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>W</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>E</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>A</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>S</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>D</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>Z</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>X</button>
            <button className='drum-pad bg-slate-600 w-32 h-32 text-3xl'>C</button>
          </div>
        </div>
      </main>

      <footer className="flex justify-end">
        <a target="_blank" href="https://github.com/gjtiquia/drum-machine" className="p-3" rel="noreferrer">
          <img alt="GitHub link" src='/github.svg' className="w-8"></img>
        </a>
      </footer>
    </div>
  )
}

export default App
