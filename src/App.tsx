import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CheatSheetPage from './pages/CheatSheetPage';
import PlayPage from './pages/PlayPage';

const App = () => {
	return (
		<BrowserRouter>
			<div className="h-screen w-full">
				<Navbar />
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
