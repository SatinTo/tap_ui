import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AnimatedMessage from "./AnimatedMessage";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import colors from "../lib/colors";

const meta = {
    title: "AnimatedMessage",
    component: AnimatedMessage,
    args: {
        children: "Added to Cart",
        visible: true,
    },
    argTypes: {
        visible: {
            control: "boolean",
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
    AnimatedMessage is a component that displays a message with an animated entrance and exit.
    It can accept strings, Text components, or a combination of Text and Icon components as children.
    The component animates scale, opacity, and rotation when appearing or disappearing.
    `,
    },
} satisfies Meta<typeof AnimatedMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
    args: {
        children: [
            <CheckCircleIcon key="icon" color={colors.primary} size={20} />,
            <View key="spacer" style={{ width: 8 }} />,
            <Text key="text">Added to Cart</Text>
        ]
    },
};

export const WithIconAndPlainText: Story = {
    args: {
        children: [
            <CheckCircleIcon key="icon" color={colors.primary} size={20} />,
            "Added to Cart"
        ]
    },
};

export const PlainTextOnly: Story = {
    args: {
        children: "Added to Cart",
    },
};

export const MultipleLines: Story = {
    args: {
        children: [
            <CheckCircleIcon key="icon" color={colors.primary} size={20} />,
            <View key="spacer" style={{ width: 8 }} />,
            <View key="text-container">
                <Text>Added to Cart</Text>
                <Text style={{ fontSize: 12, color: colors.grey }}>You can checkout now</Text>
            </View>
        ]
    },
};

export const VisibilityToggle: Story = {
    render: () => {
        const [isVisible, setIsVisible] = useState(true);

        useEffect(() => {
            const interval = setInterval(() => {
                setIsVisible((prev) => !prev);
            }, 1000);

            return () => clearInterval(interval);
        }, []);

        return (
            <AnimatedMessage visible={isVisible}>
                {[
                    <CheckCircleIcon key="icon" color={colors.primary} size={20} />,
                    <View key="spacer" style={{ width: 8 }} />,
                    <Text key="text">Added to Cart</Text>
                ]}
            </AnimatedMessage>
        );
    },
};