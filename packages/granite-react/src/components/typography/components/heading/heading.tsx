import { ComponentProps, FC } from 'react';
import { Text } from '../../text';
import styles from './heading.module.css';

type HeadingProps = ComponentProps<typeof Text> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export const Heading: FC<HeadingProps> = ({ className, ...props }) => {
  console.log(props.children);
  switch (props.as) {
    default:
    case 'h1':
      return (
        <Text
          isHeadingFont={true}
          size="4xl"
          weight="bold"
          className={`${styles.h1} ${className}`}
          {...props}
        />
      );
    case 'h2':
      return (
        <Text
          isHeadingFont={true}
          size="2xl"
          weight="bold"
          className={`${styles.h2} ${className}`}
          {...props}
        />
      );
    case 'h3':
      return (
        <Text
          size="xl"
          weight="bold"
          className={`${styles.h3} ${className}`}
          {...props}
        />
      );
    case 'h4':
      return (
        <Text
          isHeadingFont={true}
          className={`${styles.h4} ${className}`}
          {...props}
        />
      );
    case 'h5':
      return (
        <Text
          isHeadingFont={true}
          className={`${styles.h5} ${className}`}
          {...props}
        />
      );
    case 'h6':
      return (
        <Text
          isHeadingFont={true}
          className={`${styles.h6} ${className}`}
          {...props}
        />
      );
  }
};
