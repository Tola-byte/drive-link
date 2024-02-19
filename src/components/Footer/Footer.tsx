import { FooterMenu } from "@/utils/config"
import Image from "next/image"
import Link from "next/link"
import facebook from "../../../public/ic_sharp-facebook.svg"
import twitter from "../../../public/ph_twitter-logo.svg"
import instagram from "../../../public/ig.svg"
export const Footer = () => {
    return (
        <div className="bg-[#0F1024] h-full m-auto 2xl:w-[1700px]">

            <div className="flex flex-col gap-10">
                <div className="flex justify-between px-28 pt-5">
                    <div className="flex flex-col gap-4 -ml-[4rem] md:ml-0">
                        <p className="font-poppins text-white font-bold text-xl ">Drivelink</p>
                        <span className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61556268306322&mibextid=2JQ9oc">
                                <Image src={facebook} alt="fb" width={20}/>
                            </a>
                            <a href="https://www.instagram.com/drivelink_official/">
                                <Image src={instagram} alt="ig" width={20} />
                            </a>
                            <a href="https://twitter.com/drivelink_offic">
                                <Image src={twitter} alt="x" width={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/drive-link/">
                                <Image src={""} alt=""/>
                            </a>
                        </span>

                    </div>
                    <div>
                        <span className="relative md:left-[400px] flex flex-col top-14 md:top-0 right-[6rem] w-full md:flex-row gap-10 md:gap-24 mt-8 mb-10">
                            {
                                FooterMenu?.map((item: { title: string, id: number, link: string }) => (
                                    <Link href={item.link} key={item.id}  legacyBehavior>
                                        <a className="cursor-pointer text-white font-poppins w-[150px] md:w-full text-sm md:text-md">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))
                            }
                        </span>
                    </div>
                    <div>

                    </div>
                </div>


                <div className="flex flex-col items-center p-3">
                    <p className="text-white text-sm md:text-md"> (c) Copyright Drivelink </p>
                      <p className="text-white text-sm md:text-md">  All Rights Reserved</p>
                </div>

            </div>

        </div>
    )
}