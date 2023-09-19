import { useState, useEffect } from "react";

import "../assets/scss/baseCounter.scss";

function BaseCounter() {
	const [count, setCount] = useState(0);
	const onClickMinus = () => {
		if (count > 0) {
			setCount((val) => val - 1);
		}
	};
	const onClickPlus = () => setCount((val) => val + 1);

	useEffect(() => {}, [count]);
	return (
		<p className="counter">
			<button onClick={onClickMinus}> – </button>
			<input type="text" value={count} />
			<button onClick={onClickPlus}> + </button>
		</p>
	);
}

export default BaseCounter;
