import React from 'react'
import FontAwesome from 'react-fontawesome'

/**
 * @class - Footer
 * @description - footer to contain "social media links" and other stuff
 * @style - gray in colour, centered social media links - font-awesome
 * also should contain copyright 
 */
export default class Footer extends React.Component
{
    render=()=>{
        return(
            <div className="footer">
                <div className="social-links">
                    <FontAwesome className="fa-2x fa-twitter"/>

                </div>
                <p>Copyright &copy; - LunaTerra 2020</p>
                

            </div>
        )
    }
}