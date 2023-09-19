import React from "react";
import UlsanCard from "../components/UlsanCard";

export default {
	component: UlsanCard,
	title: "UlsanCard",
};

const Template = (args) => <UlsanCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: "50059",
	types: "",
	img: "https://i.pinimg.com/564x/26/4d/84/264d84335d66e9d15737d89ab4cb193a.jpg",
	title: "고래살리고 패스",
	discount: true,
};
export const NoDiscount = Template.bind({});
NoDiscount.args = {
	...Default.args,
	discount: false,
};

export const Free = Template.bind({});
Free.args = {
	...Default.args,
	types: "free",
	discount: false,
};

export const Shadow = Template.bind({});
Shadow.args = {
	...Default.args,
	types: "sm_shadow",
	discount: false,
};
