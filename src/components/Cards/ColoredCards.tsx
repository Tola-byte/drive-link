import Image from "next/image"
import { ReactComponentElement } from "react"

export const ColoredCards: React.FC<{ title: string, body: string,textColor: string, icon: any, background: string }> = ({ title, textColor, body,background, icon }) => {
    return (
        <div className="rounded-xl w-[20.5rem] md:w-[400px] hover:scale-105" style={{background: background}}>
            <div className="flex flex-col">
                <span className="px-5 py-3">
                    <Image
                        src={icon}
                        alt="icons"
                    />
                </span>

                <div>
                    <p className="py-3 px-5 font-poppins font-bold" style={{color: textColor}}>{title}</p>
                    <p className="py-3 px-5 mb-10 font-poppins">
                        {body}
                    </p>
                </div>
            </div>

        </div>
    )
}