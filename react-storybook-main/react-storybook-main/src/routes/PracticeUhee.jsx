import { useState, useEffect } from "react";
import Swiper from "../components/uhee/Swiper";
import Radio from "../components/uhee/Radio";
import Counter from "../components/uhee/Counter";
import CheckBox from '../components/uhee/Check';
import Accordion from "../components/uhee/Accordion";
import "../assets/scss/Practice_uhee.scss";

function PracticeUhee(){
	const [images, setImages] = useState([
		{
			src: "https://openimage.interpark.com/goods_image_big/3/5/7/6/9503133576_l.jpg",
			alt: "매끼얘로 1",
		},
		{
			src: "https://cdn.imweb.me/upload/S20190607a1e6e8ff79294/5165a8a7d1729.jpg",
			alt: "매끼얘로 2",
		},
	]);
    const [listOption, setListOption] = useState([
        { title: "핑 하고 불나와", content: "에너에너지 발사해" },
        { title: "마치된것가타손오공", content: "다룸다림다" }
    ]);
    const [creamOptions, setCreamOption] = useState([
        { label1: "제거", names: "cream", check: false},
        { label1: "조금", names: "cream" ,check: false},
        { label1: "보통", names: "cream",check: true },
        { label1: "충치유발", names: "cream" ,check: false}, 
    ]);
    const [honeyOptions, setHoneyOption] = useState([
        { label1: "제거", names: "honey", check: false },
        { label1: "조금", names: "honey", check: false },
        { label1: "보통", names: "honey" , check: true},
        { label1: "충치유발", names: "honey", check: false }, 
    ]);
    return (
        <div className='container'>
            <div className="top_container">
                <div className="slide_cont">
                    <Swiper images={images} />
                </div>
                <div className="detail_cont">
                    <div className="inner_top">
                        <p className="label">COFFEE</p>
                        <p className="title">캬라멜 매끼얘로</p>
                        <div className="align">
                            <p className="dec">아메리카노가 질릴때는 캐래맬 매기얘로 한 잔 어떠세요</p>
                            <p className="price">5,000원</p>
                        </div>

                    </div>
                </div>
                
                <div className="radio_cont">
                    <div className="align">
                        <Radio group={"menuOption"} value={"Ice"} text={"Ice"} check={true} />
                        <Radio group={"menuOption"} value={"Hot"} text={"Hot"} />
                    </div>
                </div>
            </div>
            <div className="mid_container">
                <div className="radio_cont">
                    <div className="size">
                        <p className="tlt">size</p>
                        <div className="align">
                            <Radio group={"sizeOption"} value={"Regular"} text={"레귤러"} check={true} />
                            <Radio group={"sizeOption"} value={"Large"} text={"라지"} />
                            <Radio group={"sizeOption"} value={"Jumbo"} text={"코끼리"} />
                        </div>
                    </div>
                    <div className="cup">
                        <p className="tlt">cup</p>
                        <div className="align">
                            <Radio group={"cupOption"} value={"inMarket"} text={"매장용"} check={true} />
                            <Radio group={"cupOption"} value={"once"} text={"일회용"} />
                            <Radio group={"cupOption"} value={"personal"} text={"개인용"} />
                        </div>
                    </div>
                </div>
                <div className="option_cont">
                    <ul>
                        <li>
                            <Counter optionName={"샷추가"}/>                        
                        </li>
                        <li>
                            <Counter optionName={"바닐라 시럽 추가"}/>
                        </li>
                        <li className="align">
                            <div className="lft">
                                <p className="tlt">휘핑 크림</p>
                            </div>
                            <div className="rgt">
                                <CheckBox options={creamOptions} />
                            </div>
                        </li>
                        <li className="align">
                            <div className="lft">
                                <p className="tlt">꿀 양</p>
                            </div>
                            <div className="rgt"> 
                                <CheckBox options={honeyOptions} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="accordion_cont">
                    <Accordion options={listOption}/>
                </div>
            </div>
        
        </div>
    );
};

export default PracticeUhee;