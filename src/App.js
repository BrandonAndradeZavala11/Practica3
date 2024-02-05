import logo from './logo.svg';
import './App.css';
import Showtoast from './components/Showtoast';
import ShowModal from './components/ShowModal';
import Carrusel from './components/Carrusel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Showtoast></Showtoast>
        <ShowModal></ShowModal>
        <Carrusel></Carrusel>
      </header>
    </div>
  );
}

export default App;
