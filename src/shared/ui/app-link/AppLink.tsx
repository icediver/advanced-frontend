import {FC} from 'react';
import styles from './AppLink.module.scss'
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface IAppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}
export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link to={to} className={classNames(styles.AppLink, {} , [className, styles[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};





