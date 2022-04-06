import React, {memo, useState} from 'react';
import s from './Header.module.scss'
import styleContainer from '../../common/styles/styles/Container.module.scss'
import {requestMovies} from "../../bll/moviesReducer";
import {useDispatch, useSelector} from "react-redux";

export const Header = memo(() => {
    const [title, setTitle] = useState('')

    const currentPage = useSelector(state => state.movies.currentPage)

    const dispatch = useDispatch()

    const changeSearchTitle = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyStartSearching = (e) => {
        if (e.key === 'Enter') {
            dispatch(requestMovies(title, currentPage))
        }
    }

    return (
        <div className={s.headerContainer}>
            <div className={styleContainer.container}>
                <div className={s.title}><h2>Movie Catalog</h2></div>
                <div>
                    <input value={title} className={s.search}
                           onChange={changeSearchTitle}
                           onKeyPress={onKeyStartSearching}/>
                </div>
                <div className={s.user}>Anastasiya Belikova</div>
            </div>
        </div>
    )
})