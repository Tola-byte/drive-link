import { WhyDLink } from "@/utils/config"
import { PlainCards } from "../Cards/PlainCards"

export const YDriveLink = () => {
    return (
        <div className="flex flex-col gap-6 2xl:w-[1700px] m-auto">

            <p className="text-[#2E396D] text-2xl font-poppins font-bold text-center">Why DriveLink?</p>
            <div className="flex gap-3 md:gap-8 flex-wrap justify-center md:w-[98%] items-center m-auto">
            {
                WhyDLink?.map((item) => (
                    <div key={item.id}>

                    <PlainCards title={item.title} body={item.body} icon={item.icon}                    
                        />
                        </div>
                ))
                }
            </div>
        </div>
    )
}