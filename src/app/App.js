import {Header} from "../components/header/Header";
import {Movies} from "../components/movies/Movies";
import {Result} from "../components/result/Result";
import React from "react";
import {Paginator} from "../components/paginator/Paginator";
import {useSelector} from "react-redux";
import s from './App.module.scss';

function App() {
    const titleForSearch = useSelector(state => state.movies.titleForSearch)
    const isLoading = useSelector(state => state.movies.isLoading)
    const error = useSelector(state => state.movies.error)

    return (
        <div className={s.app}>
            <Header/>
            <Result/>
            <Movies/>
            {!error && titleForSearch && !isLoading && <Paginator/>}
        </div>
    )
}

export default App;
