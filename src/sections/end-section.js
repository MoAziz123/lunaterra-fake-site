import React from 'react'
import Footer from '../components/footer'
/**
 * @class - EndSection
 * @description - contains the footer
 * @style - background should be gray/dark colour
 * should contain fontawesome social media links
 * 
 * 
 */
export default class EndSection extends React.Component
{
    render=()=>{
        return(
            <div className="section3">
                <Footer/>
                
            </div>
        )
    }
}