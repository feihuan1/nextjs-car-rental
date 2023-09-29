"use client";
//hooks usage make it client component

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

  const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
            <div className="w-full flex justify-between items-start gap-2">
                <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                    {make} {model}
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px]">
                    $
                </span>
                    {carRent}
                <span className="self-end text-[14px]">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src='/hero.png' alt="car image" fill  priority className="object-contain" />
            </div>

            <div className="relative flex w-full mt-2" >
                <div className="flex group-hover:invisible w-full justify-between text-gray">

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'manual'}
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src='/tire.svg' width={20} height={20} alt='tire' />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src='/gas.svg' width={20} height={20} alt='gas' />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
                    <CustomButton 
                        title="View More" 
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue" 
                        textStyle='text-white text-[14px] leading-[17px] font-bold' 
                        rightIcon='/right-arrow.svg' 
                        handleClick={() => setIsModalOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;