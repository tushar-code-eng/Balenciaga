const men = 'men2.jpg'
const women = 'women2.jpg'
const discover = '/discover.jpg'

const Hero = ({onImage1,onImage2,onImage3,setOnImage1,setOnImage2,setOnImage3}:{onImage1:any,onImage2:any,onImage3:any,setOnImage1:any,setOnImage2:any,setOnImage3:any}) => {
    
    return (
        <div className="w-full">
            <div className="leading-none lg:hidden md:text-[6.5rem] sm:text-[5.5rem] text-[3.5rem] text-center rotate-text2">
                BALENCIAGA
            </div>
            <div className="flex w-full p-2 ">
                <div className="text-[6.5rem] ">
                    <div className="rotate-text top-[3.6rem] leading-none hidden lg:inline-block ">
                        BALENCIAGA
                    </div>
                </div>
                <div className="lg:flex w-full lg:gap-6 text-center">
                    <div className="lg:w-[27.62rem]  mt-5 relative overflow-hidden inline-block" onMouseEnter={() => setOnImage1(true)} onMouseLeave={() => setOnImage1(false)}>
                        <img src={men} alt="" className=" overflow-hidden lg:grayscale hover:grayscale-0 cursor-pointer transition-all duration-500 " />
                        <p className={`absolute bottom-5 lg:bottom-10 left-2 text-3xl text-white lg:${onImage1 ? 'block' : 'hidden'}`}>SHOP MEN</p>
                    </div>
                    <div className="lg:w-[27.62rem]  relative overflow-hidden inline-block " onMouseEnter={() => setOnImage2(true)} onMouseLeave={() => setOnImage2(false)}>
                        <img src={women} alt="" className=" overflow-hidden lg:grayscale hover:grayscale-0 cursor-pointer transition-all duration-500" />
                        <p className={`absolute bottom-5 lg:bottom-16 left-2 text-3xl text-white lg:${onImage2 ? 'block' : 'hidden'}`}>SHOP WOMEN</p>
                    </div>
                    <div className="lg:w-[27.62rem] lg:mt-5  relative overflow-hidden inline-block " onMouseEnter={() => setOnImage3(true)} onMouseLeave={() => setOnImage3(false)}>
                        <img src={discover} alt="gif" className=" overflow-hidden lg:grayscale hover:grayscale-0 cursor-pointer transition-all duration-500" />
                        <p className={`absolute bottom-5 lg:bottom-10 left-2 text-3xl text-white lg:${onImage3 ? 'block' : 'hidden'}`}>DISCOVER STYLE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
