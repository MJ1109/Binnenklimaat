import React, { useState } from 'react'
import '../style/klimaatjes.scss'
import Reactpip from 'react-picture-in-picture'

function Klimaatjes() {
    const[active, setActive] = useState(false)

    return(
        <div>
            <h1>HELLO IK BEN KLIMAATJES</h1>
            <Reactpip isActive= {active} controls= {false} autoplay= {true} loop= {true} muted= {true} id='pip-video'>
                <source src="assets/nyancat-placeholder.mp4"/>
            </Reactpip>
            <button onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
        </div>
    )
}

export default Klimaatjes