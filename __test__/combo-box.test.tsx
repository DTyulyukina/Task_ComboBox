import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { ComboBox } from '../src/components/combo-box';

import '@testing-library/jest-dom';

const optionsTest = ['winter', 'spring', 'summer', 'autumn'];
const valueTest = '';
const changeTestMock = jest.fn();

describe('Combobox Component', () => {
  test('Renders correctly Combobox component', () => {
    const tree = create(
      <ComboBox
        value={valueTest}
        optionList={optionsTest}
        onChange={changeTestMock}
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
      />
    );

    fireEvent.change(screen.getByDisplayValue(''), {
      target: { value: '' }
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('')).toBeInTheDocument();
    });
  });
});
