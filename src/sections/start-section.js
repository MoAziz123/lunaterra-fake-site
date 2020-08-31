import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/hero'

/**
 * @class - StartSection
 * @description - contains the nav and hero together
 * @style - background should be a flat space design
 * 
 */
export default class StartSection extends React.Component
{
    render=()=>{
        return(
            <div className="section1">
                <Nav/>
                <Hero/>
            </div>
        )
    }
}