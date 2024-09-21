import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid';

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        palette: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'link'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline'],
        },
        rounded: { control: 'boolean' },
        active: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        children: "Button",
        palette: 'primary',
        size: 'medium',
        variant: 'solid',
        rounded: false,
        active: false,
        disabled: false,
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
    A flexible Button component that supports various colors, sizes, and styles.
    It can contain text or other components as children.
    `,
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LargeSize: Story = {
    args: {
        size: 'large',
        children: 'Large Button',
        palette: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline Button',
        palette: 'success',
    },
};

export const Rounded: Story = {
    args: {
        rounded: true,
        children: 'Rounded Button',
        palette: 'danger',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
        palette: 'warning',
    },
};

export const Active: Story = {
    args: {
        active: true,
        children: 'Active Button',
        palette: 'info',
    },
};

export const WithIcon: Story = {
    args: {
        children: [
            <SolidHeartIcon key="icon" color="white" size={16} style={{ marginRight: 8 }} />,
            "Like"
        ],
        palette: 'secondary',
    },
};

export const LinkButton: Story = {
    args: {
        palette: 'link',
        variant: 'outline',
        children: 'Link Button',
    },
};