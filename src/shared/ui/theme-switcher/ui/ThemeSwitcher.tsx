import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Theme, useTheme } from 'app/providers/theme-provider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/button/Button';

interface IThemeSwitcher {
    className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
