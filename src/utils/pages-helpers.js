export const getPagesForRender = (pages, currentPage, pagesCount) => {
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5].filter(f => f <= pagesCount);
  }
  if (currentPage > pages.length - 3) {
    return [
      pages.length - 4,
      pages.length - 3,
      pages.length - 2,
      pages.length - 1,
      pages.length,
    ];
  }
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
};
