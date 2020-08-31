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
                <h1>Payments</h1>
                <div className="payment-cards">
                    <div className="card">
                        <h2>Plan 1</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <button type="button">Subscribe</button>
                    </div>
                    <div className="card">
                        <h2>Plan 2</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <button type="button">Subscribe</button>
                    </div>
                    <div id="best-card" className="card">
                        <h2>Plan 3</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <button type="button">Subscribe</button>
                    </div>
                </div>
                
            </div>
        )
    }
}