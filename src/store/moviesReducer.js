import { movieAPI } from '../api/movieAPI';
import { getTrimmedTitle } from '../utils/getTrimmedTitle';

const moviesInitialState = {
  movies: [],
  totalMoviesCount: 0,
  currentPage: 1,
  isLoading: false,
  isSearchError: false,
  searchTitle: '',
};

export const moviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case 'MOVIES/SET_MOVIES':
    case 'MOVIES/SET_TOTAL_MOVIES_COUNT':
    case 'MOVIES/SET_CURRENT_PAGE':
    case 'MOVIES/TOGGLE_IS_LOADING':
    case 'MOVIES/SET_IS_SEARCH_ERROR':
    case 'MOVIES/SET_SEARCH_TITLE':
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
  setIsSearchError: isSearchError => ({
    type: 'MOVIES/SET_IS_SEARCH_ERROR',
    payload: { isSearchError },
  }),
  setSearchTitle: searchTitle => ({
    type: 'MOVIES/SET_SEARCH_TITLE',
    payload: { searchTitle },
  }),
};

// thunk
export const requestMovies = (title, page) => async dispatch => {
  dispatch(moviesActions.toggleIsLoading(true));
  dispatch(moviesActions.setSearchTitle(title));
  dispatch(moviesActions.setCurrentPage(page));
  dispatch(moviesActions.setIsSearchError(false));
  const searchTitle = getTrimmedTitle(title);
  try {
    const data = await movieAPI.searchFilmsByTitle(searchTitle, page);
    if (data.Response === 'False') {
      dispatch(moviesActions.setIsSearchError(true));
      dispatch(moviesActions.setMovies([]));
      dispatch(moviesActions.setTotalMoviesCount(0));
      dispatch(moviesActions.setSearchTitle(''));
    } else {
      dispatch(moviesActions.setMovies(data.Search));
      dispatch(moviesActions.setTotalMoviesCount(data.totalResults));
    }
  } catch (e) {
    dispatch(moviesActions.setIsSearchError(true));
  } finally {
    dispatch(moviesActions.toggleIsLoading(false));
  }
};
