import type { Meta } from "@storybook/react";
import React from "react";

import { SwitchToggle } from "@ui/components/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Toggle/SwitchToggle",
  component: SwitchToggle,
  tags: ["autodocs"],
} satisfies Meta<typeof SwitchToggle>;

export default meta;

export const Default = () => (
  <div>
    <SwitchToggle id="id01" />
  </div>
);

export const Primary = () => (
  <div>
    <SwitchToggle id="id02" color="primary" />
  </div>
);

export const TextRight = () => (
  <div>
    <SwitchToggle id="id03" color="primary" text="Text" />
  </div>
);

export const TextLeft = () => (
  <div>
    <SwitchToggle id="id04" color="primary" text="Text" textPosition="left" />
  </div>
);
