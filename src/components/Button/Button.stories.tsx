import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { MyButton, MyButtonProps } from "./Button";

const meta = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "Hello world",
    onPress: () => alert("Hello world"),
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<MyButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
