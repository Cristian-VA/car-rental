import React from 'react'
import "./cars.scss"
import { SearchBar, CustomFilter, CarCard } from '@/components'
import { fetchCars } from '@/utils'


const  Cars = async () => {

  const allCars = await fetchCars()
  console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (

    <div className='cars'>
        <div className='max-w-[1440px] mx-auto text-neutral-700 sm:px-12 px-6'>
            <h1 className="text-2xl md:text-4xl font-semibold"> Car Catalogue </h1>
            <p className='text-md md:text-xl text-neutral-500 mt-2'>Exlplore our collection and find what you are looking for</p>

            <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
                <SearchBar/>

               



                <div className='flex justify-start flex-wrap items-center gap-2'>
                    <CustomFilter title="fuel"/>
                    <CustomFilter title="year"/>
                    
                </div>
            </div>

            {!isDataEmpty ? (
                  <section>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                      {allCars?.map((car)=> (
                      <CarCard car ={car}/>
                      ))}

                    </div>

                  </section>
                ):
                (
                  <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
                    <h2> No results</h2>
                    <p> {allCars?.message}</p>
                  </div>
                )}


        </div>
    </div>
  )
}

export default  Cars