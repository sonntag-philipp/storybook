import type { FunctionComponent, ComponentProps } from 'react';
import React from 'react';
import type { StoryObj } from '@storybook/react';
import { styled } from '@storybook/theming';
import { TooltipMessage } from './TooltipMessage';
import { WithToolTipState as WithTooltip } from './WithTooltip';

const ViewPort = styled.div({
  height: 300,
});

const BackgroundBox = styled.div({
  width: 500,
  height: 500,
  overflowY: 'scroll',
  background: '#eee',
  position: 'relative',
});

const Spacer = styled.div({
  height: 100,
});

const Trigger = styled.div({
  width: 200,
  height: 100,
  backgroundColor: 'red',
  color: 'white',
});

interface TooltipProps {
  onHide?: () => void;
}

const Tooltip: FunctionComponent<TooltipProps> = ({ onHide }) => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
    links={[
      {
        title: 'Continue',
        onClick: onHide,
      },
    ]}
  />
);

export default {
  component: WithTooltip,
  decorators: [
    (storyFn: any) => (
      <ViewPort>
        <BackgroundBox>
          <Spacer />
          {storyFn()}
        </BackgroundBox>
      </ViewPort>
    ),
  ],
};

export const SimpleHover: StoryObj<ComponentProps<typeof WithTooltip>> = {
  args: {
    placement: 'top',
    trigger: 'hover',
  },
  render: (args) => (
    <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
  ),
};

export const SimpleHoverFunctional: StoryObj<ComponentProps<typeof WithTooltip>> = {
  args: {
    placement: 'top',
    trigger: 'hover',
  },
  render: (args) => (
    <WithTooltip tooltip={Tooltip} {...args}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
  ),
};

export const SimpleClick: StoryObj<ComponentProps<typeof WithTooltip>> = {
  args: {
    placement: 'top',
    trigger: 'click',
  },
  render: (args) => (
    <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ),
};

export const SimpleClickStartOpen: StoryObj<ComponentProps<typeof WithTooltip>> = {
  args: {
    placement: 'top',
    trigger: 'click',
    startOpen: true,
  },
  render: (args) => (
    <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ),
};

export const SimpleClickCloseOnClick: StoryObj<ComponentProps<typeof WithTooltip>> = {
  args: {
    placement: 'top',
    trigger: 'click',
    closeOnClick: true,
  },
  render: (args) => (
    <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ),
};

export const WithoutChrome: StoryObj<ComponentProps<typeof WithTooltip>> = {
  args: {
    placement: 'top',
    trigger: 'click',
    hasChrome: false,
  },
  render: (args) => (
    <WithTooltip tooltip={<Tooltip />} {...args}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ),
};
