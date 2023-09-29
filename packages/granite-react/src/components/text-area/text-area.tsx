import { DetailedHTMLProps, FC, TextareaHTMLAttributes, useId } from 'react';
import styles from './text-area.module.css';

type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
};
export const TextArea: FC<TextareaProps> = ({
  className,
  label,
  required,
  id,
  ...props
}) => {
  const internalId = useId();
  return (
    <div className={`${styles.container} ${className}`}>
      <textarea
        id={id ?? internalId}
        className={styles.textarea}
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
