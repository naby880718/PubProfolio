import React from "react";

function ProductInfo() {
	return (
		<>
			<div className="default">
				<p className="category">카페/디저트</p>
				<h2 className="title">아이셔 마카롱</h2>
				<h3 className="en_title">Eisher Macarons</h3>
				<div className="flex js_sb">
					<p className="description">
						아이셔맛 마카롱입니다.
						<br />
						노란색이랑 짱이쁨 봄이다.
					</p>
					<p className="price">5,100원</p>
				</div>
			</div>
		</>
	);
}

export default ProductInfo;
