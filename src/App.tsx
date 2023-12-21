import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheatSheetPage from './pages/CheatSheetPage';
import PlayPage from './pages/PlayPage';

const App = () => {
	return (
		<div className="p-4">
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={PlayPage} />
					<Route path="/overview" Component={CheatSheetPage} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
