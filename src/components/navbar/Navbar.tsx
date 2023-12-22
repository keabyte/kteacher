import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="mb-8 mt-1">
				<div className="flex py-4 px-10">
					<Link to="/">
						<div className="flex-1">Hangul Teacher</div>
					</Link>
					<div className="flex flex-1 justify-end gap-10">
						<Link to="/overview">
							<div>Cheat sheet</div>
						</Link>

						<Link to="/play">
							<div>Flash cards</div>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
