import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { moviesActions } from '../../bll/moviesReducer';
import { selectIsSearchError } from '../../selectors/selectors';

import s from './RequestError.module.scss';

export const RequestError = () => {
  const isSearchError = useSelector(selectIsSearchError);
  const dispatch = useDispatch();

  const removeError = () => {
    dispatch(moviesActions.setIsSearchError(false));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(moviesActions.setIsSearchError(false));
    }, 5000);
    return () => clearTimeout(timerId);
  }, [isSearchError, dispatch]);

  return (
    <div className={s.error}>
      <span>No results were found for your request</span>
      <button type="button" className={s.deleteIcon} onClick={removeError}>
        ✘
      </button>
    </div>
  );
};
