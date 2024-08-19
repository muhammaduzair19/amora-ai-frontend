import { useState } from 'react'
import ModelOne from './components/model1'
import ModelTwo from './components/model2'
import ModelThree from './components/model3'

function App() {

  return (
    <div className= 'w-full bg-slate-900 text-white'>
      <h1 className='text-4xl text-center font-bold p-6'>AMORA</h1>
      <div className='w-full min-h-screen flex justify-between md:gap-2 flex-col md:flex-row'>
        <ModelOne />
        <ModelTwo />
        <ModelThree />
      </div>
    </div>
  )
}

export default App
