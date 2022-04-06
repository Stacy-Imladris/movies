import React, {memo, useState} from 'react';
import s from './Header.module.scss'
import styleContainer from '../../common/styles/styles/Container.module.scss'
import {requestMovies} from "../../bll/moviesReducer";
import {useDispatch} from "react-redux";
import person from '../../assets/images/person.png'

export const Header = memo(() => {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const changeSearchTitle = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyStartSearching = (e) => {
        if (e.key === 'Enter') {
            dispatch(requestMovies(title, 1))
        }
    }

    return (
        <div className={s.headerBlock}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <div className={s.title}><h2>Movie Catalog</h2></div>
                <div>
                    <input value={title} className={s.search}
                           onChange={changeSearchTitle}
                           onKeyPress={onKeyStartSearching}/>
                </div>
                <div className={s.user}>
                    <div><img alt={'person icon'} src={person}/></div>
                    <div>Anastasiya Belikova ▿</div>
                </div>
            </div>
        </div>
    )
})