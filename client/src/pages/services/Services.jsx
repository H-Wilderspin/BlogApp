import React from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import './services.css'

export default function Services() {

    return (
        <div className='Services'>
            <div className="ServicesLeft">
                <h1>What we can do for you</h1>

                <div className="ServiceList">

                    <div className="Service">
                        <h2>Half day blitz</h2>
                        <span>£50</span>
                    </div>
                    <div className="Service">
                        <h2>Full day blitz</h2>
                        <span>£90</span>
                    </div>
                    <div className="Service">
                        <h2>Premium subscription</h2>
                        <span>£35 per visit (weekly/monthly)</span>
                        <p>If youre happy with our work we can provide a regular, hastle free service. Just check a few boxes for your requirements and set up a direct debit. Then you can settle in to your perfect space without ever having to think about it again.</p>
                    </div>

                </div>
                <h2>To get the most out of your time with us pick a few things from down below and give use a call today! </h2>
                <div className="ServiceCats">

                    <div className="ServicesCat">
                        <h2>Clearing</h2>
                        <h3>If entropy already took over we've got you, that 20ft bramble thicket won't faze us</h3>
                        <ul className="ServicesUl">
                            <li className="ServiceLi">I don't like that there</li>
                            <li className="ServiceLi">Where did all these Ash seedlings come from?</li>
                            <li className="ServiceLi">This Ivy just keeps coming back...</li>
                            <li className="ServiceLi">Kill them all! I want a patio!</li>
                        </ul>
                    </div>

                    <div className="ServicesCat">
                        <h2>Planting</h2>
                        <h3>Got a dream of a perfect garden but not the time or energy for getting mucky?</h3>
                        <ul className="ServicesUl">
                            <li className="ServiceLi"> I need help selecting the perfect plants for my hanging baskets & pots</li>
                            <li className="ServiceLi"> Plant my borders & bedding areas</li>
                            <li className="ServiceLi"> I need privacy without blocking out sunshine</li>
                            <li className="ServiceLi"> We NeEd to sAve the bEEs!?!</li>
                        </ul>
                    </div>

                    <div className="ServicesCat">
                        <h2 >Sprucing</h2>
                        <h3>Got a cottage garden but wanted Versailles? Topiary and lawns need that little bit extra</h3>
                        <ul className="ServicesUl">
                            <li className="ServiceLi">Sculpt my buxusus'sss'</li>
                            <li className="ServiceLi">Feed the grass, it looks hungry</li>
                            <li className="ServiceLi">My hedges are a bit fluffy</li>
                            <li className="ServiceLi">I'd like a funky shaped lawn please</li>
                        </ul>
                    </div>

                    <div className="ServicesCat">
                        <h2>Maintenance</h2>
                        <h3>Nature wants your garden and she wants it yesterday!</h3>
                        <ul className="ServicesUl">
                            <li className="ServiceLi">Help! Weeds!</li>
                            <li className="ServiceLi">I just don't have time to water everything</li>
                            <li className="ServiceLi">My roses need some serious pruning and I think that might be blackspot?</li>
                            <li className="ServiceLi">If the lawn doesn't get mowed soon I'm gonna need the clearing option</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}
