import { useSelector } from 'react-redux';

import { Preloader } from '../../common/preloader/Preloader';
import styleContainer from '../../common/styles/styles/Container.module.scss';
import { selectIsLoading, selectMovies } from '../../store/selectors';

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
          {movies.map(({ Title, Year, imdbID, Type, Poster }) => (
            <Movie
              key={imdbID}
              imdbID={imdbID}
              title={Title}
              year={Year}
              type={Type}
              poster={Poster}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
