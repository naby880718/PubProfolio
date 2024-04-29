import type { Meta } from "@storybook/react";
import React from "react";

import { PasswordInput } from "@ui/components/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Form/Input/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Default = () => (
  <div>
    <PasswordInput id="iptDefault" placeholder="input here.." />
  </div>
);
