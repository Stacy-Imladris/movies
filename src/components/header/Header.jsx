import { useState } from 'react';

import { useDispatch } from 'react-redux';

import person from '../../assets/images/person.png';
import { requestMovies } from '../../bll/moviesReducer';
import styleContainer from '../../common/styles/styles/Container.module.scss';

import s from './Header.module.scss';

export const Header = () => {
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
};
