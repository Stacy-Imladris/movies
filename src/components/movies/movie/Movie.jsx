import { memo } from 'react';

import noPoster from '../../../assets/images/no-poster.png';

import s from './Movie.module.scss';

export const Movie = memo(({ title, year, imdbID, type, poster }) => (
  <div className={s.movie}>
    <div className={s.image}>
      <img src={poster !== 'N/A' ? poster : noPoster} alt={`Poster ${title}`} />
    </div>
    <div className={s.title}>{title}</div>
    <div className={s.description}>Year: {year}</div>
    <div className={s.description}>imdbID: {imdbID}</div>
    <div className={s.description}>Type: {type}</div>
  </div>
));
