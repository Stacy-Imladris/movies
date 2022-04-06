import React, {memo} from 'react';
import styleContainer from '../../common/styles/styles/Container.module.scss'
import s from './Result.module.scss'
import {useSelector} from "react-redux";

export const Result = memo(() => {
    const titleForSearch = useSelector(state => state.movies.titleForSearch)
    const totalMoviesCount = useSelector(state => state.movies.totalMoviesCount)
    const error = useSelector(state => state.movies.error)
    const isLoading = useSelector(state => state.movies.isLoading)

    return (
        <div className={s.resultBlock}>
            <div className={`${styleContainer.container} ${s.searchContainer}`}>
                <div className={s.searching}>
                    {
                        !isLoading && titleForSearch
                        && <span>You searched for: {titleForSearch}, {totalMoviesCount} results found</span>
                    }
                    {
                        error && !titleForSearch && <span>No results were found for your request {titleForSearch}</span>
                    }
                </div>
            </div>
        </div>
    )
})