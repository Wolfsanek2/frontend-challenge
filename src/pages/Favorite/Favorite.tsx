import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
import { CatsFeed } from '@/components';
import { appSelectors } from '@/store/slices';

export const Favorite = () => {
	const favoriteCats = useSelector(appSelectors.favoriteCats);
	return (
		<div className={styles['favorite-page']}>
			<CatsFeed
				className={styles['favorite-page__feed']}
				cats={favoriteCats}
			/>
		</div>
	);
};
