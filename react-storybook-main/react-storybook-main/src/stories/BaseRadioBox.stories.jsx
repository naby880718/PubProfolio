import React from "react";

import BaseRadioBox from "../components/BaseRadioBox";

export default {
	component: BaseRadioBox,
	title: "BaseRadioBox",
};

const Template = (args) => <BaseRadioBox {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: [
		{ label1: "라디오", label2: "라디오 박스", names: "radio" },
		{ label1: "라디오2", label2: "라디오 박스2", names: "radio" },
	],
};
