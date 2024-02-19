import Image from "next/image"
import React from "react"

export const PrimaryButton: React.FC<{ title: string; icon: string; subheader: string }> = ({icon, title, subheader}) => {
    return (
        <button className="bg-[black] rounded-md w-[200px] flex gap-4 hover:bg-[#2E396D]">
            <span className="pl-4 pt-2.5">
                <Image
                    src={icon}
                    alt={"PlayStore"}     
                    width={30}
                />
            </span>

            <span className="flex flex-col py-2 px-1">
                <p className="text-white text-xs font-semibold text-left">{subheader}</p>
                <p className="text-white font-bold text-left">{title}</p>
            </span>

        </button>
    )
}