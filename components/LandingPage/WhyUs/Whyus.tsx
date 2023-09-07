import React from 'react'
import Image from 'next/image'
import "./Whyus.scss"


export const Whyus = () => {

    const svgArray = ["Audi" , "Chevrolet", "Citroen", "Ford", "Honda", "Jeep", "Kia", "Mitsubishi", "Nissan", "Subaru", "Suzuki"]

    const MapSvgs = svgArray.map( brand => {
        return (
            <Image
            src={`Images/Logos/${brand}.svg`}
                width={80}
                height={80}
                alt={`${brand} Logo`}
                className='whitespace-nowrap mx-16'
            />
        )
    })

  return (
    <div className='Whyus-section relative'>


        <div className='logo-bar absolute top-0'>

            <div className='logo-slide'>
                <div className='flex '>
                  {MapSvgs}  
                </div>
            </div>

            <div className='logo-slide'>
                <div className='flex '>
                  {MapSvgs}  
                </div>
            </div>
        </div>

        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto text-neutral-700'>
          <h1>hello</h1>
          </div>



    </div>
  )
}
