import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './link.module.css';

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: FC<LinkProps> = (props) => (
  <a className={styles.link} {...props} />
);
