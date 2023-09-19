import { useState } from "react";
import PropTypes from "prop-types";

function Counter ({optionName}){
    const [counter, setCounter] = useState(0);
    // minus 값이 무한정으로 내려가서 대리님 소스 참고하여 if 문 적용
    const minusCounter =()=> {
        if (counter > 0){
            setCounter((prev) => prev - 1);
        }
    }
    const plusCounter =()=> setCounter((prev) => prev + 1);
    return (
        <div className="counter_box">
            <div className="lft">
                <span>{optionName}</span>
            </div>
            <div className="rgt">
                <button className="btn_count" onClick={minusCounter}>-</button>
                <span className="count">{counter}</span>
                <button className="btn_count" onClick={plusCounter}>+</button>
            </div>

        </div>
    );
};


Counter.propTypes = {
    //isFree : PropTypes.bool,
    optionName: PropTypes.string,
};

export default Counter;