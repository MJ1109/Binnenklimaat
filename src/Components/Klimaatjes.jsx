import React, { useEffect, useRef, useState } from 'react'
import '../style/klimaatjes.scss'
import Reactpip from 'react-picture-in-picture'

function Klimaatjes() {
    const [active, setActive] = useState(false)
    const [video, setVideo] = useState("assets/goed co2.mp4")
    const [co2, setCo2] = useState(1000)
    const [klimaatjeText, setKlimaatjeText] = useState('')

    useEffect(() => {
        // Change video after 1000 ms
        setTimeout(() => {
            console.log(`set CO2`);
            setCo2(Math.random() * 1200)
        }, 3000)
    }, [co2])

    // Log when video changes
    useEffect(() => {
        console.log(video);
        setActive(true)
    }, [video])

    function Co2() {
        if (co2 < 800) {
            console.log('CO2 goed');
            setVideo('assets/goed co2.mp4')
            setKlimaatjeText('Op dit moment is het klimaat goed!')
        } else if (co2 >= 800) {
            console.log('CO2 slecht');
            setVideo('assets/te hoog.mp4')
            setKlimaatjeText('Op dit moment is het klimaat slecht, CO2 is erg hoog doe een raam open!')
        }
    }

    // Check the state of the Klimaatje when the CO2 changes
    useEffect(() => {
        if (co2 < 800) {
            console.log('CO2 goed');
            setVideo('assets/goed co2.mp4')
            setKlimaatjeText('Op dit moment is het klimaat goed!')
        } else if (co2 >= 800) {
            console.log('CO2 slecht');
            setVideo('assets/te hoog.mp4')
            setKlimaatjeText('Op dit moment is het klimaat slecht, CO2 is erg hoog doe een raam open!')
        }
    }, [co2])

    return(
        <div class="pipParent">
            <Reactpip key={video} 
                isActive= {active} 
                controls= {false} 
                autoplay= {true} 
                loop= {true} 
                muted= {true} 
                id='pip-video'>
                <source id='source' src= {video}/>
            </Reactpip>
            <h2>{klimaatjeText}</h2>
            <p>Voor meer informatie over co2 kunt u hier klikken.</p>
            <div>
                <button id='toggle-button' onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
            </div>
        </div>
    )
}

export default Klimaatjes