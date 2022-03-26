import './App.css';
import data from './data';
import Image1 from './components/Images';
import Titel from './components/Title';
import Button from './components/Button';

function App() {
  const {album, name, artists} = data;
  return <div className="App">
    <Image1 url={album.images[1].url} />
    <Titel name={album.name} artists={album.artists[0].name} />
    <Button />
  </div>
};

export default App;
