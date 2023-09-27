import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    placeholder?: never;
};
export declare const Input: FC<InputProps>;
export {};
