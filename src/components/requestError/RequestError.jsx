import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { moviesActions } from '../../bll/moviesReducer';
import { selectError } from '../../selectors/selectors';

import s from './RequestError.module.scss';

export const RequestError = () => {
  const { error } = useSelector(selectError);
  const dispatch = useDispatch();

  const removeError = () => {
    dispatch(moviesActions.setError(false));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(moviesActions.setError(false));
    }, 7000);
    return () => clearTimeout(timerId);
  }, [error, dispatch]);

  return (
    <div className={s.error}>
      <span>No results were found for your request</span>
      <button type="button" className={s.deleteIcon} onClick={removeError}>
        ✘
      </button>
    </div>
  );
};