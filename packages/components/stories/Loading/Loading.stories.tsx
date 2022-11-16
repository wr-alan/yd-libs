import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from './index';

export default {
  title: 'Components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;
console.log(123)
const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
