import { CardContainer, CardItem } from "./subComponents/effect3d"

const shoe = 'shoes.png'
const arrow = 'arrow.svg'

const Hero2 = () => {
    return (
        <div className="h-screen w-full flex-col items-center justify-center-mt-10">
            <div>
                <CardContainer>
                    <CardItem>
                        <img className="" src={shoe} alt="" />
                    </CardItem>
                </CardContainer>
            </div>
            <div className="flex-col items-center justify-center text-4xl">
                <div className="text-center ">
                    HIKE SNEAKERS
                </div>
                <div className="flex items-center justify-center text-xl cursor-pointer ">
                    <div>SHOP NOW</div>
                    <div>
                        <img className="w-8" src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2


