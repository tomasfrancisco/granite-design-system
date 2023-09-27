import { FC, ReactNode } from "react";
import styles from "./tag.module.css";

type TagProps = {
  children: ReactNode;
  className?: string;
  level: "success" | "danger" | "warning" | "info";
};

export const Tag: FC<TagProps> = ({ children, level, className }) => {
  return (
    <span className={`${styles.tag} ${styles[`level--${level}`]} ${className}`}>
      {children}
    </span>
  );
};
