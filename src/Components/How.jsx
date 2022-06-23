import Line from './svg/line';
import Buttonpic from '../assets/img/PiPbutton.png'
import '../style/how.scss'

function How() {
    return ( 
        <div className="parent">
            <h1 className="title">Hoe werkt het?</h1>
            <div class="titleParent">
                <div className="subtitleParent"> 
                <Line color="#57CC99" class="lineL"/>
                <h3 className="subtitle">Hoe krijg je de Klimaatjes dan op je scherm? </h3>
                <Line color="#57CC99" class="lineR"/>
                </div>
            </div>
            <div className="explanationContainer">
                <img src = {Buttonpic} alt="image of the button to toggle picture in picture" class="img"/>
                <ol className="description">
                    <li> Om een klimaatje te kiezen, klik je simpelweg op de "Kies mij!" knop onder het gewenste Klimaatje.</li>
                    <li> Om het Klimaatje vervolgens af te sluiten, klik je op het kruisje rechtsboven in de hoek van het Klimaatje. </li>
                </ol> 
            </div>
            

        </div>
    );
}

export default How;