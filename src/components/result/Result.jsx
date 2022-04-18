import { useSelector } from 'react-redux';

import styleContainer from '../../common/styles/styles/Container.module.scss';
import {
  selectIsLoading,
  selectIsSearchError,
  selectSearchTitle,
  selectTotalMoviesCount,
} from '../../selectors/selectors';
import { RequestError } from '../requestError/RequestError';

import s from './Result.module.scss';

export const Result = () => {
  const searchTitle = useSelector(selectSearchTitle);
  const totalMoviesCount = useSelector(selectTotalMoviesCount);
  const isSearchError = useSelector(selectIsSearchError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={s.resultBlock}>
      <div className={`${styleContainer.container} ${s.searchContainer}`}>
        <div className={s.searching}>
          {!isLoading && searchTitle && !isSearchError && (
            <span>
              You searched for: {searchTitle}, {totalMoviesCount} results found
            </span>
          )}
          {isSearchError && <RequestError />}
        </div>
      </div>
    </div>
  );
};
