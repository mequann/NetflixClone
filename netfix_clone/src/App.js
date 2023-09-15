
import './App.css';
import Row from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Evangadi Family</h1>
      <Row title="NETFIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchCommedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanMovies}/>
    <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
// api key:8d4d74d40f62a835cbae4f8eb0dc8750