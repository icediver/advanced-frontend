import { addDecorator } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/style-decorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/router-decorator/RouterDecorator';
import { Theme } from '../../src/app/providers/theme-provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
