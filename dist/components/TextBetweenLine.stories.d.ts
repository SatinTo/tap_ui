import type { StoryObj } from "@storybook/react";
import React from "react";
declare const meta: {
    title: string;
    component: React.FC<import("./TextBetweenLine.types").TextBetweenLineProps>;
    args: {
        children: string;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        children?: String | undefined;
    }>) => React.JSX.Element)[];
    parameters: {
        notes: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=TextBetweenLine.stories.d.ts.map