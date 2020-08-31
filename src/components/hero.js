import React from 'react'
/**
 * @class - Hero
 * @description - contains the call to action and summarizes site
 * @style - should be centered in the middle
 * should take up about 75% of screen height
 * h1 should be in michroma, p in candvana
 */
export default class Hero extends React.Component
{
    render=()=>{
        return(
            <div className="hero">
                <h1>Humanity's first hyperspace based transport</h1>
                <p>At LunaTerra, we have devised a new method of travel - the hyperspace engine.</p>
                <button>Start your journey</button>
            </div>
        )
    }
}