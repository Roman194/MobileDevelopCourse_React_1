import React from 'react'
import Appearence from './SliderCard.module.css'
import customer from './assets/customer.svg'
import WhiteDivider from '../../ViewComponents/WhiteDivider'

const SliderCard: React.FC = () =>{
    return(
        <div className={Appearence.column}>
            <div className={Appearence.card}>
            <h1>What our customer are saying</h1>
            <WhiteDivider />

            <div className={Appearence.row}>

                <img src={customer} alt='Customer logo'/>
                <div className={Appearence.column}>
                    <h2>Edward Newgate</h2>
                    <h3>Founder Circle</h3>
                </div>
                <h2>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</h2>
            </div>
            </div>

            <div className={Appearence.row}>
                <button style= {{color: "rgba(91, 155, 243, 0.3)"}} className={Appearence.arrBut}>➜</button>
                
                    <div
                        className={Appearence.dot} 
                        style= {{backgroundColor: "rgba(91, 155, 243, 1)"}}>
                    </div>

                    <div
                        className={Appearence.dot} 
                        style= {{backgroundColor: "rgba(91, 155, 243, 0.3)"}}>
                    </div>

                    <div
                        className={Appearence.dot} 
                        style= {{backgroundColor: "rgba(91, 155, 243, 0.3)"}}>
                    </div>

                    <div
                        className={Appearence.dot} 
                        style= {{backgroundColor: "rgba(91, 155, 243, 0.3)"}}>
                    </div>
                
                <button style= {{color: "rgba(91, 155, 243, 1)"}} className={Appearence.arrBut}>➜</button>
            </div>
        </div>
    );
};

export default SliderCard;