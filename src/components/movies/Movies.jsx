import React, {memo} from 'react';
import styleContainer from '../../common/styles/styles/Container.module.scss'
import s from './Movies.module.scss'
import {Movie} from "./movie/Movie";
import {useSelector} from "react-redux";
import {Paginator} from "./paginator/Paginator";
import {Preloader} from "../../common/preloader/Preloader";

export const Movies = memo(() => {
    const movies = useSelector(state => state.movies.movies)
    const titleForSearch = useSelector(state => state.movies.titleForSearch)
    const isLoading = useSelector(state => state.movies.isLoading)
    const error = useSelector(state => state.movies.error)

    return (
        <div className={s.moviesBlock}>
            <div className={`${styleContainer.container} ${s.moviesContainer}`}>
                {isLoading && <Preloader/>}
                <div className={s.movies}>
                    {
                        movies.map(m => <Movie key={m.imdbID} movie={m}/>)
                    }
                </div>
                {!error && titleForSearch && !isLoading && <Paginator/>}
            </div>
        </div>
    )
})