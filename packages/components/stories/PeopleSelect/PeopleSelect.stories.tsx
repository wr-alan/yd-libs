import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { rest } from "msw";
import PeopleSelect from "./index";

export default {
  title: "Business/PeopleSelect",
  component: PeopleSelect,
  decorators: [
    (Story) => (
      <>
        <Story />
        <ReactQueryDevtools />
      </>
    ),
  ],
} as ComponentMeta<typeof PeopleSelect>;

const Template: ComponentStory<typeof PeopleSelect> = (args) => (
  <PeopleSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  msw: {
    handlers: [
      rest.get("/people", (req, res, ctx) => {
        return res(
          ctx.json({
            people: [
              { name: "Wade Cooper", value: 1 },
              { name: "Arlene Mccoy", value: 2 },
              { name: "Devon Webb", value: 2 },
              { name: "Tom Cook", value: 2 },
              { name: "Tanya Fox", value: 2 },
              { name: "Hellen Schmidt", value: 2 },
            ],
          })
        );
      }),
    ],
  },
};
