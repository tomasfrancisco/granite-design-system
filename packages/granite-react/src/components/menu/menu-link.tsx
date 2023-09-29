import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './menu-link.module.css';

type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
type MenuLinkProps = AnchorProps;

export const MenuLink: FC<MenuLinkProps> = (props) => {
  return <a className={styles.link} {...props} />;
};
