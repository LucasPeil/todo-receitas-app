import { AnchorHTMLAttributes, DetailedHTMLProps, } from "react";

export interface IDesserts{
    id: number;
    name: string;
    difficulty: number | undefined
}
export interface INewDesserts{
    id: number;
    name: string;
    image: string;
    ingredients: Array<string>
    howMakeIt:string
}

/* DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>*/