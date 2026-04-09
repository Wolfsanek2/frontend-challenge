import { useCallback, useEffect, useRef } from 'react';
import { useLazyGetAllCatsQuery } from '@/api';
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { appActions, appSelectors } from '@/store/slices';
import { CatsFeed } from '@/components';

export const Home = () => {
	const dispatch = useAppDispatch();
	const allCats = useAppSelector(appSelectors.allCats);
	const page = useAppSelector(appSelectors.currentPage);
	const [fetchAllCats, { isFetching }] = useLazyGetAllCatsQuery();
	const loadingTriggerRef = useRef<HTMLDivElement>(null);
	console.log('page:', page);

	const fetchCats = useCallback(async () => {
		const cats = await fetchAllCats(page).unwrap();
		dispatch(appActions.addAllCats(cats));
		dispatch(appActions.incrementPage());
	}, [dispatch, fetchAllCats, page]);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !isFetching) {
				fetchCats();
			}
		});

		if (loadingTriggerRef.current) {
			observer.observe(loadingTriggerRef.current);
		}
		return () => observer.disconnect();
	}, [fetchCats, isFetching]);
	return (
		<div className={styles['home']}>
			<CatsFeed className={styles['home__feed']} cats={allCats} />
			{isFetching && (
				<div className={styles['home__loading-text']}>
					... Загружаем еще котиков ...
				</div>
			)}
			<div
				className={styles['home__loading-trigger']}
				ref={loadingTriggerRef}
			></div>
		</div>
	);
};
