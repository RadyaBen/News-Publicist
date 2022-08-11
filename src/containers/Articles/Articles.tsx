import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../hooks';
import { useTypedSelector } from '../../hooks';
import { fetchArticles } from '../../redux/actions';
import { ArticleCard } from '../../components/ArticleCard';
import { Spinner } from '../../components/Spinner';
import { ErrorMessage } from '../../components/ErrorMessage';

import { Container, Grid } from '@material-ui/core';

import './Articles.scss';

const Articles: FC = () => {
	const { articles, articlesLoadingStatus } = useTypedSelector(state => state.articles);
	const { filteredArticles, searchInput } = useTypedSelector(state => state.searchArticles);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticles())
	}, [dispatch]);

	if (articlesLoadingStatus === "loading") {
		return <Spinner />;
	} else if (articlesLoadingStatus === "error") {
		return <ErrorMessage />
	}

	return (
		<>
			<Container className="container">
				{searchInput.length > 0 ? (
					<Grid item container spacing={4} >
						{filteredArticles.map(article => (
							<Grid item key={article.id} xs={12} sm={6} md={4}>
								<ArticleCard article={article} />
							</Grid>
						))}
					</Grid>
				) : (
					<Grid item container spacing={4} >
						{articles.map(article => (
							<Grid item key={article.id} xs={12} sm={6} md={4}>
								<ArticleCard article={article} />
							</Grid>
						))}
					</Grid>
				)
				}
			</Container>
		</>
	);
};

export { Articles };