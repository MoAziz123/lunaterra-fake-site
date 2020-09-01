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
                    <FontAwesome className="fa-2x fa-twitter icon"/>
                    <FontAwesome className="fa-2x fa-instagram icon"/>
                    <FontAwesome className="fa-2x fa-snapchat icon"/>
                    <FontAwesome className="fa-2x fa-linkedin icon"/>
                </div>
                <p>Copyright &copy; - Mo Aziz 2020</p>
                

            </div>
        )
    }
}