import { FC } from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage: FC = () => {

	return (
		<div className="vertical-center">
			<div className="container">
				<h1>😮</h1>
				<h2>Oops! Page Not Be Found</h2>
				<p>Sorry, but the page you are looking for does not exist.</p>
				<Link to="/" style={{ textDecoration: "none" }}>Go to Main Page</Link>
			</div>
		</div>
	);
}

export { NotFoundPage };