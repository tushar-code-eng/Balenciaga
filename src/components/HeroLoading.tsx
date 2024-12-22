const load1 = 'loader1.jpg'
const load2 = 'loader2.jpg'
const load3 = 'loader3.jpg'

const HeroLoading = () => {

    const text = "BALENCIAGA"

    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="w-full overflow-hidden">
                <img className="img3-exit absolute w-full top-0 left-0 z-3" src={load3} alt="" />
            </div>

            <div className="w-full overflow-hidden">
                <img className="img2-exit absolute w-full top-0 left-0 z-4" src={load2} alt="" />
            </div>

            <div className="w-full overflow-hidden">
                <img className="img1-exit absolute w-full top-0 left-0 z-5" src={load1} alt="" />
            </div>

            <div className="w-full h-screen flex items-center justify-center bg-black full-screen-exit z-50">
                <div className="text-6xl flex gap-2 overflow-hidden text-white w-full h-screen items-center justify-center">
                    {text.split("").map((char, index) => (
                        <span key={index} className=" inline-block opacity-0 blur-sm animate" style={{ animationDelay: `${index * 0.1}s` }}>
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroLoading
