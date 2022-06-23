import React, { useEffect, useState } from 'react'
import '../style/klimaatjes.scss'
import Reactpip from 'react-picture-in-picture'

function Klimaatjes({name}) {
    const [active, setActive] = useState(false)
    const [video, setVideo] = useState('')
    const [klimaatjeText, setKlimaatjeText] = useState('')

    const videosUrls = {
        'co2' : {
            'good' : 'assets/co2-good.mp4',
            'high' : 'assets/co2-high.mp4'
        },
        'temp' : {
            'good' : 'assets/temp-good.mp4',
            'high' : 'assets/temp-high.mp4',
            'low' : 'assets/temp-low.mp4'
        }
    }

    useEffect(() => {
        setVideo(videosUrls[name].good)
    }, [])

    function randomData() {
        if (name === 'co2') {
            let data = Math.random() * 3
            console.log('CO2 = ' + data)
            if (data < 1.5) {
                setVideo(videosUrls.co2.good)
                setKlimaatjeText('Op dit moment is het klimaat goed!')
            } else if (data >= 1.5) {
                setVideo(videosUrls.co2.high)
                setKlimaatjeText('De CO2 is erg hoog. Doe een raam open!')
            }
        } else if (name === 'temp') {
            let data = Math.random() * 3
            console.log('TEMP = ' + data)
            if (data < 1) {
                setVideo(videosUrls.temp.low)
                setKlimaatjeText('Het is koud!')
            } else if (data > 1 && data < 2) {
                setVideo(videosUrls.temp.good)
                setKlimaatjeText('De temperatuur is lekker!')
            } else if (data > 2) {
                setVideo(videosUrls.temp.high)
                setKlimaatjeText('Het is hier warm!')
            } 
        }
    }

    setInterval(() => {
        randomData()
    }, 7000);

    return(
        <div>
            <Reactpip key={video} 
                isActive= {active} 
                controls= {false} 
                autoplay= {true} 
                loop= {true} 
                muted= {true} 
                id='pip-video'>
                <source id='source' src= {video}/>
            </Reactpip>
            <h2 className="descPipVid">{klimaatjeText}</h2>
            <p>Voor meer informatie over co2 kunt u hier klikken.</p>
            <div>
                <button id='toggle-button' onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
            </div>
        </div>
    )
}

export default Klimaatjes