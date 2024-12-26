import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HeroLoading from './components/HeroLoading'
import Hero2 from './components/Hero2'

function App() {

  const [load, setLoad] = useState(true)

  const [isVisible, setIsVisible] = useState(false);

  const [onImage1, setOnImage1] = useState(false)
  const [onImage2, setOnImage2] = useState(false)
  const [onImage3, setOnImage3] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 7000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className={`w-full ${onImage1 ? 'bg1' : 'bgN'} ${onImage2 ? 'bg2' : 'bgN'}  ${onImage3 ? 'bg3' : 'bgN'}`}>
      <div className={`content ${isVisible ? "visible" : ""}`}>
        {isVisible && (
          <Navbar />
        )}
      </div>
      {
        load ?
          <HeroLoading />
          :
          <>
            <div className='main-animate' >
              <Hero onImage1={onImage1} onImage2={onImage2} onImage3={onImage3} setOnImage1={setOnImage1} setOnImage2={setOnImage2} setOnImage3={setOnImage3} />
            </div>
            <div className='w-full h-screen'>
              <Hero2 />
            </div>
          </>
      }

    </div>
  )
}

export default App
