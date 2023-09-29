import { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react';
import styles from './menu-item.module.css';

type MenuItemProps = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export const MenuItem: FC<MenuItemProps> = (props) => {
  return <li className={styles.item} {...props} />;
};
