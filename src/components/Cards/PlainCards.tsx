import Image from "next/image"
import { ReactComponentElement } from "react"

export const PlainCards: React.FC<{title: string, body: string, icon: any}> = ({title, body, icon}) => {
    return (
        <div className="bg-[#EDEDED] rounded-xl w-[10rem] md:w-[400px] md:hover:scale-105">
            <div className="flex flex-col">
            <span className="px-5 py-4">
                <Image
                    src={icon}
                        alt="icons"
                        width={30}
                />
            </span>
                
                <div>
                    <p className="py-3 px-5 text-[#2E396D] font-poppins font-bold">{title}</p>
                    <p className="py-3 px-5 mb-10 font-poppins text-xs md:text-sm">
                        {body}
                    </p>
                </div>
                </div>

        </div>
    )
}