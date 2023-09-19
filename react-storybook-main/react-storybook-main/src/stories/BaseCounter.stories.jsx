import React from "react";

import BaseCounter from "../components/BaseCounter";

export default {
	component: BaseCounter,
	title: "BaseCounter",
};

const Template = (args) => <BaseCounter {...args} />;

export const Default = Template.bind({});
Default.args = {};
