export const selectMovies = state => state.movies.movies;

export const selectTotalMoviesCount = state => state.movies.totalMoviesCount;

export const selectCurrentPage = state => state.movies.currentPage;

export const selectIsLoading = state => state.movies.isLoading;

export const selectIsSearchError = state => state.movies.isSearchError;

export const selectSearchTitle = state => state.movies.searchTitle;
