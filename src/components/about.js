import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/hero'

/**
 * @class - About
 * @description - contains about us - providing a brief explanation of what LunaTerra does
 * @style - background should offset white
 * 
 */
export default class About extends React.Component
{
    render=()=>{
        return(
            <div className="about-wrapper">
            <div className="about">
                <h1 className="title-marker">Our Story</h1>
                <p>At LunaTerra, we first discovered the existence of Mars-Mercury particles. Particles that are so fast, that they break the speed of light barrier.
                    With the help of NASA and the world's space agencies, we were able to build the hyperspace transporter, a vehicle that can take you to the stars.
                    Nevermore will humanity </p>
            </div>
            </div>
        )
    }
}