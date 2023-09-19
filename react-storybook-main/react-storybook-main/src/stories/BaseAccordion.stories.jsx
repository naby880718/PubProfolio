import React from "react";
import BaseAccordion from "../components/BaseAccordion";

export default {
	component: BaseAccordion,
	title: "BaseAccordion_Sooyoen",
};

const Template = (args) => <BaseAccordion {...args} />;
export const Default = Template.bind({});
Default.args = {
	arc: [
		{ title: "아코디언 제목입니다", contents: "아코디언 바디입니다." },
		{ title: "아코디언 제목입니다", contents: "아코디언 바디입니다." },
	],
};
