import Image from "next/image"
import { PrimaryButton } from "../Buttons/Button"
import PhoneBg from "../../../public/shortPhone.svg"
import PlayStore from "../../../public/playstore.svg"
import AppleIcon from "../../../public/bi_apple.svg"
export const DownloadAppNow = () => {
    return (
        <div className="bg-[#2e396d] text-white text-center mt-20 2xl:w-[1700px] m-auto">
            <div className="flex flex-col gap-8 justify-center">
            
                    <p className="p-4 text-3xl font-bold mt-8 font-poppins"> Download the app now!</p>
            
                <div className="flex justify-center gap-8 flex-col items-center md:flex-row">
                    <PrimaryButton title={"Google Play"} icon={PlayStore} subheader={"GET IT ON"} />
                    <PrimaryButton title={"App Store"} icon={AppleIcon} subheader={"DOWNLOAD ON THE"} />
                </div>

                <span className="mt-10 m-auto w-[20rem] md:w-[30rem] md:m-auto">
                    <Image
                        src={PhoneBg}
                        alt="phone"
                    />
                </span>

                
            </div>

        </div>
    )
}