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
            setVideo("assets/te hoog.mp4")
        }
    }

    function GoodCo2(props) {
        return <h1>Op dit moment is het klimaat goed!</h1>
    }

    function BadCo2(props) {
        return <h1>Op dit moment is het klimaat slecht, CO2 is erg hoog doe een raam open!</h1>
    }

    // function OnWayCo2(props) {
    //     return <h1>Op dit moment gaat het wat beter met het klimaat, CO2 bijna in orde!</h1>
    // }

    function Co2(props) {
        const howHighCo2 = props.howHighCo2;
        if (howHighCo2) {
            return <GoodCo2 />
        }
        return <BadCo2 />
    }

    pickVideo()

    return(
        <div>
            <Reactpip isActive= {active} controls= {false} autoplay= {true} loop= {true} muted= {true} id='pip-video'>
                <source src= {video}/>
            </Reactpip>
            <Co2></Co2>
            <div>
                <button id='toggle-button' onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
            </div>
        </div>
    )
}

export default Klimaatjes