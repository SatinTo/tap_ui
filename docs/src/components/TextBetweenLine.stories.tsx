import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import TextBetweenLine from "./TextBetweenLine";

// @ts-ignore
const meta = {
  title: "TextBetweenLine",
  component: TextBetweenLine,
  args: {
    children: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    notes: `
    Component to use as a separator between two components.
    *For example: Normal login on the top and Facebook login on the bottom.*
    `
  },
} satisfies Meta<typeof TextBetweenLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
