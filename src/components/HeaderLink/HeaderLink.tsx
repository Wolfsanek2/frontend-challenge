import { Link } from 'react-router';
import styles from './HeaderLink.module.scss';

interface HeaderLinkProps {
	className?: string;
	to: string;
	text: string;
	isActive?: boolean;
}

export const HeaderLink = ({
	className,
	to,
	text,
	isActive = false,
}: HeaderLinkProps) => {
	return (
		<Link
			className={`${className} ${styles['header-link']} ${isActive && styles['header-link--active']}`}
			to={to}
		>
			{text}
		</Link>
	);
};
