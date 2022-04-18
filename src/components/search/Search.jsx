import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { requestMovies } from '../../store/moviesReducer';

import s from './Search.module.scss';

export const Search = () => {
  const [title, setTitle] = useState('');
  const [timerId, setTimerId] = useState(0);

  const dispatch = useDispatch();

  const pendingTime = 500;
  const firstPage = 1;

  const searchDebounce = title => {
    setTitle(title);
    clearTimeout(timerId);
    const id = Number(setTimeout(dispatch, pendingTime, requestMovies(title, firstPage)));
    setTimerId(id);
  };

  const onChangeSearchTitle = e => {
    searchDebounce(e.currentTarget.value);
  };

  const onClickClearSearchField = () => {
    setTitle('');
  };

  return (
    <div className={s.searchBlock}>
      <input
        placeholder="Enter search title"
        value={title}
        className={s.search}
        onChange={onChangeSearchTitle}
      />
      {title && (
        <button type="button" className={s.deleteIcon} onClick={onClickClearSearchField}>
          ✘
        </button>
      )}
    </div>
  );
};
