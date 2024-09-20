import type { StoryObj } from "@storybook/react";
import React from "react";
declare const meta: {
    title: string;
    component: React.FC<import("./Notice.types").NoticeProps>;
    args: {
        title: string;
        children: string;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        children: String;
        title?: String | undefined;
        types?: ("default" | "alert" | "success" | "warning" | "info") | undefined;
    }>) => React.JSX.Element)[];
    parameters: {
        notes: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultWithTitle: Story;
export declare const DefaultWithoutTitle: Story;
export declare const AlertVariantWithTitle: Story;
export declare const AlertVariantWithoutTitle: Story;
export declare const WarningVariantWithTitle: Story;
export declare const WarningVariantWithoutTitle: Story;
export declare const InfoVariantWithTitle: Story;
export declare const InfoVariantWithoutTitle: Story;
export declare const SuccessVariantWithTitle: Story;
export declare const SuccessVariantWithoutTitle: Story;
//# sourceMappingURL=Notice.stories.d.ts.map