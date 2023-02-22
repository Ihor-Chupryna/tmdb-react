import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { GenresPage, HomePage, MoviePage } from "./pages";
import { MovieInfo } from "./components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>

                <Route path={'movies'} element={<MoviePage/>}>
                    <Route path={':movieId'} element={<MovieInfo/>}/>
                </Route>

                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
