import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Notice from "./Notice";

const meta = {
  title: "Notice",
  component: Notice,
  args: {
    title: "This is a title",
    children: "This is a content"
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
    Used to show a non-floating notice or alert to the user.
    `
  },
} satisfies Meta<typeof Notice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultWithTitle: Story = {};

export const DefaultWithoutTitle: Story = {
    args: {
        title: ""
    }   
};

export const AlertVariantWithTitle: Story = {
    args: {
        title: "This is a title",
        types: "alert",
    }   
};

export const AlertVariantWithoutTitle: Story = {
    args: {
        title: undefined,
        types: "alert",
    }
};

export const WarningVariantWithTitle: Story = {
    args: {
        title: "This is a title",
        types: "warning",
    }
};

export const WarningVariantWithoutTitle: Story = {
    args: {
        title: undefined,
        types: "warning",
    }
};

export const InfoVariantWithTitle: Story = {
    args: {
        title: "This is a title",
        types: "info",
    }
};

export const InfoVariantWithoutTitle: Story = {
    args: {
        title: undefined,
        types: "info",
    }
};

export const SuccessVariantWithTitle: Story = {
    args: {
        title: "This is a title",
        types: "success",
    }
};

export const SuccessVariantWithoutTitle: Story = {
    args: {
        title: undefined,
        types: "success",
    }
};
