import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IArticle } from '../../types/articles';

import {
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	CardContent,
	Button,
	Typography
} from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './ArticleCard.scss';

interface ArticleProps {
	article: IArticle;
}

const ArticleCard: FC<ArticleProps> = ({ article }) => {

	const createMarkup = (html: string) => {
		return { __html: html }
	};

	return (
		<>
			<Card elevation={1} className="card" variant="outlined">
				<CardMedia
					className="card__img"
					component="img"
					alt={article.title?.slice(0, 15)}
					image={article.urlToImage}
					title="News Image"
				/>
				<CardHeader className="card__header" subheader={article.publishedAt} />
				<CardContent className="card__content">
					<Typography
						variant="h6"
						component="h6"
						gutterBottom
						dangerouslySetInnerHTML={createMarkup(article.title ? `${article.title.slice(0, 25)}...` : 'Sorry, there is no title for this article')}
					/>
					<Typography
						variant="body2"
						color="textSecondary"
						dangerouslySetInnerHTML={createMarkup(article.description ? `${article.description.slice(0, 150)}...` : 'Sorry, there is no description for this article')}
					/>
				</CardContent>
				<CardActions className="card__actions">
					<Button
						size="small"
						color="primary"
						style={{ textTransform: 'capitalize' }}
						endIcon={<ArrowForwardIcon />}
						component={Link}
						to={`/articles/${article.id}`}
					>
						Read More
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default ArticleCard;