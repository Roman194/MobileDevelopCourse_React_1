import React from 'react'
import appearance from './SliderCard.module.css'
import customer from './assets/customer.svg'
import Divider from '../../ViewComponents/Divider'
import { titlesCenter } from '../../../common.module.css'
import arrowRight from './assets/arrow-right.svg'
import arrowLeftDisabled from './assets/arrow-left-disabled.svg'
import dots from '../../../assets/dots.svg'

const SliderCard: React.FC = () =>{
	return (
		<div className={appearance.column}>
			<div className={appearance.card}>
				<div className={titlesCenter}>
					<h1>What our customer are saying</h1>
					<Divider white />
				</div>

				<div className={appearance.row}>
					<div className={appearance.customerInfo}>
						<img src={customer} alt='Customer photo'/>
						<div className={appearance.customerText}>
							<span className={appearance.customerName}>Edward Newgate</span>
							Founder Circle
						</div>
					</div>
					<div className={appearance.reviewContent}>
						“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
					</div>
				</div>
			</div>

			<div className={appearance.controls}>
				<button className={appearance.arrBut}>
					<img src={arrowLeftDisabled} alt="⬅" />
				</button>
				
				<div
					className={appearance.dot} 
					style= {{backgroundColor: "rgba(91, 155, 243, 1)"}}>
				</div>

				<div
					className={appearance.dot} 
					style= {{backgroundColor: "rgba(91, 155, 243, 0.3)"}}>
				</div>

				<div
					className={appearance.dot} 
					style= {{backgroundColor: "rgba(91, 155, 243, 0.3)"}}>
				</div>

				<div
					className={appearance.dot} 
					style= {{backgroundColor: "rgba(91, 155, 243, 0.3)"}}>
				</div>
				
				<button className={appearance.arrBut}>
					<img src={arrowRight} alt="➡" />
				</button>
			</div>
		</div>
	);
};

export default SliderCard;