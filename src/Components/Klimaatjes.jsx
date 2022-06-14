import React, { useEffect, useState } from 'react'
import '../style/klimaatjes.scss'
import Reactpip from 'react-picture-in-picture'

function Klimaatjes() {
    const [active, setActive] = useState(false)
    const [video, setVideo] = useState("assets/goed co2.mp4")

    function pickVideo() {
        let random = Math.random()
        if (random > 0.5) {
            console.log('0.5 < ' + random)
            setVideo("assets/nog heel even co2.mp4")
        }
    }
    
    pickVideo()

    return(
        <div>
            <h1>HELLO IK BEN KLIMAATJES</h1>
            <Reactpip isActive= {active} controls= {false} autoplay= {true} loop= {true} muted= {true} id='pip-video'>
                <source src= {video}/>
            </Reactpip>
            <button onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
        </div>
    )
}

export default Klimaatjes