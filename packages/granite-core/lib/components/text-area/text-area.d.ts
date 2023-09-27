import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";
type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label: string;
};
export declare const TextArea: FC<TextareaProps>;
export {};
