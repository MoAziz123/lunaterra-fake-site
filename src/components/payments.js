import React from 'react'
import FontAwesome from 'react-fontawesome'

/**
 * @class - Payments
 * @description - contains the 3 payment cards that showcases plan
 * @style - two cards should be white in colour, final one in spacey theme to showcase best
 * also should contain a heading title of "Payments"
 * first two cards should have white backgrounds to help emphahise final one
 */
export default class Payments extends React.Component
{
    
    render=()=>{
        return(
            <div className="payments" >
                <h1 className="title-marker">Payments</h1>
                <div className="payment-cards">
                    <div className="card">
                        <h1>Basic</h1>
                        <text className="price">£499.99</text>
                        <ul>
                        <li><FontAwesome className="fa fa-check"/>Catered for whilst you stay with us</li>
                        <li><FontAwesome className="fa fa-check"/>One extra ticket</li>
                        <li><FontAwesome className="fa fa-check"/>Free storage</li>
                        <li><FontAwesome className="fa fa-check"/>Chance to enter a raffle</li>
                        </ul>

                        <button type="button">Subscribe</button>
                    </div>
                    <div className="card">
                        <h1>Flexi</h1>
                        <text className="price">£999.99</text>
                        <ul>
                        <li><FontAwesome className="fa fa-check"/>Upgrade to gourmet catering</li>
                        <li><FontAwesome className="fa fa-check"/>Family ticket</li>
                        <li><FontAwesome className="fa fa-check"/>Two storage rooms</li>
                        <li><FontAwesome className="fa fa-check"/>Extra room</li>
                        </ul>

                        <button type="button">Subscribe</button>
                    </div>
                    <div id="best-card" className="card">
                        <h1>Ultra</h1>
                        
                        <text className="price">£1449.99</text>
                        <ul>
                            <li><FontAwesome className="fa fa-check"/>Upgrade to Michelin catering</li>
                            <li><FontAwesome className="fa fa-check"/>Floor space given</li>
                            <li><FontAwesome className="fa fa-check"/>Free getaway craft in case of emergency</li>
                            <li><FontAwesome className="fa fa-check"/>Medical support</li>
                        </ul>
                        <button type="button">Subscribe</button>
                    </div>
                </div>
                
            </div>
        )
    }
}