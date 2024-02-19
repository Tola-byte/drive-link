"use client";

import { useState } from 'react';
import { HeaderMenu } from "@/utils/config";
import Link from "next/link";
import LogoComponent from "../../../public/logo.svg";
import Image from "next/image";

export const Header = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex justify-between 2xl:w-[1700px] m-auto items-center px-4 sm:px-10 flex-wrap relative">
            <div className='flex justify-between w-full md:flex-none md:w-0'>
                <div className="flex -mt-4 px-2 sm:px-20 w-full sm:w-auto justify-between sm:justify-start items-center">
                    <Link href={"/"} legacyBehavior>
                        <a className="flex items-center">
                            <Image src={LogoComponent} alt="" width={50} height={50} />
                            <h3 className="text-[#2e396d] px-4 cursor-pointer font-poppins font-bold text-xl md:text-2xl md:mt-0 sm:text-base">Drivelink</h3>
                        </a>
                    </Link>
                </div>

                <button className="sm:hidden p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>


            <div className={`absolute sm:relative top-0 left-0 w-full sm:w-auto transition-opacity duration-500 ease-in-out ${!isMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'} flex-col sm:flex-row gap-8 sm:gap-4 mt-14 sm:mt-0 justify-center sm:justify-end bg-white sm:bg-transparent shadow-md sm:shadow-none z-20`}>
                {HeaderMenu?.map((item: { title: string; id: number; link: string }) => (
                    <Link href={item.link} key={item.id} legacyBehavior>
                        <a className="cursor-pointer text-sm sm:text-base px-10 py-8 text-center" onClick={() => setIsMenuOpen(false)}>
                            {item.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};
