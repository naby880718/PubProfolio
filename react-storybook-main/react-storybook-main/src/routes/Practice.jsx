import { useState, useEffect } from "react";
import BaseSwiper from "../components/BaseSwiper";

import "../assets/scss/practice.scss";
import ProductInfo from "../components/ProductInfo";
import BaseRadioBox from "../components/BaseRadioBox";
import BaseCounter from "../components/BaseCounter";
import BaseCheckBox from "../components/BaseCheckBox";
import BaseAccordion from "../components/BaseAccordion";

function Practice() {
	const [images, setImages] = useState([
		{
			src: "https://i.pinimg.com/564x/24/9d/d1/249dd142bb2db0367126de9811443b04.jpg",
			alt: "이미지1",
		},
		{
			src: "https://i.pinimg.com/564x/93/af/97/93af97263c7749e8c7b42c4261064c28.jpg",
			alt: "이미지1",
		},
	]);
	const [options, setOptions] = useState([
		{ label1: "ICE", label2: null, names: "options1" },
		{ label1: "HOT", label2: null, names: "options1" },
	]);
	const [sizeOptions, setSizeOptions] = useState([
		{ label1: "레귤러", label2: "375ml", names: "options2" },
		{ label1: "라지", label2: "480ml", names: "options2" },
		{ label1: "코끼리", label2: "591ml", names: "options2" },
	]);
	const [cupOptions, setCupOptions] = useState([
		{ label1: "매장용", label2: null, names: "options3" },
		{ label1: "일회용", label2: null, names: "options3" },
		{ label1: "개인", label2: null, names: "options3" },
	]);

	const [honeyOptions, setHoneyOptions] = useState([
		{ label: "제거", ids: "options4" },
		{ label: "조금", ids: "options4" },
		{ label: "보통", ids: "options4" },
		{ label: "많이", ids: "options4" },
	]);

	const [arcItems, setArcItems] = useState([
		{ title: "영양성분 정보", contents: "바보!" },
		{ title: "영양성분 정보", contents: "바보!" },
	]);

	useEffect(() => {}, [
		setOptions,
		setSizeOptions,
		setCupOptions,
		setHoneyOptions,
		setArcItems,
	]);

	return (
		<div className="container">
			<BaseSwiper images={images} />
			<div className="inner_container">
				<ProductInfo />
				<BaseRadioBox options={options} />
				<div className="inner_box">
					<ul className="select_ls">
						<li>
							<p className="selects_tlt">SIZE</p>
							<BaseRadioBox options={sizeOptions} />
						</li>
						<li>
							<p className="selects_tlt">CUP</p>
							<BaseRadioBox options={cupOptions} />
						</li>
						<li>
							<p className="selects_tlt">OPTIONS</p>
							<ul className="personal_options">
								<li className="flex js_sb">
									<span>샷추가</span>
									<BaseCounter />
								</li>
								<li className="flex js_sb">
									<span>헤이즐넛 시럽 추가</span>
									<BaseCounter />
								</li>
								<li className="flex js_sb">
									<span>바닐라 시럽 추가</span>
									<BaseCounter />
								</li>
								<li className="flex js_sb">
									<span>휘핑크림</span>
									<BaseCounter />
								</li>
								<li className="flex js_sb">
									<span>꿀양</span>
									<BaseCheckBox options={honeyOptions} />
								</li>
							</ul>
						</li>
						<li>
							<BaseAccordion arc={arcItems} />
						</li>
						<li className="flex js_sb">
							<p className="selects_tlt">주문수량</p>
							<BaseCounter />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Practice;
