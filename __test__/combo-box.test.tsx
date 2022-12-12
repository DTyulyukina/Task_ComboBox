import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { ComboBox } from '../src/components/combo-box';

import '@testing-library/jest-dom';

const optionsTest: string[] = ['winter', 'spring', 'summer', 'autumn'];
const valueTest: string | undefined = undefined;
const changeTestMock: typeof jest.fn = jest.fn();
const defaultValueTest: string = 'spring';

describe('Combobox Component', () => {
  test('Renders correctly Combobox component', () => {
    const tree = create(
      <ComboBox
        value={valueTest}
        optionList={optionsTest}
        onChange={changeTestMock}
        defaultValue={defaultValueTest}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders form with add value in Combobox', async () => {
    render(
      <ComboBox
        value={valueTest}
        optionList={optionsTest}
        onChange={changeTestMock}
        defaultValue={defaultValueTest}
      />
    );

    fireEvent.change(screen.getByDisplayValue(defaultValueTest), {
      target: { value: defaultValueTest }
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue(defaultValueTest)).toBeInTheDocument();
    });
  });
});
