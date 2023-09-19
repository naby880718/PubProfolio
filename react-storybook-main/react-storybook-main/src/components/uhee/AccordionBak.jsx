import React, { useState } from 'react';

function Accordion(){
    const [boxOpen, setBoxOpen] = useState(false);
    const [boxItems, setBoxItems] = useState([
        {title: "제목입니다" , content: "컨텐츠입니다."},
        {title: "제목입니다2" , content: "컨텐츠입니다.2"}
    ]);
    const onClick = () => {
        if( boxOpen === false){
            setBoxOpen(true)
        }else{
            setBoxOpen(false)
        }
    }
    return (
        <div className="accordion">
            <ul>
                {boxItems.map((item, index) => (
                    <li 
                    key={index} 
                    onClick={onClick} 
                    className={!boxOpen ? "" : "open"}>
                        <div className="accordion_head">
                            {item.title}
                            <i className="icon"></i>
                        </div>
                        {
                            !boxOpen ? null : 
                            <div className="accordion_body">
                                {item.content}
                            </div>
                        }
                    </li>
                ))}
               
            </ul>
        </div>
    );
};

export default Accordion;