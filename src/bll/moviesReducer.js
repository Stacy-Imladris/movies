import { movieAPI } from '../api/movieAPI';

const moviesInitialState = {
  movies: [],
  totalMoviesCount: 0,
  currentPage: 1,
  isLoading: false,
  error: false,
  titleForSearch: '',
};

export const moviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case 'MOVIES/SET_MOVIES':
    case 'MOVIES/SET_TOTAL_MOVIES_COUNT':
    case 'MOVIES/SET_CURRENT_PAGE':
    case 'MOVIES/TOGGLE_IS_LOADING':
    case 'MOVIES/SET_ERROR':
    case 'MOVIES/SET_TITLE_FOR_SEARCH':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const moviesActions = {
  setMovies: movies => ({ type: 'MOVIES/SET_MOVIES', payload: { movies } }),
  setTotalMoviesCount: totalMoviesCount => ({
    type: 'MOVIES/SET_TOTAL_MOVIES_COUNT',
    payload: { totalMoviesCount },
  }),
  setCurrentPage: currentPage => ({
    type: 'MOVIES/SET_CURRENT_PAGE',
    payload: { currentPage },
  }),
  toggleIsLoading: isLoading => ({
    type: 'MOVIES/TOGGLE_IS_LOADING',
    payload: { isLoading },
  }),
  setError: error => ({ type: 'MOVIES/SET_ERROR', payload: { error } }),
  setTitleForSearch: titleForSearch => ({
    type: 'MOVIES/SET_TITLE_FOR_SEARCH',
    payload: { titleForSearch },
  }),
};

// thunk
export const requestMovies = (title, page) => async dispatch => {
  dispatch(moviesActions.toggleIsLoading(true));
  dispatch(moviesActions.setTitleForSearch(title));
  dispatch(moviesActions.setCurrentPage(page));
  try {
    const data = await movieAPI.searchFilmsByTitle(title, page);
    if (data.Response === 'False') {
      dispatch(moviesActions.setError(true));
      dispatch(moviesActions.setMovies([]));
      dispatch(moviesActions.setTotalMoviesCount(0));
      dispatch(moviesActions.setTitleForSearch(''));
    } else {
      dispatch(moviesActions.setMovies(data.Search));
      dispatch(moviesActions.setTotalMoviesCount(data.totalResults));
    }
  } catch (e) {
    dispatch(moviesActions.setError(true));
  } finally {
    dispatch(moviesActions.toggleIsLoading(false));
  }
};
