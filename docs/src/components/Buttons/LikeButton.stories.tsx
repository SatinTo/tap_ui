import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import LikeButton from "./LikeButton";

const meta = {
  title: "LikeButton",
  component: LikeButton,
  args: {
    id: "1",
    likesCount: 100,
    disabled: false,
    active: false,
    isLoading: false,
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'Unique identifier for the likeable item',
    },
    likesCount: {
      control: { type: 'number' },
      description: 'Initial number of likes',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    active: {
      control: 'boolean',
      description: 'Whether the item is initially liked',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    notes: `
    LikeButton component for liking content.
    - Displays the number of likes
    - Animates when pressed
    - Supports loading state
    - Can be disabled
    - Optionally debounces like action
    - Accepts both number and string IDs
    - onLikeChange can return a Promise, number, or null
    `,
  },
} satisfies Meta<typeof LikeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {} as any;

export const Active: Story = {
  args: {
    active: true,
  },
} as any;

export const Disabled: Story = {
  args: {
    disabled: true,
  },
} as any;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
} as any;

export const HighLikeCount: Story = {
  args: {
    likesCount: 1000000,
  },
} as any;

export const WithCustomOnLikeChange: Story = {
  args: {
    onLikeChange: async (id, isLiked) => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      return isLiked ? 101 : 99;
    },
  },
} as any;