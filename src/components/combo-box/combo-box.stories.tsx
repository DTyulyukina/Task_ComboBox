import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComboBox } from './combo-box';

export default {
  title: 'ComboBox',
  component: ComboBox,
  argTypes: {
    value: {
      name: 'value',
      description: 'Сomponent accepting value',
      required: true,
      control: {
        type: null
      },
      defaultValue: null
    },
    onChange: {
      name: 'onChange',
      description: 'Function change ComboBox',
      control: {
        type: 'Event'
      },
      required: true
    },
    optionList: {
      name: 'optionList',
      description: 'Accepts a list of options ComboBox',
      options: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7'
      ],
      control: {
        type: 'array'
      },
      required: true
    },
    defaultValue: {
      name: 'defaultValue',
      description: 'Default value could be specified',
      defaultValue: 'Item 2',
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The _ComboBox_ component with a list of options (values for autocompletion)'
      }
    },
    actions: {
      handles: ['mouseleave', 'focus', 'keydown', 'click']
    }
  }
} as ComponentMeta<typeof ComboBox>;

const defaultComboBox: ComponentStory<typeof ComboBox> = ({
  optionList,
  defaultValue
}) => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <ComboBox
      value={value}
      onChange={setValue}
      optionList={optionList}
      defaultValue={defaultValue}
    />
  );
};

export const comboBoxComponent = defaultComboBox.bind({});
comboBoxComponent.args = {
  defaultValue: 'Item 2',
  optionList: [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7'
  ]
};
