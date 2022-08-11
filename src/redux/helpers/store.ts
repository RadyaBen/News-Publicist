import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkDispatch } from 'redux-thunk';

import { ArticlesAction, SearchArticlesAction } from './../types';
import { rootReducer, RootState } from '../helpers';

const stringMiddleware = () => (next: any) => (action: any) => {
	if (typeof action === 'string') {
		return next({
			type: action
		});
	}
	return next(action);
}

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
	composeEnhancers(applyMiddleware(ReduxThunk, stringMiddleware))
);

export type AppDispatch = ThunkDispatch<RootState, any, ArticlesAction | SearchArticlesAction>;

export { store };