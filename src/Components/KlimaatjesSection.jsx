import Klimaatjes from "./Klimaatjes";
import'../style/klimaatjesSection.scss';

function KlimaatjesSection() {
    return ( 
        <div class="klimaatjesParent">
            <Klimaatjes/>
            <Klimaatjes/>
            <Klimaatjes/>
        </div>
     );
}

export default KlimaatjesSection;