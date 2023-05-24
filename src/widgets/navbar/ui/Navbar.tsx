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
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={styles.mainLink}
      >
        Main Page
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/about"
      >
        About
      </AppLink>

    </div>
  </div>
);

export default Navbar;
