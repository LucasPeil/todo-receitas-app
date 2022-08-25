
import './App.css';
import DessertForm from './components/DessertForm';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <h2>Qual sobremesa você quer fazer hoje?</h2>
        <DessertForm btnText = "Adicionar"/>
      </div>
      <div>
        <h2>Sobremesas:</h2>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
