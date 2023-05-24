import {FC} from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/app-link/AppLink";
import {ThemeSwitcher} from "shared/ui/theme-switcher";
interface INavbarProps {
    className?: string
}

const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [])}>
           <div className={styles.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Main Page</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>

           </div>
        </div>
    );
};

export default Navbar;