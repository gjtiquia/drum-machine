import { DrumPad } from './DrumPad';
import { KeyboardEvent, useEffect, useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="bg-slate-800 text-white min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <header></header>

      <main className='w-full my-auto justify-self-center'>
        <h1 className='font-bold text-3xl sm:text-5xl m-10 text-center'>
          Drum Machine
        </h1>
        <div id='drum-machine' className='bg-slate-700 w-11/12 max-w-screen-sm mx-auto p-6 sm:p-10 flex flex-col items-center rounded-2xl'>
          <div id='display' className='bg-slate-800 w-10/12 text-center py-3 mb-5 text-slate-400'>Display</div>
          <div className='w-full aspect-square grid grid-cols-3 grid-rows-3 gap-3'>
            <DrumPad letter='Q' />
            <DrumPad letter='W' />
            <DrumPad letter='E' />
            <DrumPad letter='A' />
            <DrumPad letter='S' />
            <DrumPad letter='D' />
            <DrumPad letter='Z' />
            <DrumPad letter='X' />
            <DrumPad letter='C' />
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
