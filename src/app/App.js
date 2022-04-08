import React from 'react';

import { useSelector } from 'react-redux';

import { Header } from '../components/header/Header';
import { Movies } from '../components/movies/Movies';
import { Paginator } from '../components/paginator/Paginator';
import { Result } from '../components/result/Result';

import s from './App.module.scss';

const App = () => {
  const titleForSearch = useSelector(state => state.movies.titleForSearch);
  const isLoading = useSelector(state => state.movies.isLoading);
  const error = useSelector(state => state.movies.error);

  return (
    <div className={s.app}>
      <Header />
      <Result />
      <Movies />
      {!error && titleForSearch && !isLoading && <Paginator />}
    </div>
  );
};

export default App;
