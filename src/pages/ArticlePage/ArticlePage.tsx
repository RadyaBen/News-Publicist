import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useTypedSelector } from '../../hooks';
import { IArticle } from '../../types/articles';

import {
	Box,
	CardMedia,
	Button,
	Typography,
	Paper
} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './ArticlePage.scss';

const ArticlePage: FC = () => {

	type RouteParams = {
		articleId: string;
	};

	const [article, setArticle] = useState<IArticle>();

	const { articles } = useTypedSelector(state => state.articles);
	const { articleId } = useParams<RouteParams>();

	useEffect(() => {
		const article = articles.find((article) => article.id === articleId);
		setArticle(article);
	}, [articleId]);

	return (
		<div className="article">
			<div className="article__img">
				<CardMedia
					className="article__img"
					component="img"
					alt={article?.urlToImage}
					image={article?.urlToImage}
					title="News Image"
				/>
				<Box p={1} className="article__container">
					<Paper elevation={8} className="article__content">
						<Typography variant="h6" component="h6" gutterBottom>
							{article?.title}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{article?.content}
						</Typography>
					</Paper>
					<div className="article__action">
						<Button
							size="small"
							color="primary"
							style={{ textTransform: 'capitalize' }}
							startIcon={<ArrowBackIcon />}
							component={Link}
							to={`/`}
						>
							Back to homepage
						</Button>
					</div>
				</Box>
			</div>
		</div>
	);
};

export { ArticlePage };