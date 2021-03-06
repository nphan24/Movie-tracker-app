export const cleanMovies = movieData => {
  const cleanedMovies = movieData.map(movie => {
    const {
      title,
      overview,
      release_date,
      vote_average,
      poster_path
    } = movie;
    return {
      title,
      movie_id: overview.length,
      overview: `Summary: ${overview}`,
      release_date: `Release Date: ${release_date}`,
      vote_average: `Rating: ${vote_average}`,
      poster_path: poster_path
    };
  });
  return cleanedMovies;
};
