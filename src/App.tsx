import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HeroLoading from './components/HeroLoading'

function App() {

  const [load, setLoad] = useState(true)

  const [onImage1, setOnImage1] = useState(false)
  const [onImage2, setOnImage2] = useState(false)
  const [onImage3, setOnImage3] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 6500)
    return () => clearTimeout(timer)
  })

  return (
    <div className=''>
      {
        load ?
          <HeroLoading />
          :
          <div className={`px-4 main-animate ${onImage1 ? 'bg1':'bgN'} ${onImage2 ? 'bg2':'bg-white'}  ${onImage3 ? 'bg3':'bg-white'}`}>
            <Navbar />
            <Hero onImage1={onImage1} onImage2={onImage2} onImage3={onImage3} setOnImage1={setOnImage1} setOnImage2={setOnImage2} setOnImage3={setOnImage3}/>
          </div>
      }

    </div>
  )
}

export default App
