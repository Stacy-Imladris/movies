import { useDispatch, useSelector } from 'react-redux';

import { requestMovies } from '../../bll/moviesReducer';
import {
  selectCurrentPage,
  selectTitleForSearch,
  selectTotalMoviesCount,
} from '../../selectors/selectors';
import { getPagesForRender } from '../../utils/pages-helpers';

import s from './Paginator.module.scss';

export const Paginator = () => {
  const totalMoviesCount = useSelector(selectTotalMoviesCount);
  const titleForSearch = useSelector(selectTitleForSearch);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const pagesCount = Math.ceil(totalMoviesCount / 10);

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const pagesForRender = getPagesForRender(pages, currentPage, pagesCount);

  const onPageChanged = page => {
    dispatch(requestMovies(titleForSearch, page));
  };

  return (
    <div className={s.paginatorContainer}>
      <div className={s.container}>
        <div>
          {currentPage > 3 && (
            <>
              <button
                type="button"
                tabIndex={0}
                onClick={() => onPageChanged(currentPage - 1)}
              >
                Previous
              </button>
              <button
                type="button"
                className={currentPage === 1 ? s.selectedPage : ''}
                onClick={() => onPageChanged(1)}
              >
                {' '}
                1{' '}
              </button>
              <span>...</span>
            </>
          )}
        </div>
        <div>
          {pagesForRender.map(p => (
            <button
              type="button"
              className={currentPage === p ? s.selectedPage : ''}
              onClick={() => onPageChanged(p)}
              key={p}
            >
              {' '}
              {p}{' '}
            </button>
          ))}
        </div>
        <div>
          {currentPage < pages.length - 2 && (
            <>
              <span>...</span>
              <button
                type="button"
                className={currentPage === pages.length ? s.selectedPage : ''}
                onClick={() => onPageChanged(pages.length)}
              >
                {' '}
                {pages.length}{' '}
              </button>
              <button type="button" onClick={() => onPageChanged(currentPage + 1)}>
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
