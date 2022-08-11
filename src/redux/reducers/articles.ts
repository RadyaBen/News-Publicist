import { ArticlesAction, ArticlesActionTypes, ArticlesState } from '../types';

const initialState: ArticlesState = {
	articles: [],
	articlesLoadingStatus: 'idle',
}

export const articles = (state: ArticlesState = initialState, action: ArticlesAction): ArticlesState => {
	switch (action.type) {
		case ArticlesActionTypes.ARTICLES_FETCHING:
			return {
				...state,
				articlesLoadingStatus: 'loading'
			}
		case ArticlesActionTypes.ARTICLES_FETCHED:
			return {
				...state,
				articles: action.payload,
				articlesLoadingStatus: 'idle'
			}
		case ArticlesActionTypes.ARTICLES_FETCHING_ERROR:
			return {
				...state,
				articlesLoadingStatus: 'error'
			}
		default: 
			return state;
	}
}