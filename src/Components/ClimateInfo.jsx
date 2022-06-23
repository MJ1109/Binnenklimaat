import Line from './svg/line';
import '../style/climateInfo.scss'

function ClimateInfo() {

    return ( 
        <div className="parent">
            <h1 className="title">Binnenklimaat informatie</h1>
            <div class="titleParent">
                <div className="subtitleParent"> 
                <Line color="#57CC99" class="lineL"/>
                <h3 className="subtitle">Welke impact heeft het binnenklimaat op jou?</h3>
                <Line color="#57CC99" class="lineR"/>
                </div>
            </div>
            <div className='climateInfo'>
                <div className='flex-column'>
                    <p>Te hoge CO2 kan zorgen voor klachten zoals hoofdpijn, vermoeidheid en sufheid</p>
                    <p>Te hoge of lage temperatuur kan zorgen voor verslechterde concentratie </p>
                    <p>Een goede binnentemperatuur is tussen de 18°C en 22°C</p>
                </div>
                <div className='flex-column'>
                    <p>Te hoge luchtvochtigheid is slecht voor de longen en kan zorgen voor schimmels in de ruimte</p>
                    <p>Te lage luchtvochtigheid kan zorgen voor droge ogen, vooral bij lenzendragers.</p>
                    <p>De luchtvochigheid moet tussen de 40% en 60% zitten</p>
                </div>
            </div>
        </div>
     );
}

export default ClimateInfo;