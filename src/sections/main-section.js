import React from 'react'
import About from '../components/about'
import Process from '../components/process'
import Payments from '../components/payments'

/**
 * @class - MainSection
 * @description - contains the about us component
 * @style - background should be offset white
 * typography should be candara 
 * main heading should be blue with higher font weight
 * 
 * 
 */
export default class MainSection extends React.Component
{
    render=()=>{
        return(
            <div className="section2">
                <About/>
                <Process/>
                <Payments/>
                
            </div>
        )
    }
}