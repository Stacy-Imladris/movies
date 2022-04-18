import { useDispatch, useSelector } from 'react-redux';

import { requestMovies } from '../../store/moviesReducer';
import {
  selectCurrentPage,
  selectSearchTitle,
  selectTotalMoviesCount,
} from '../../store/selectors';
import { getPages } from '../../utils/getPages';

import s from './Paginator.module.scss';

export const Paginator = () => {
  const totalMoviesCount = useSelector(selectTotalMoviesCount);
  const searchTitle = useSelector(selectSearchTitle);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const responsePagesCount = 10;
  const pagesCount = Math.ceil(totalMoviesCount / responsePagesCount);

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const pagesForRender = getPages(pages, currentPage, pagesCount);

  const onPageChanged = page => {
    dispatch(requestMovies(searchTitle, page));
  };

  return (
    <div className={s.paginatorContainer}>
      <div className={s.container}>
        <div>
          {currentPage > 3 && pagesCount > 5 && (
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
          {currentPage < pages.length - 2 && pagesCount > 5 && (
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
