import React, { useEffect, useRef, useState } from 'react'
import '../style/klimaatjes.scss'
import Reactpip from 'react-picture-in-picture'

function Klimaatjes() {
    const [active, setActive] = useState(false)
    const [video, setVideo] = useState("assets/nyancat-placeholder.mp4")

    const videoSrc = useRef(undefined)

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

    return(
        <div>
            <h1>KLIMAATJES</h1>
            <Reactpip key={video} isActive= {active} controls= {false} autoplay= {true} loop= {true} muted= {true} id='pip-video'>
                <source ref= {videoSrc} id='source' src= {video}/>
            </Reactpip>
            <button onClick = {() => setVideo("assets/bobsplant.mp4")}>Toggle Video</button>
            <button onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
        </div>
    )
}

export default Klimaatjes