import Klimaatjes from "./Klimaatjes";
import'../style/klimaatjesSection.scss';

function KlimaatjesSection() {
    return ( 
        <div className="klimaatjesParent">
            <Klimaatjes name={'co2'}/>
            <Klimaatjes name={'temp'}/>
        </div>
     );
}

export default KlimaatjesSection;