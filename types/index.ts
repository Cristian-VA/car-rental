import { MouseEventHandler } from "react";

export interface CustomButtonsProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface ContainerWuProps {
    title: string
    paragraph: string
    icon: any
    styles: string
    customer: string
    name:string
    position: string

}

export interface SearchManufacturerProps {
    setManufacturer: (manufacturer:string) => void
    manufacturer: "string"
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface filterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface OptionProps{
    title: string,
    value: string
}

export interface customFilterProps {
    title: string,
    options: OptionProps[]
}

export interface showMoreProps{
    pageNumber: number
    isNext: boolean
}