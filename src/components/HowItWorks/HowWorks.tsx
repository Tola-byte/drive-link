import Image from "next/image"
import iPhone from "../../../public/iphone.svg"
import logo2 from "../../../public/bg.svg"
import { ColoredCards } from "../Cards/ColoredCards"
import { WhyDeLink1, WhyDeLink2 } from "@/utils/config"
import { PlainCards } from "../Cards/PlainCards"
export const HowItWork = () => { 
    return (
        <div className="bg-[#2E396D] mb-10 2xl:w-[1700px] m-auto flex-col md:flex md:flex-col">
            <div className="text-center pt-10 m-auto">
                <h1 className="text-white text-2xl font-bold font-poppins">How it Works</h1>
            </div>
            <div className="flex flex-col md:-mt-20 md:flex-row">
            <div className="flex flex-col justify-center md:-mt-10 md:mr-6 items-center pt-10 gap-12 md:ml-[100px]">
              

            {
                WhyDeLink1?.map((item: any) => (
                    <div key={item.id}>
                        <ColoredCards title={item.title} background={item.bgColor} textColor={item.textColor} icon={item.icon} body={item.body} />
                    </div>
                ))
                }
                </div>
          
            <Image src={iPhone}
                className="m-auto"
                alt="iphone"
            />

            
            <div className="flex flex-col items-center justify-center md:pt-0 pb-10 md:pb-0 md:mr-[150px] md:mt-[130px] gap-12">
            
                {
                    WhyDeLink2?.map((item: any) => (
                        <div key={item.id}>
                            <ColoredCards title={item.title} background={item.bgColor} textColor={item.textColor} icon={item.icon} body={item.body} />
                        </div>
                    ))
                }
                
                </div>
                </div>
        </div>
    )
}
