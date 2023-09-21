import { CarProps, filterProps } from "@/types";



export async function fetchCars(filters: filterProps){
    const headers = {
        'X-RapidAPI-Key': 'f74546f843msh4c0e8b178cc7c56p1e86b8jsndee5e93ac461',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const { manufacturer, year, fuel, limit, model} = filters

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
   
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const getCarImage = (car:CarProps, angle? : string ) =>{
    const url = new URL("https://cdn.imagin.studio/getimage")

    const {year, make, model} = car

    url.searchParams.append("customer", "hrjavascript-mastery")

    url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

    return `${url}`
  }

  export const updateSearchParams = (type: string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
  }