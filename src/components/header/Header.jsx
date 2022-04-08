import React, { memo, useState } from 'react';

import { useDispatch } from 'react-redux';

import person from '../../assets/images/person.png';
import { requestMovies } from '../../bll/moviesReducer';
import styleContainer from '../../common/styles/styles/Container.module.scss';

import s from './Header.module.scss';

export const Header = memo(() => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const changeSearchTitle = e => {
    setTitle(e.currentTarget.value);
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
    <div className={s.headerBlock}>
      <div className={`${styleContainer.container} ${s.headerContainer}`}>
        <div className={s.title}>
          <h2>Movie Catalog</h2>
        </div>
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
        <div className={s.user}>
          <div>
            <img alt="person icon" src={person} />
          </div>
          <div>Anastasiya Belikova ▿</div>
        </div>
      </div>
    </div>
  );
});
