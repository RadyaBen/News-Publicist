import { combineReducers } from 'redux';

import { articles } from '../reducers';
import { searchArticles } from '../reducers';

export const rootReducer = combineReducers({
	articles: articles,
	searchArticles: searchArticles
});

export type RootState = ReturnType<typeof rootReducer>;