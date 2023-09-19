import React from "react";
import PropTypes from "prop-types";
import "../assets/scss/baseCheck.scss";

function BaseCheckBox({ options }) {
	return (
		<>
			{options &&
				options.map((item, index) => (
					<p key={item.ids + index} className="checkbox">
						<input type="checkbox" name={item.ids} id={item.ids + index} />
						<label htmlFor={item.ids + index}>
							<span className="label">{item.label}</span>
						</label>
					</p>
				))}
		</>
	);
}

BaseCheckBox.propTypes = {
	options: PropTypes.array,
};

export default BaseCheckBox;
