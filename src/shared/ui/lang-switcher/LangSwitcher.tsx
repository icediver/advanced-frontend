import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/button/Button';

interface ILangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
