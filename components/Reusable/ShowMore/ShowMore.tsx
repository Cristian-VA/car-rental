"use client"

import { useRouter } from 'next/navigation'
import { showMoreProps } from '@/types'
import CustomButton from '../CustomButton'
import { updateSearchParams } from '@/utils'


const ShowMore = ({pageNumber, isNext}:showMoreProps) => {

    const router = useRouter()

    const handleNavigation = () => {
         const newLimit = (pageNumber + 1) * 10
         const newPathname = updateSearchParams("limit", `${newLimit}`)

         router.push(newPathname)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10 mb-6'>
        {!isNext && (
            <CustomButton
            title='Show More'
            containerStyles='bg-red-600 text-neutral-50 block mx-auto rounded-xl hover:bg-rose-600 transition'
            btnType='button'
            handleClick={handleNavigation}/>
            )}
    </div>
  )
}

export default ShowMore