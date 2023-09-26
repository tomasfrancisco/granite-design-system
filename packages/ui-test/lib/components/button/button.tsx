import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
