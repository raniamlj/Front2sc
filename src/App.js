import logo from './logo.svg';
import './App.css';
import Hello from "./components/hello";
import Graphique from "./components/graphique";


/*function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
    (req, res) => {fetch("http://localhost:4002/data")
    .then(res => res.json())
    .then(data => {res.send({ data });});}

  }

  return (
    <a href="#" onClick={handleClick}>
      Get Data
    </a>
  );
}*/



function App() {
  return (
    <div className="App">
        <Hello /> 
        <Graphique></Graphique>
        
             

    </div>
  );
}

export default App;
