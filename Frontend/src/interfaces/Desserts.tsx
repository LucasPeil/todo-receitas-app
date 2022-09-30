import { AnchorHTMLAttributes, DetailedHTMLProps, } from "react";

export interface IDesserts{
    id: number;
    name: string;
    
}
export interface INewDesserts{
    id: number;
    name: string;
    image: string;
    ingredients: Array<string>
    howMakeIt:string
}

/* DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>*/