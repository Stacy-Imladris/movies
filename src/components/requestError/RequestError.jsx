import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { moviesActions } from '../../store/moviesReducer';

import s from './RequestError.module.scss';

export const RequestError = () => {
  const dispatch = useDispatch();

  const onClickHideError = () => {
    dispatch(moviesActions.setIsSearchError(false));
  };

  const errorLifetime = 3000;

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(moviesActions.setIsSearchError(false));
    }, errorLifetime);
    return () => clearTimeout(timerId);
  }, [dispatch]);

  return (
    <div className={s.error}>
      <span>No results were found for your request</span>
      <button type="button" className={s.deleteIcon} onClick={onClickHideError}>
        ✘
      </button>
    </div>
  );
};
