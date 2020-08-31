import React from 'react'
import About from '../components/about'

/**
 * @class - StartSection
 * @description - contains the about us component
 * @style - background should be offset white
 * typography should be candara 
 * main heading should be blue with higher font weight
 * 
 * 
 */
export default class AboutSection extends React.Component
{
    render=()=>{
        return(
            <div className="section2">
                <About/>
            </div>
        )
    }
}