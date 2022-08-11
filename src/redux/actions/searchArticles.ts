import { Dispatch } from 'redux';

import { SearchArticlesAction, ArticlesActionTypes } from '../types';
import { IArticle } from '../../types/articles';

export const searchArticles = (term: string, articles: IArticle[]) => (dispatch: Dispatch<SearchArticlesAction>) => {

	const newArr = articles
		.filter(
			article =>
				article.title?.toLowerCase().includes(term.toLowerCase()) ||
				article.description?.toLowerCase().includes(term.toLowerCase())
		)
		.map(article => {
			let newTitle = article.title?.replace(
				new RegExp(term, 'gi'),
				(match: string) => `<mark>${match}</mark>`
			)
			let newDescription = article.description?.replace(
				new RegExp(term, 'gi'),
				(match: string) => `<mark>${match}</mark>`
			)
			return {
				...article,
				title: newTitle,
				description: newDescription
			};
		});
	dispatch({ type: ArticlesActionTypes.FILTERED_VALUE_ARTICLES, payload: newArr })
};