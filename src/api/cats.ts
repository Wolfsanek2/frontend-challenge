import type { Cat } from '@/types';
import { api } from '.';
import { API_URLS } from '@/const';

interface CatDto {
	id: string;
	url: string;
}

type CatResponse = CatDto[];

const catsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllCats: builder.query<Cat[], number | void>({
			query: (page = 0) => ({
				url: API_URLS.cats,
				method: 'GET',
				params: { page: page || 0, limit: 10 },
			}),
			transformResponse: (response: CatResponse) => {
				return response.map((cat) => ({
					id: cat.id,
					url: cat.url,
					isFavorite: false,
				}));
			},
		}),
	}),
});

export const { useLazyGetAllCatsQuery } = catsApi;
