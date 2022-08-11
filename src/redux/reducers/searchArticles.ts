import { SearchArticlesAction, ArticlesActionTypes, SearchArticlesState } from '../types';

const initialState: SearchArticlesState = {
	searchInput: '',
	filteredArticles: []
}

export const searchArticles = (state: SearchArticlesState = initialState, action: SearchArticlesAction): SearchArticlesState => {
	switch (action.type) {
		case ArticlesActionTypes.SEARCH_INPUT_VALUE:
			return {
				...state,
				searchInput: action.payload
			}
		case ArticlesActionTypes.FILTERED_VALUE_ARTICLES:
			return {
				...state,
				filteredArticles: action.payload
			}
		default:
			return state;
	}
}