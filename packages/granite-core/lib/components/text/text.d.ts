import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
type SpanElementProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
type ParagraphElementProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
type HeadingElementProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type BaseProps = {
    size?: "xs" | "sm" | "base" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    weight?: "light" | "normal" | "bold";
    isHeadingFont?: boolean;
};
type TextProps = BaseProps & (({
    as?: "span";
} & SpanElementProps) | ({
    as?: "p";
} & ParagraphElementProps) | ({
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HeadingElementProps));
export declare const Text: FC<TextProps>;
export {};
