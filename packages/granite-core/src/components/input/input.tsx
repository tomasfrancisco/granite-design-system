import { DetailedHTMLProps, FC, InputHTMLAttributes, useId } from 'react';
import styles from './input.module.css';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  placeholder?: never;
};
export const Input: FC<InputProps> = ({
  className,
  label,
  required,
  id,
  ...props
}) => {
  const internalId = useId();
  return (
    <div className={`${styles.container} ${className}`}>
      <input
        id={id ?? internalId}
        className={styles.input}
        pattern=".*"
        placeholder=""
        {...props}
      />
      <label htmlFor={id ?? internalId} className={styles.label}>
        {label}
        {required && (
          <span aria-hidden={true} className={styles.required}>
            &nbsp;*&nbsp;
          </span>
        )}
      </label>
    </div>
  );
};
