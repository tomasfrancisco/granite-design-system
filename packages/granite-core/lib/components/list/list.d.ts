import { DetailedHTMLProps, FC, HTMLAttributes, OlHTMLAttributes } from "react";
type UlProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type OlProps = DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
type ListProps = ({
    as?: "ul";
} & UlProps) | ({
    as?: "ol";
} & OlProps);
export declare const List: FC<ListProps>;
export {};
