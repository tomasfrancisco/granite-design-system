import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./text.module.css";

type SpanElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type ParagraphElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

type HeadingElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

type CommonProps = {
  [K in keyof SpanElementProps &
    ParagraphElementProps &
    HeadingElementProps]: SpanElementProps[K] &
    ParagraphElementProps[K] &
    HeadingElementProps[K];
};

type BaseProps = {
  size?:
    | "xs"
    | "sm"
    | "base"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  weight?:
    | "light"
    | "normal"
    // | 'medium'
    // | 'semibold'
    | "bold";
  // | 'extrabold';
  isHeadingFont?: boolean;
};

type TextProps = BaseProps &
  (
    | ({
        as?: "span";
      } & SpanElementProps)
    | ({ as?: "p" } & ParagraphElementProps)
    | ({ as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" } & HeadingElementProps)
  );

export const Text: FC<TextProps> = ({
  as = "span",
  size = "base",
  weight = "normal",
  className = "",
  isHeadingFont = false,
  children,
  ...props
}) => {
  const commonProps: CommonProps = {
    className: `${styles.text} ${styles[`size--${size}`]} ${
      styles[`weight--${weight}`]
    } ${isHeadingFont ? styles.headingFont : styles.bodyFont} ${className}`,
    ...props,
  };

  switch (as) {
    case "h1":
      return <h1 {...commonProps}>{children}</h1>;
    case "h2":
      return <h2 {...commonProps}>{children}</h2>;
    case "h3":
      return <h3 {...commonProps}>{children}</h3>;
    case "h4":
      return <h4 {...commonProps}>{children}</h4>;
    case "h5":
      return <h5 {...commonProps}>{children}</h5>;
    case "h6":
      return <h6 {...commonProps}>{children}</h6>;
    case "p":
      return <p {...commonProps}>{children}</p>;
    case "span":
    default:
      return <span {...commonProps}>{children}</span>;
  }
};
