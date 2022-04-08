import React from 'react';

import s from './Preloader.module.scss';

export const Preloader = () => (
  <div className={s.preloader}>
    <div className={s.progress}>
      <div />
    </div>
  </div>
);
