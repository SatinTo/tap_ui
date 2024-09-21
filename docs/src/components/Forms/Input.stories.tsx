import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Input from "./Input";

const meta = {
    title: "Input",
    component: Input,
    args: {
        label: "Input Label",
        placeholder: "Enter text here",
        value: "",
        onChangeText: (text: string) => console.log(text),
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'phone'],
        },
        secureTextEntry: {
            control: 'boolean',
        },
        errorText: {
            control: 'text',
        },
        focused: {
            control: 'boolean',
        },
    },
    decorators: [
        (Story) => (
            <View style={{ padding: 16, backgroundColor: 'white' }}>
                <Story />
            </View>
        ),
    ],
    parameters: {
        notes: `
    Input is a versatile input component that supports different types of inputs:
    - Regular text input
    - Password input with show/hide functionality
    - Phone number input with country code
    
    It also supports error states and custom labels.
    `
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "Default text",
    },
} as any;

export const WithError: Story = {
    args: {
        value: "Invalid input",
        errorText: "This field is required",
    },
} as any;

export const Password: Story = {
    args: {
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
        secureTextEntry: true,
        value: "password123",
    },
} as any;

export const Phone: Story = {
    args: {
        type: "phone",
        label: "Phone Number",
        placeholder: "Enter your phone number",
        value: "9123456789",
    },
} as any;

export const Focused: Story = {
    args: {
        focused: true,
        value: "Focused input",
    },
} as any;

export const LongText: Story = {
    args: {
        label: "Description",
        value: "This is a very long text input to demonstrate how the component handles overflow and wrapping of text within the input field.",
    },
} as any;

export const Placeholder: Story = {
    args: {
        placeholder: "Custom placeholder text",
    },
} as any;