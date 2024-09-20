import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [withBackgrounds],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "normal", value: "white" },
        { name: "dark mode", value: "#0d1117" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
