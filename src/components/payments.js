import React from 'react'

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
            <div className="payments">
                <h1 class="title-marker">Payments</h1>
                <div className="payment-cards">
                    <div className="card">
                        <h2>Basic</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p>Only £3.99 a month!</p>

                        <button type="button">Subscribe</button>
                    </div>
                    <div className="card">
                        <h2>Flexi</h2>
                        <ul>
                            <li>Free food in flight</li>
                            <li>Ability to change scheduled flights</li>
                            <li></li>
                            <li></li>
                        </ul>
                                                <p>Only £3.99 a month!</p>

                        <button type="button">Subscribe</button>
                    </div>
                    <div id="best-card" className="card">
                        <h2>Ultra</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p>Only £3.99 a month!</p>
                        <button type="button">Subscribe</button>
                    </div>
                </div>
                
            </div>
        )
    }
}