import { useState } from 'react';
import styles from './Card.module.scss';
import { useAppDispatch } from '@/hooks';
import type { Cat } from '@/types';
import { appActions } from '@/store/slices';

import Heart from '@/assets/heart.svg?react';
import Skeleton from '@/assets/skeleton.svg?react';

interface CardProps {
	className?: string;
	cat: Cat;
}

export const Card = ({ className, cat }: CardProps) => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className={`${className} ${styles['card-wrapper']}`}>
			{isLoading && (
				<Skeleton className={`${styles['card-wrapper__skeleton']}`} />
			)}
			<div
				className={`${styles['card-wrapper__card']} ${styles['card']}`}
				style={{ opacity: isLoading ? 0 : 1 }}
			>
				<img
					className={styles['card__img']}
					src={cat.url}
					onLoad={() => {
						setIsLoading(false);
					}}
				/>
				<Heart
					className={`${styles['card__like-btn']} ${styles['like-btn']} ${cat.isFavorite ? styles['like-btn--is-favorite'] : ''}`}
					onClick={() => {
						if (cat.isFavorite) {
							dispatch(appActions.removeCatFromFavorites(cat.id));
						} else {
							dispatch(appActions.addCatToFavorites(cat));
						}
					}}
				/>
			</div>
		</div>
	);
};
