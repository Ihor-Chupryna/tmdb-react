import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts";
import {  HomePage, MoviePage } from "./pages";
import { MovieInfo } from "./components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'homePage'} element={<HomePage/>}/>


                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'movies/:movieId'} element={<MovieInfo/>}/>

                {/*<Route path={'foundMovies'} element={<FoundMovies/>}/>*/}
                {/*<Route path={'foundMovies/:movieId'} element={<MovieInfo/>}/>*/}

                {/*<Route path={'genres'} element={<GenresPage/>}>*/}
                {/*    <Route path={':genre'} element={<MoviesByGenreList/>}/>*/}
                {/*</Route>*/}
                {/*<Route path={'genres/:genre/:movieId'} element={<MovieInfo/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
