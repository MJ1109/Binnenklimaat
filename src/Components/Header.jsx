import '../style/klimaatjes.scss'
import Line from './svg/line';
import skyline from '../assets/img/skyline.png';
import '../style/header.scss'

function Header () {
  return ( 
    <div>
      <img src = {skyline} alt="The skyline of Rotterdam" class="skyline"/>
      
      <div className="title"> 
        <Line color="#57CC99" class="lineL"/>
        <h1 className="titletxt">De Klimaatjes</h1>
        <Line color="#57CC99" class="lineR"/>
      </div>

      
      <h3 className="subtitle">Grip op het binnenklimaat van de klas, met hulp van de Klimaatjes!</h3>
      
    </div>
  );
}

export default Header;