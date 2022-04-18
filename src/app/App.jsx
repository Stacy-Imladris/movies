import { useSelector } from 'react-redux';

import { Header } from '../components/header/Header';
import { Movies } from '../components/movies/Movies';
import { Paginator } from '../components/paginator/Paginator';
import { Result } from '../components/result/Result';
import {
  selectIsLoading,
  selectIsSearchError,
  selectSearchTitle,
} from '../selectors/selectors';

import s from './App.module.scss';

const App = () => {
  const searchTitle = useSelector(selectSearchTitle);
  const isLoading = useSelector(selectIsLoading);
  const isSearchError = useSelector(selectIsSearchError);

  return (
    <div className={s.app}>
      <Header />
      <Result />
      <Movies />
      {!isSearchError && searchTitle && !isLoading && <Paginator />}
    </div>
  );
};

export default App;
