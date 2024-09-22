import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import MagicText from "./MagicText";

const meta: Meta<typeof MagicText> = {
    title: "MagicText",
    component: MagicText,
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ornare fermentum. #hashtag",
        initialNumberOfLines: 3,
        trimLength: 100,
        ellipsisPosition: 'end',
    },
    argTypes: {
        initialNumberOfLines: {
            control: { type: 'number', min: 1, max: 10 },
        },
        trimLength: {
            control: { type: 'number', min: 10, max: 500 },
        },
        ellipsisPosition: {
            control: { type: 'radio' },
            options: ['end', 'middle'],
        },
    },
    decorators: [
        (Story) => (
            <View style={{ maxWidth: 400 }}>
                <Story />
            </View>
        ),
    ],
    parameters: {
        notes: `
    MagicText is a customizable text component with the following features:
    - Collapsible/expandable text with a "See more/less" button
    - Customizable initial number of lines and trim length
    - Clickable hashtags anywhere in the text
    - Customizable ellipsis position
    - Trimming of excessive line breaks
    - Custom text styling
    `
    },
};

export default meta;

type Story = StoryObj<typeof MagicText>;

export const Default: Story = {};

export const LongTextWithHashtags: Story = {
    args: {
        children: `

 
 
 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ornare fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sollicitudin quam elit, in vulputate lorem egestas non. Ut ultrices nec tellus vel tempus. Fusce arcu sapien, rutrum eget diam eget, interdum dapibus turpis. Maecenas ullamcorper felis eu accumsan malesuada. Nam sit amet feugiat ante. Duis arcu purus, aliquet in lobortis sit amet, maximus eget ex. Sed magna eros, maximus in rhoncus at, venenatis in nibh.

    #hasTagMiddle

 
  

    Integer quam urna, auctor nec dapibus vel, varius sed purus. 

    #hasTag1

    Integer quam urna, auctor nec dapibus vel, varius sed purus. #hasTag1 as 🤣 
    `,
        initialNumberOfLines: 5,
        trimLength: 200,
    },
};

export const MiddleEllipsis: Story = {
    args: {
        children: "This is a short text with a #hashtag in the middle and some more text at the end.",
        initialNumberOfLines: 2,
        trimLength: 30,
        ellipsisPosition: 'middle',
    },
};

export const CustomStyling: Story = {
    args: {
        children: "This text has #custom styling applied to it.",
        style: { fontSize: 18, color: 'purple' },
    },
};

export const WithHashtagPress: Story = {
    args: {
        children: "Click on this #hashtag to see an alert.",
        onHashtagPress: (hashtag: string) => alert(`You clicked: ${hashtag}`),
    },
};