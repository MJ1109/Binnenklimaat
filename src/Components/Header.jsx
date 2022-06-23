import Line from './svg/line';
import skyline from '../assets/img/skyline.png';
import '../style/header.scss'

function Header () {
  return ( 
    <div>
      <img src = {skyline} alt="The skyline of Rotterdam" class="skyline"/>
      <h1 className="title">De Klimaatjes</h1>
      
      <div class="titleParent">
        <div className="subtitleParent"> 
          <Line color="#57CC99" class="lineL"/>
          <h3 className="subtitle">Grip op het binnenklimaat van de klas, met hulp van de Klimaatjes! <br/>
          Kies welk klimaatje jij in de klas wilt hebben en wat hij vindt van het binnenklimaat. </h3>
          <Line color="#57CC99" class="lineR"/>
        </div>

      </div>
    </div>
  );
}

export default Header;