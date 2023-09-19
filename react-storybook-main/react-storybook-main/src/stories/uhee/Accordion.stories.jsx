// .storybook/Accordion.stories.js

import Accordion from "../../components/uhee/Accordion";

export default {
  title: 'Accordion',
  component: Accordion,
};

const Template = (args) => {
  return <Accordion {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { title: "제목입니다", content: "컨텐츠입니다." },
    { title: "제목입니다2", content: "컨텐츠입니다.2" }
  ],
};
