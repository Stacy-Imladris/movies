import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import styleContainer from '../../common/styles/styles/Container.module.scss';
import { RequestError } from '../requestError/RequestError';

import s from './Result.module.scss';

export const Result = memo(() => {
  const titleForSearch = useSelector(state => state.movies.titleForSearch);
  const totalMoviesCount = useSelector(state => state.movies.totalMoviesCount);
  const error = useSelector(state => state.movies.error);
  const isLoading = useSelector(state => state.movies.isLoading);

  return (
    <div className={s.resultBlock}>
      <div className={`${styleContainer.container} ${s.searchContainer}`}>
        <div className={s.searching}>
          {!isLoading && titleForSearch && !error && (
            <span>
              You searched for: {titleForSearch}, {totalMoviesCount} results found
            </span>
          )}
          {error && <RequestError />}
        </div>
      </div>
    </div>
  );
});
