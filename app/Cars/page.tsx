import React from 'react'
import "./cars.scss"
import { SearchBar, CustomFilter, CarCard } from '@/components'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/components/Info/info'
import ShowMore from '@/components/Reusable/ShowMore/ShowMore'

const  Cars = async ({searchParams}) => {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || "2022",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams. model || "",
  })
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (

    <div className='cars'>
        <div className='max-w-[1440px] mx-auto text-neutral-700 sm:px-12 px-6'>
            <h1 className="text-2xl md:text-4xl font-semibold"> Car Catalogue </h1>
            <p className='text-md md:text-xl text-neutral-500 mt-2'>Exlplore our collection and find what you are looking for</p>

            <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
                <SearchBar
                pageNumber= {(searchParams.pageNumber || 10)/10}
                isNext= {(searchParams.limit || 10) > allCars.length}/> 

               



                <div className='flex justify-start flex-wrap items-center gap-2'>
                    <CustomFilter title="fuel" options={fuels}/>
                    <CustomFilter title="year" options={yearsOfProduction}/>
                    
                </div>
            </div>

            {!isDataEmpty ? (
                  <section>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                      {allCars?.map((car)=> (
                      <CarCard car ={car}/>
                      ))}

                    </div>
                        <ShowMore
                        pageNumber={(searchParams.limit || 10)/ 10}
                        isNext={(searchParams.limit || 10) > allCars.length}
                        
                        />
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

//app shows 10 cars per page by default, which divided by 10 shows thats we are on the first page