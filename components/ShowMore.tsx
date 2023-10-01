"use client"

import { useRouter } from "next/navigation"

import CustomButton from "./CustomButton"
import {ShowMoreProps} from '@/types'
import { updatedSearchParams } from "@/utils"

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {

    const router = useRouter(); 

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updatedSearchParams("limit", String(newLimit))

        router.push(newPathName, {scroll: false})
    }

  return (
    <div className="w-full flex items-center justify-center mt-8">
      {!isNext && (
        <CustomButton 
            title='Show More' 
            btnType="button" 
            containerStyles="bg-primary-blue rounded-full text-white" 
            handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
