import React, { useEffect, useRef, useState } from 'react'
import '../style/klimaatjes.scss'
import Reactpip from 'react-picture-in-picture'

function Klimaatjes() {
    const [active, setActive] = useState(false)
    const [video, setVideo] = useState("assets/goed co2.mp4")

    useEffect(() => {
        // Change video after 1000 ms
        setTimeout(() => {
            console.log('Set video to Bobsplant')
            setVideo("assets/bobsplant.mp4")
            setActive(false)
        }, 3000)
    }, [])

    // Log when video changes
    useEffect(() => {
        console.log(video);
        setActive(true)
    }, [video])

    useEffect(() => {
        console.log(active);

    }, [active])

    function GoodCo2() {
        return <h1>Op dit moment is het klimaat goed!</h1>
    }

    function BadCo2() {
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

    return(
        <div>
            <h1>KLIMAATJES</h1>
            <Reactpip key={video} isActive= {active} controls= {false} autoplay= {true} loop= {true} muted= {true} id='pip-video'>
                <source id='source' src= {video}/>
            </Reactpip>
            <Co2></Co2>
            <p>Voor meer informatie over co2 kunt u hier klikken.</p>
            <div>
                <button id='toggle-button' onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
            </div>
        </div>
    )
}

export default Klimaatjes