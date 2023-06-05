import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route-config/route-config';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button';
import { LangSwitcher } from 'shared/ui/lang-switcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
	className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();
  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={styles.collapseBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <div className={styles.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}

          >
            <MainIcon className={styles.icon} />
            <span className={styles.link}>
              {t('Главная страница')}
            </span>
          </AppLink>
        </div>

        <div className={styles.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}

          >
            <AboutIcon className={styles.icon} />
            <span className={styles.link}>{t('О сайте')}</span>
          </AppLink>
        </div>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
