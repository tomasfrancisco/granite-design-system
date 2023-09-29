import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './button.module.css';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={className ?? styles.button} {...props} />;
};
