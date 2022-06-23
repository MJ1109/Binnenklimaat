import './App.css';
import Klimaatjes from './Components/Klimaatjes';
import Header from './Components/Header'

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <div className="head"> 
        <Header/>
      </div>
     
      <div className="klimaatjesVids">
        <Klimaatjes />
        <Klimaatjes />
        <Klimaatjes />
      </div>
      
    </div>
  );
}

export default App;
