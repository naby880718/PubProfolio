import React from 'react';

// 체크 형태의 라디오 추가 (수연대리님꺼 갖다씀 + 디폴트체크만 추가)
function CheckBox({options}){

    return (
        <div className="chk_rdo_box">
            {options &&
                options.map((item, index)=> (
                    <div key={item.names + index} className="item_box">
                        <input type="radio" name={item.names} id={item.names + index} defaultChecked={item.check} />
                        <label htmlFor={item.names + index}>{item.label1}</label>        
                    </div>
                ))
            }
            
        </div>
    );
};


export default CheckBox;