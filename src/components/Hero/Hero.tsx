import Image from "next/image"
import { PrimaryButton } from "../Buttons/Button"
import HeroBg from "../../../public/herobg.png"
import PlayStore from "../../../public/playstore.svg"
import AppleIcon from "../../../public/bi_apple.svg"
export const HeroSection = () => {
    return (
        <div className="">
        <div className="flex flex-col-reverse 2xl:w-[1700px] m-auto md:flex-row md:justify-between">
                <div className="flex flex-col gap-8 p-10 md:p-28">

                    <p className="text-3xl w-[20rem] md:w-[110%] md:text-6xl font-extrabold font-poppins md:space-y-10 pb-6">Unlock a New Level of Confidence with {" "}
                        <span className="text-[#2e396d]">
                            Drivelink
                        </span>
                    </p>

                    <p className="w-full md:w-[70%] text-xl font-poppins font-light mb-6">
                        Experience Stress-Free Travel as Our Trained and Reliable Drivers Take the Wheel of Your Car.
                    </p>

                    <div className="flex flex-col m-auto md:m-0 md:flex-row gap-4 ">
                        <PrimaryButton title={"Google Play"} icon={PlayStore} subheader={"GET IT ON"} />
                        <PrimaryButton title={"App Store"} icon={AppleIcon} subheader={"DOWNLOAD ON THE"} />
                    </div>
                  
                    
                </div>
                <div className="mt-10 md:mt-8 mb-10">
                    <Image
                        src={HeroBg}
                        alt="bg-hero"
                        height={1900}
                    />
                </div>
        </div>
        </div>
    )
}