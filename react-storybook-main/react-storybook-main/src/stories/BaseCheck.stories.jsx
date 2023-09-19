import React from "react";
import BaseCheck from "../components/BaseCheckBox";

export default {
	component: BaseCheck,
	title: "BaseCheckbox",
};

const Template = (args) => <BaseCheck {...args} />;
export const Default = Template.bind({});
Default.args = {
	options: [
		{ label: "체크박스1", ids: "options4" },
		{ label: "체크박스1", ids: "options4" },
	],
};
