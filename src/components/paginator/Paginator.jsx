import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestMovies } from '../../store/moviesReducer';
import {
  selectCurrentPage,
  selectSearchTitle,
  selectTotalMoviesCount,
} from '../../store/selectors';
import { getPages } from '../../utils/getPages';

import { PaginationButton } from './paginationButton/PaginationButton';
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

  const pagesLength = pages.length;

  const pagesForRender = getPages(pages, currentPage, pagesCount);

  const onPageChanged = useCallback(
    page => {
      dispatch(requestMovies(searchTitle, page));
    },
    [dispatch, searchTitle],
  );

  return (
    <div className={s.paginatorContainer}>
      <div className={s.container}>
        <div>
          {currentPage > 3 && pagesCount > 5 && (
            <>
              <PaginationButton
                onPageChanged={onPageChanged}
                value={currentPage - 1}
                buttonName="Previous"
              />
              <PaginationButton
                onPageChanged={onPageChanged}
                value={1}
                buttonName={` ${1} `}
                isSelected={currentPage === 1}
              />
              <span>...</span>
            </>
          )}
        </div>
        <div>
          {pagesForRender.map(p => (
            <PaginationButton
              key={p}
              onPageChanged={onPageChanged}
              value={p}
              buttonName={` ${p} `}
              isSelected={currentPage === p}
            />
          ))}
        </div>
        <div>
          {currentPage < pagesLength - 2 && pagesCount > 5 && (
            <>
              <span>...</span>
              <PaginationButton
                onPageChanged={onPageChanged}
                value={pagesLength}
                buttonName={` ${pagesLength} `}
                isSelected={currentPage === pagesLength}
              />
              <PaginationButton
                onPageChanged={onPageChanged}
                value={currentPage + 1}
                buttonName="Next"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
