import { NavLink } from "react-router-dom";
import React, { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from './Header.module.css';
import { SearchMovie } from "../SearchMovie/SearchMovie";
import { movieActions } from "../../redux/slices";
import { GenresList } from "../GenresList/GenresList";

const Header = () => {
    const check = createRef()
    const dispatch = useDispatch();
    const { themeTrigger } = useSelector(state => state.movieReducer);

    const selectTheme = () => {
        dispatch(movieActions.setThemeTrigger(check.current.checked))
    };

    return (
        <div className={`${css.headerStyle} ${themeTrigger? css.headerStyleDark: css.headerStyleLight}`}>
            <GenresList/>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/homePage'}>Home Page</NavLink>
            <SearchMovie/>
            <input type={"checkbox"} onClick={() => selectTheme()} ref={check}/>
        </div>
    );
};

export { Header };