import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheatSheetPage from "./pages/CheatSheetPage";
import PlayPage from "./pages/PlayPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={PlayPage} />
        <Route path="/overview" Component={CheatSheetPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
