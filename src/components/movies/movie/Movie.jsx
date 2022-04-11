import { memo } from 'react';

import noPoster from '../../../assets/images/no-poster.png';

import s from './Movie.module.scss';

export const Movie = memo(({ movie }) => (
  <div className={s.movie}>
    <div className={s.image}>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : noPoster}
        alt={`Poster ${movie.Title}`}
      />
    </div>
    <div className={s.title}>{movie.Title}</div>
    <div className={s.description}>Year: {movie.Year}</div>
    <div className={s.description}>imdbID: {movie.imdbID}</div>
    <div className={s.description}>Type: {movie.Type}</div>
  </div>
));
