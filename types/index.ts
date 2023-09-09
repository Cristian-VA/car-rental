import { MouseEventHandler } from "react";

export interface CustomButtonsProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
}

export interface ContainerWuProps {
    title: string;
    paragraph: string;
    icon: any;
}