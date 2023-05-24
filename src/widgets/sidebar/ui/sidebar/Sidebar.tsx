import { FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/LangSwitcher';

interface ISidebarProps {
	className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className
			])}
		>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={styles.lang} />
			</div>
		</div>
	);
};
