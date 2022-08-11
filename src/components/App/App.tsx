import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages';
import { ArticlePage } from '../../containers/ArticlePage';
import { NotFoundPage } from '../NotFoundPage';

const App: FC = () => {

	return (
		<>
			<Router>
				<div className='app'>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/articles/:articleId" element={<ArticlePage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export { App };