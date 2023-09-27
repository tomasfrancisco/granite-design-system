import { DetailedHTMLProps, FC, LabelHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Text } from '../text';

type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
export const Label: FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={`${styles.label} ${className}`} {...props}>
      <Text as="span">{children}</Text>
    </label>
  );
};
