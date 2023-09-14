
import './App.css';
import Row from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Evangadi Family</h1>
      <Row title="NETFIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
// api key:8d4d74d40f62a835cbae4f8eb0dc8750