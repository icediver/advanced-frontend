import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

const Navbar: FC<INavbarProps> = ({ className }) => (
  <div className={classNames(styles.navbar, {}, [])}>
    <div className={styles.links}>
      /
    </div>
  </div>
);

export default Navbar;
