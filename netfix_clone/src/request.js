const API_KEY="8d4d74d40f62a835cbae4f8eb0dc8750"
const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchCommedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests 
// https://api.themoviedb.org/3/movie/top_rated?api_key=26a392e3ed2d3ae6de92b85a1074c73&language=en-US`,
// https://api.themoviedb.org/3/discover/movie?api_key=$8d4d74d40f62a835cbae4f8eb0dc8750&with_genres=99
// https://api.themoviedb.org/3/movie/11?api_key=8d4d74d40f62a835cbae4f8eb0dc8750$with_genres=99