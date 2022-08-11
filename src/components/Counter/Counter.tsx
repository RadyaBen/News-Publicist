import { FC } from 'react';

import { useTypedSelector } from '../../hooks';

import { Typography, Box } from '@material-ui/core';

import './Counter.scss';

const Counter: FC = () => {
	const { articles } = useTypedSelector(state => state.articles);
	const { filteredArticles, searchInput } = useTypedSelector(state => state.searchArticles);

	return (
		<Box className="counter">
			<Typography variant="h6">Results: {' '}
				{searchInput.length > 0 && searchInput.length < articles.length 
				? filteredArticles.length
				: null}
			</Typography>
		</Box>
	);
};

export { Counter };