import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { requestMovies } from '../../bll/moviesReducer';

import s from './Search.module.scss';

export const Search = () => {
  const [title, setTitle] = useState('');
  const [timerId, setTimerId] = useState(0);

  const dispatch = useDispatch();

  const searchDebounce = title => {
    setTitle(title);
    clearTimeout(timerId);
    const id = +setTimeout(dispatch, 500, requestMovies(title, 1));
    setTimerId(id);
  };

  const changeSearchTitle = e => {
    searchDebounce(e.currentTarget.value);
  };

  const deleteTextForSearch = () => {
    setTitle('');
  };

  const onKeyStartSearching = e => {
    if (e.key === 'Enter') {
      dispatch(requestMovies(title, 1));
    }
  };

  return (
    <div className={s.searchBlock}>
      <input
        placeholder="Enter title for search"
        value={title}
        className={s.search}
        onChange={changeSearchTitle}
        onKeyPress={onKeyStartSearching}
      />
      {title && (
        <button type="button" className={s.deleteIcon} onClick={deleteTextForSearch}>
          ✘
        </button>
      )}
    </div>
  );
};
