import { useSelector } from 'react-redux';

import { Preloader } from '../../common/preloader/Preloader';
import styleContainer from '../../common/styles/styles/Container.module.scss';
import { selectIsLoading, selectMovies } from '../../selectors/selectors';

import { Movie } from './movie/Movie';
import s from './Movies.module.scss';

export const Movies = () => {
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={s.moviesBlock}>
      <div className={`${styleContainer.container} ${s.moviesContainer}`}>
        {isLoading && <Preloader />}
        <div className={s.movies}>
          {movies.map(m => (
            <Movie key={m.imdbID} movie={m} />
          ))}
        </div>
      </div>
    </div>
  );
};
