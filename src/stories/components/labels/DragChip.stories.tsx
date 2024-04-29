import type { Meta } from "@storybook/react";
import React from "react";

import { DragChip } from "@ui/components/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "components/Labels/DragChip",
  component: DragChip,
  tags: ["autodocs"],
} satisfies Meta<typeof DragChip>;

export default meta;
// type Story = StoryObj<typeof meta>

export const Default = () => <DragChip>Design</DragChip>;
export const Drag = () => <DragChip drag>Design</DragChip>;
