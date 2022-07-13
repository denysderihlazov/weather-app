import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name?: string;
    info?: string;
}