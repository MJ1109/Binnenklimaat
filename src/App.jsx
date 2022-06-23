import './App.css';
import Header from './Components/Header';
import KlimaatjesSection from './Components/KlimaatjesSection';
import How from './Components/How';
import ClimateInfo from './Components/ClimateInfo';
import Footer from './Components/Footer';

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
      <How/>  
      <ClimateInfo />
      <Footer />
    </div>
  );
}

export default App;
