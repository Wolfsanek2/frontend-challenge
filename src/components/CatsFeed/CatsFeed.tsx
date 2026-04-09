import styles from './CatsFeed.module.scss';
import type { Cat } from '@/types';
import { Card } from '../Card';

interface CatsFeedProps {
	className?: string;
	cats: Cat[];
}

export const CatsFeed = ({ className, cats }: CatsFeedProps) => {
	return (
		<div className={`${className} ${styles['cats-feed']}`}>
			{cats.map((cat, i) => {
				return (
					<Card
						className={styles['cats-feed__card']}
						key={i}
						cat={cat}
					/>
				);
			})}
		</div>
	);
};
