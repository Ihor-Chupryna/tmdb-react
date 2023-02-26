import { Outlet } from "react-router-dom";
import { Header } from "../components";

import css from './MainLayout.module.css';

import { useSelector } from "react-redux";

const MainLayout = () => {

    const { themeTrigger } = useSelector(state => state.movieReducer);

    return (
        <div className={`${css.mainContainer} ${themeTrigger ? css.darkTheme : css.lightTheme}`}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export { MainLayout };
