import { useSelector } from 'react-redux';

import styleContainer from '../../common/styles/styles/Container.module.scss';
import {
  selectError,
  selectIsLoading,
  selectTitleForSearch,
  selectTotalMoviesCount,
} from '../../selectors/selectors';
import { RequestError } from '../requestError/RequestError';

import s from './Result.module.scss';

export const Result = () => {
  const titleForSearch = useSelector(selectTitleForSearch);
  const totalMoviesCount = useSelector(selectTotalMoviesCount);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

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
};
