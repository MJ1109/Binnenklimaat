import Line from './svg/line';


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
            <div>
                HALLO UITLEG
            </div>
        </div>
     );
}

export default ClimateInfo;