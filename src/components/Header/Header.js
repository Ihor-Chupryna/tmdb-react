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
        <div className={`${css.headerStyle} ${themeTrigger ? css.headerStyleDark : css.headerStyleLight}`}>
            <div className={css.navMenu}><GenresList/>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/homePage'}>Home Page</NavLink>
                </div>
            <SearchMovie/>

            <div className={css.switcher}>
                <label className={css.switch}>
                    <input type={"checkbox"} onChange={() => selectTheme()} ref={check}/>
                    <span className={`${css.slider} ${css.round}`}></span>
                </label>
                <p>dark theme</p>
            </div>

            <div className={css.user}>Ihor</div>
        </div>
    );
};

export { Header };