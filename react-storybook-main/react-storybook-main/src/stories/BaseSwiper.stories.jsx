import React from "react";

import BaseSwiper from "../components/BaseSwiper";

export default {
	component: BaseSwiper,
	title: "BaseSwiper",
};

const Template = (args) => <BaseSwiper {...args} />;

export const Default = Template.bind({});
Default.args = {
	images: [
		{
			src: "https://images.unsplash.com/photo-1684569546963-792efe6b2a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
			alt: "이미지1",
		},
		{
			src: "https://images.unsplash.com/photo-1684569546963-792efe6b2a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
			alt: "이미지1",
		},
	],
};
