import { FC } from 'react';

import { SearchBar } from '../../components/SearchBar';
import { Counter } from '../../components/Counter';
import { Articles } from '../../components/Articles';

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