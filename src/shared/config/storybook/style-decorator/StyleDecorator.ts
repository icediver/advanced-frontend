import 'app/styles/global.scss';
import { Story, StoryFn } from '@storybook/react';

export const StyleDecorator = (story: () => StoryFn) => story();
