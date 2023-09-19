import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "../assets/scss/UlsanCard.scss";

function UlsanCard({ types, title, discount, img }) {
	return (
		<div
			className={classNames({
				card: true,
				sm_shadow: types === "sm_shadow",
				free: types === "free",
			})}>
			<div className="img_box">
				<img src={img} alt={title} />
			</div>
			<div className="inner_box">
				<div className="_inner_top">
					<div className="labels">
						<span className="label primary">포인트</span>
						<span className="label gray">당일사용</span>
					</div>
					<p className="tlt">{title}</p>
				</div>
				<div className="_inner_bottom">
					{types === "free" ? null : (
						<div className="price_wrap">
							{discount ? (
								<>
									<p className="origin_price">37,000원</p>
									<div className="price_area">
										<span className="discount_label">14%</span>
										<span className="price">
											<span>32,000원 </span>
										</span>
									</div>
								</>
							) : (
								<div className="price_area">
									<span className="price">
										<span>32,000원 </span>
									</span>
								</div>
							)}
						</div>
					)}
					{types === "free" ? (
						<>
							<button className="heart_btn">하트</button>
						</>
					) : (
						<div className="align jc_sb">
							<div className="score_wrap">
								<span className="num">5.0</span>
								<span className="cnt">(100)</span>
							</div>
							<button className="heart_btn">하트</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

UlsanCard.propTypes = {
	id: PropTypes.number,
	types: PropTypes.string,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	discount: PropTypes.bool.isRequired,
};

export default UlsanCard;
