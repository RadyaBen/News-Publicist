import { FC, useState } from 'react';

import { useTypedSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { ArticlesActionTypes } from '../../redux/types';
import { searchArticles } from '../../redux/actions';

import { Typography, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.scss';

const SearchBar: FC = () => {
	const [searchInput, setSearchInput] = useState('');
	
	const { articles } = useTypedSelector(state => state.articles);

	const dispatch = useAppDispatch();

	const updateInputValue = (searchValue: string) => {

		dispatch({ type: ArticlesActionTypes.SEARCH_INPUT_VALUE, payload: searchValue });

		setSearchInput(searchValue);
		
		dispatch(searchArticles(searchValue, articles));
	};

	return (
		<div className="search">
			<Typography className="search__header" variant="h6">Filter by keywords</Typography>
				<TextField 
					className="search__bar" 
					placeholder="Search news" 
					type="search"
					variant="outlined" 
					size="small"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
							</InputAdornment>
						),
					}}
					value={searchInput} 
					onChange={(e) => updateInputValue(e.target.value)} 
				/>
		</div>
	);
};

export { SearchBar };