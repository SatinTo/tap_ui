import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Shimmer from "./Shimmer";

const meta = {
  title: "Shimmer",
  component: Shimmer,
  args: {
    style: { width: 200, height: 20 },
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
    Shimmer component for creating loading placeholder animations.
    Use this component to indicate that content is loading.
    `
  },
} satisfies Meta<typeof Shimmer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Circle: Story = {
  args: {
    style: { width: 60, height: 60, borderRadius: 30 },
  },
};

export const Rectangle: Story = {
  args: {
    style: { width: 100, height: 100 },
  },
};

export const LoadingCard: Story = {
  render: () => (
    <View style={{ flexDirection: 'row' }}>
      <Shimmer style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 }} />
      <View>
        <Shimmer style={{ width: 150, height: 15, marginBottom: 8 }} />
        <Shimmer style={{ width: 200, height: 15, marginBottom: 8 }} />
        <Shimmer style={{ width: 100, height: 15 }} />
      </View>
    </View>
  ),
};