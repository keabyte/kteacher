import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CheatSheetPage from './pages/CheatSheetPage';
import PlayPage from './pages/PlayPage';

const App = () => {
	return (
		<BrowserRouter>
			<div className="h-screen w-full">
				<nav>
					<div className="flex p-4">
						<Link to="/">
							<div className="flex-1">Hangul Teacher</div>
						</Link>
						<div className="flex flex-1 justify-end gap-4">
							<Link to="/overview">
								<div>Cheat sheet</div>
							</Link>

							<Link to="/play">
								<div>Play</div>
							</Link>
						</div>
					</div>
				</nav>
				<div className="p-4">
					<Routes>
						<Route path="/" Component={PlayPage} />
						<Route path="/play" Component={PlayPage} />
						<Route path="/overview" Component={CheatSheetPage} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
