import './App.css';
import Klimaatjes from './Components/Klimaatjes';
import Header from './Components/Header'
import KlimaatjesSection from './Components/KlimaatjesSection';

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <div className="head"> 
        <Header/>
      </div>
      <KlimaatjesSection/>
    </div>
  );
}

export default App;
