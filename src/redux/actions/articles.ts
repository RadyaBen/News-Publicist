import { Dispatch } from 'redux';
import axios from 'axios';

import { ArticlesAction, ArticlesActionTypes } from '../types/articlesType';
import { IArticle } from '../../types/articles';

export const fetchArticles = () => async (dispatch: Dispatch<ArticlesAction>) => {
	try {
		dispatch({ type: ArticlesActionTypes.ARTICLES_FETCHING });

		const _apiBase = 'https://newsapi.org/v2/everything?domains=wsj.com&language=en&apiKey=';
		const _API_KEY = process.env.REACT_APP_NEWS_API_KEY;

		const response = await axios.get(`${_apiBase + _API_KEY!}`);

		const _transformArticles = (): IArticle[] => {
			return response.data.articles.map((article: IArticle) => {

				const getDaySuffix = (d: number) => {
					if (d > 3 && d < 21) return 'th';
					switch (d % 10) {
						case 1: return "st";
						case 2: return "nd";
						case 3: return "rd";
						default: return "th";
					}
				};

				const dateObj = new Date(article.publishedAt);

				const date = dateObj.getDate();
				const month = ["January", "February", "March", "April", "May", "June",
					"July", "August", "September", "October", "November", "December"][dateObj.getMonth()];
				const year = dateObj.getFullYear();

				let formattedDate = month + ' ' + date + getDaySuffix(date) + ', ' + year;

				const key = Math.random().toString(36).substr(2, 10);
				return {
					id: key,
					urlToImage: article.urlToImage,
					publishedAt: formattedDate,
					title: article.title,
					description: article.description,
					content: article.content,
				}
			})
		}
		dispatch({ type: ArticlesActionTypes.ARTICLES_FETCHED, payload: _transformArticles() });
	} catch (e) {
		dispatch({ type: ArticlesActionTypes.ARTICLES_FETCHING_ERROR });
	}
}