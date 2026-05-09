import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';
import {
  theme,
  createColorStyles,
  modeCustomProperties,
} from '../src/theme';
import { ColorModeContext } from '../src/use-color-mode';

const GlobalStyle = createGlobalStyle`
  html { --inter: 'Inter' }

  body {
    background-color: ${(props) => props.theme.colors.neutral[7]};
    ${modeCustomProperties}
    font-family: ${(props) => props.theme.fonts.systemSans};
    color: ${(props) => props.theme.colors.neutral[0]};
  }

  ::selection {
    background: ${(props) => props.theme.colors.brand.selection};
  }
`;

const withTheme = (Story, context) => {
  const mode = context.globals.colorMode || 'light';
  const setColorMode = () => {};
  return (
    <ThemeProvider theme={{ ...theme, ...createColorStyles(mode) }}>
      <ColorModeContext.Provider value={{ mode, setColorMode }}>
        <GlobalStyle />
        <Story />
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
};

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [withTheme],
  globalTypes: {
    colorMode: {
      description: 'Color mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Color mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
