import React from "react";
import "../assets/scss/baseRadio.scss";
function BaseRadio({ options }) {
	return (
		<div className="radio_box">
			{options &&
				options.map((item, index) => (
					<p key={item.names + index}>
						<input type="radio" name={item.names} id={item.names + index} />
						<label htmlFor={item.names + index}>
							<span className="label">{item.label1}</span>
							{item.label2 && <span>{item.label2}</span>}
						</label>
					</p>
				))}
		</div>
	);
}

export default BaseRadio;
