import React from "react";
import "../assets/scss/Accordion.scss";
import BaseAccordionItem from "./BaseAccordionItem";

function BaseAccordion({ arc }) {
	return (
		<div className="accordion">
			<ul>
				{arc &&
					arc.map((item, index) => (
						<BaseAccordionItem item={item} index={index} key={index} />
					))}
			</ul>
		</div>
	);
}

export default BaseAccordion;
