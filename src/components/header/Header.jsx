import person from '../../assets/images/person.png';
import styleContainer from '../../common/styles/styles/Container.module.scss';
import { Search } from '../search/Search';

import s from './Header.module.scss';

export const Header = () => (
  <div className={s.headerBlock}>
    <div className={`${styleContainer.container} ${s.headerContainer}`}>
      <div className={s.title}>
        <h2>Movie Catalog</h2>
      </div>
      <Search />
      <div className={s.user}>
        <div>
          <img alt="person icon" src={person} />
        </div>
        <div>Anastasiya Belikova ▿</div>
      </div>
    </div>
  </div>
);
