import classNames from "classnames";
import React, { useState } from "react";

function BaseAccordionItem({ item, index }) {
	const [active, setActive] = useState(null);
	const onToggle = () => {
		setActive(index === active ? null : index);
	};
	return (
		<li className={classNames({ open: index === active })}>
			<div className="accordion_head" onClick={onToggle}>
				<p>{item.title}</p>
				<button className="arrow">
					<p className="icon"></p>
				</button>
			</div>
			{index === active && (
				<div className="accordion_body">{item.contents}</div>
			)}
		</li>
	);
}

export default BaseAccordionItem;
