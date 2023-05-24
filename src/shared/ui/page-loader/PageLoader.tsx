import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface IPageLoaderProps {
	className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => (
  <div
    className={classNames(styles.PageLoader, {}, [className])}
		>
    <Loader />
  </div>
);
