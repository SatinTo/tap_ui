import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text } from "react-native";
import ProfileTile from "./ProfileTile";

const meta = {
  title: "ProfileTile",
  component: ProfileTile,
  args: {
    imageUrl: "https://loremflickr.com/cache/resized/65535_53558353379_1d3608f92d_s_60_60_nofilter.jpg",
    primaryInfo: "John Doe",
    secondaryInfo: "Software Developer",
    addOnElement: <Text style={{ color: 'green' }}>Available</Text>,
    actionElement: <Text style={{ color: 'blue' }}>View Profile</Text>,
    isLoading: false,
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
    ProfileTile component for displaying user, merchant, or product information.
    Use this component to show a profile image, primary and secondary information, and optional add-on and action elements.
    `
  },
} satisfies Meta<typeof ProfileTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const LongText: Story = {
  args: {
    primaryInfo: "This is a very long name that should be truncated",
    secondaryInfo: "This is a very long description that should also be truncated",
  },
};

export const WithoutAddOn: Story = {
  args: {
    addOnElement: undefined,
  },
};

export const WithoutAction: Story = {
  args: {
    actionElement: undefined,
  },
};

export const MerchantExample: Story = {
  args: {
    imageUrl: "https://loremflickr.com/cache/resized/65535_53370820520_c4706813dc_s_60_60_nofilter.jpg",
    primaryInfo: "Tasty Burgers",
    secondaryInfo: "123 Main St, Cityville",
    addOnElement: <Text style={{ color: 'green' }}>Open</Text>,
    actionElement: <Text style={{ color: 'blue' }}>Order Now</Text>,
  },
};

export const ProductExample: Story = {
  args: {
    imageUrl: "https://loremflickr.com/cache/resized/65535_52820349952_6289fc5534_s_60_60_nofilter.jpg",
    primaryInfo: "Wireless Headphones",
    secondaryInfo: "$199.99",
    addOnElement: <Text style={{ color: 'red' }}>Sale</Text>,
    actionElement: <Text style={{ color: 'blue' }}>Add to Cart</Text>,
  },
};