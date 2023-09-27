import { ComponentPropsWithoutRef, FC } from "react";
import { Text } from "../text";
import styles from "./paragraph.module.css";

type ParagraphProps = ComponentPropsWithoutRef<typeof Text>;
export const Paragraph: FC<ParagraphProps> = ({
  className,
  as: _,
  ...props
}) => {
  return (
    <Text
      as="p"
      size="xl"
      className={`${styles.paragraph} ${className}`}
      {...props}
    />
  );
};
