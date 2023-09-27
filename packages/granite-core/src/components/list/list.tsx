import { DetailedHTMLProps, FC, HTMLAttributes, OlHTMLAttributes } from "react";
import styles from "./list.module.css";

type UlProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
type OlProps = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;
type ListProps = ({ as?: "ul" } & UlProps) | ({ as?: "ol" } & OlProps);

export const List: FC<ListProps> = (props) => {
  switch (props.as) {
    case "ol":
      return <ol className={styles.ol} {...props} />;
    default:
    case "ul":
      return <ul className={styles.ul} {...props} />;
  }
};
