import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './menu.module.css';
import classnames from 'classnames';

type MenuProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  direction?: 'horizontal' | 'vertical';
};
export const Menu: FC<MenuProps> = ({ direction = 'horizontal', ...props }) => {
  return (
    <ul
      className={classnames({
        [styles.horizontalMenu]: direction === 'horizontal',
        [styles.verticalMenu]: direction === 'vertical',
      })}
      {...props}
    ></ul>
  );
};
