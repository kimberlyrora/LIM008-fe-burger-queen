import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import HeaderOrders from '../headerOrders';

describe('HeaderOrders', () => {
  beforeEach(cleanup);
  it('Establece el nuevo valor del input al suceder evento onChange', () => {
    const nameInitial = '';
    const setName = (obj) => {
      const objCopy = [...obj];
      objCopy.value = 'Kimberly';
      return objCopy;
    };
    const { getByTestId } = render(<HeaderOrders nameInitial={nameInitial} setName={setName} />);
    const input = getByTestId('name-customer');
    fireEvent.change(input, setName);
    expect(input.value).toEqual(nameInitial);
  });
});
