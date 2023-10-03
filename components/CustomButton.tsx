"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";


const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyle, rightIcon }:CustomButtonProps) => {
  return (
    <button
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      disabled={false}
      type={btnType || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
            <Image src={rightIcon} alt='right icon' fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
