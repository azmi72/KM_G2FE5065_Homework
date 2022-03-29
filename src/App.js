import "./App.css";
import data from "./data.js";
import Track from "./components/Track";

function App() {
  const trackList = data.map( (track) => (
    <Track
        key={track.id}
        url={track.album.images[0].url}
        title={track.album.name}
        artist={track.album.artists[0].name}
      />
  ));
  
  return (
    <div className="container">
      <h1 className="titlePlaylist">Playlist Music</h1>
      <div className="trackList">{trackList}</div>
    </div>
  );
}

export default App;