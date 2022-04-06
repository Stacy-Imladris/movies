import React, {memo} from 'react';
import s from './Paginator.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {requestMovies} from "../../bll/moviesReducer";

export const Paginator = memo(() => {
    const totalMoviesCount = useSelector(state => state.movies.totalMoviesCount)
    const titleForSearch = useSelector(state => state.movies.titleForSearch)
    const currentPage = useSelector(state => state.movies.currentPage)
    const dispatch = useDispatch()

    const pagesCount = Math.ceil(totalMoviesCount / 10)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const pagesForRender = currentPage <= 3 ? [1, 2, 3, 4, 5].filter(f => f <= pagesCount)
        : currentPage > pages.length - 3
            ? [pages.length - 4, pages.length - 3, pages.length - 2, pages.length - 1, pages.length]
            : [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]

    const onPageChanged = (page) => {
        dispatch(requestMovies(titleForSearch, page))
    }

    return (
        <div className={s.paginatorContainer}>
            <div className={s.container}>
                <div>
                    {
                        currentPage > 3 &&
                        <>
                            <span onClick={() => onPageChanged(currentPage - 1)}>Previous</span>
                            <span className={currentPage === 1 ? s.selectedPage : ''}
                                  onClick={() => onPageChanged(1)}> 1</span>
                            <span>...</span>
                        </>
                    }
                </div>
                <div>
                    {
                        pagesForRender.map((p, i) => <span className={currentPage === p ? s.selectedPage : ''}
                                                           onClick={() => onPageChanged(p)}
                                                           key={String(p) + i}> {p} </span>)
                    }
                </div>
                <div>
                    {
                        currentPage < pages.length - 2 &&
                        <>
                            <span>...</span>
                            <span className={currentPage === pages.length ? s.selectedPage : ''}
                                  onClick={() => onPageChanged(pages.length)}> {pages.length} </span>
                            <span onClick={() => onPageChanged(currentPage + 1)}>Next</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
})