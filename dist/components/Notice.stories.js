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
        (Story) => (<View style={{ padding: 16 }}>
        <Story />
      </View>),
    ],
    parameters: {
        notes: `
    Used to show a non-floating notice or alert to the user.
    `
    },
};
export default meta;
export const DefaultWithTitle = {};
export const DefaultWithoutTitle = {
    args: {
        title: ""
    }
};
export const AlertVariantWithTitle = {
    args: {
        title: "This is a title",
        types: "alert",
    }
};
export const AlertVariantWithoutTitle = {
    args: {
        title: undefined,
        types: "alert",
    }
};
export const WarningVariantWithTitle = {
    args: {
        title: "This is a title",
        types: "warning",
    }
};
export const WarningVariantWithoutTitle = {
    args: {
        title: undefined,
        types: "warning",
    }
};
export const InfoVariantWithTitle = {
    args: {
        title: "This is a title",
        types: "info",
    }
};
export const InfoVariantWithoutTitle = {
    args: {
        title: undefined,
        types: "info",
    }
};
export const SuccessVariantWithTitle = {
    args: {
        title: "This is a title",
        types: "success",
    }
};
export const SuccessVariantWithoutTitle = {
    args: {
        title: undefined,
        types: "success",
    }
};
//# sourceMappingURL=Notice.stories.js.map