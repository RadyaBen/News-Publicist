import { FC } from 'react';

import { SearchBar } from '../../containers/SearchBar/SearchBar';
import { Counter } from '../Counter/Counter';
import { Articles } from '../../containers/Articles/Articles';

const MainPage: FC = () => {
	return (
		<>
			<SearchBar />
			<Counter />
			<Articles />
		</>
	);
}

export { MainPage };