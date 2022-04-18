import { moviesActions, moviesReducer } from './moviesReducer';

let moviesStartState;

describe('movies reducer tests', () => {
  beforeEach(() => {
    moviesStartState = {
      movies: [],
      totalMoviesCount: 0,
      currentPage: 1,
      isLoading: false,
      isSearchError: false,
      searchTitle: '',
    };
  });

  test('correct movies list should be added', () => {
    const movies = [
      {
        Title: 'Harry Potter and the Chamber of Secrets',
        Year: '2002',
        imdbID: 'tt0295297',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg',
      },
      {
        Title: 'Harry Potter and the Prisoner of Azkaban',
        Year: '2004',
        imdbID: 'tt0304141',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
      },
    ];

    const endState = moviesReducer(moviesStartState, moviesActions.setMovies(movies));

    expect(endState.movies.length).toBe(2);
    expect(endState.movies[0].imdbID).toBe('tt0295297');
  });

  test('correct total movies count should be set', () => {
    const endState = moviesReducer(
      moviesStartState,
      moviesActions.setTotalMoviesCount(270),
    );

    expect(endState.totalMoviesCount).toBe(270);
  });

  test('correct current page number should be set', () => {
    const endState = moviesReducer(moviesStartState, moviesActions.setCurrentPage(99));

    expect(endState.currentPage).toBe(99);
  });

  test('correct isLoading value should be set', () => {
    const endState = moviesReducer(moviesStartState, moviesActions.toggleIsLoading(true));

    expect(endState.isLoading).toBeTruthy();
  });

  test('correct error value should be set to the state', () => {
    const endState = moviesReducer(
      moviesStartState,
      moviesActions.setIsSearchError(true),
    );

    expect(endState.isSearchError).toBeTruthy();
  });

  test('correct title for search should be set', () => {
    const endState = moviesReducer(
      moviesStartState,
      moviesActions.setSearchTitle('Harry'),
    );

    expect(endState.searchTitle).toBe('Harry');
  });
});
