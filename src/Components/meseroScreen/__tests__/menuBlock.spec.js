import React from 'react';
import {
  render, fireEvent, cleanup, waitForElement, act,
} from 'react-testing-library';
import Waiter from '../menuBlock';

// describe('Waiter', () => {
//   beforeEach(cleanup);
//   it('Realiza función al hacer click', () => {
//     const menu = false;
//     const setMenu = !menu;
//     const { getByTestId } = render(<Waiter menu={menu} setMenu={setMenu} />);
//     fireEvent.click(getByTestId('render-breakfast'));
//     // expect().toEqual(nameInitial);
//   });
// });
// describe('Waiter', () => {
//   beforeEach(cleanup);
//   it('Realiza función al hacer click', () => {
//     const menu = false;
//     const setMenu = !menu;
//     const { getByTestId } = render(<Waiter menu={menu} setMenu={setMenu} />);
//     fireEvent.click(getByTestId('render-breakfast'));
//     // expect().toEqual(nameInitial);
//   });
// });

describe('Waiter', () => {
  beforeEach(cleanup);
  it('Pedido comienza vacío', () => {
    const { getByTestId } = render(<Waiter />);
    const list = getByTestId('orders-container');
    expect(list.children).toHaveLength(0);
  });
  it('Agrega un nuevo item al pedido de Desayuno', async () => {
    let getByTestId;
    act(() => {
      ({ getByTestId } = render(<Waiter />));
    });
    const btnDesayuno = getByTestId('render-breakfast');
    act(() => {
      fireEvent.click(btnDesayuno);
    });
    const btn = await waitForElement(() => getByTestId('P1-breakfast'));
    act(() => {
      fireEvent.click(btn);
    });
    const btnAdd = await waitForElement(() => getByTestId('P1-plus'));
    act(() => {
      fireEvent.click(btnAdd);
    });
    const btnMinus = await waitForElement(() => getByTestId('P1-minus'));
    act(() => {
      fireEvent.click(btnMinus);
    });
    const btnAddTwice = await waitForElement(() => getByTestId('P1-breakfast'));
    act(() => {
      fireEvent.click(btnAddTwice);
    });
    const btnRestday = getByTestId('render-restday');
    act(() => {
      fireEvent.click(btnRestday);
    });
    const btnRest = await waitForElement(() => getByTestId('P2-restday'));
    act(() => {
      fireEvent.click(btnRest);
    });
    const btnTrash = await waitForElement(() => getByTestId('P2-trash'));
    act(() => {
      fireEvent.click(btnTrash);
    });
    /* const btnTrash2 = await waitForElement(() => getByTestId('P1-trash'));
    act(() => {
      fireEvent.click(btnTrash2);
    }) */
    const btnSave = getByTestId('save-order');
    act(() => {
      fireEvent.click(btnSave);
    });
    const btnDelete = getByTestId('delete-order');
    act(() => {
      fireEvent.click(btnDelete);
    });
    const list = getByTestId('orders-container');
    expect(list.children).toHaveLength(0);
    const total = getByTestId('total-id');
    expect(total.textContent).toBe('0');
  });
  /* it('Agrega un nuevo item al pedido de Resto del día', async () => {
    let getByTestId;
    act(() => {
      ({ getByTestId } = render(<Waiter />));
    });
    const btnRestday = getByTestId('render-restday');
    act(() => {
      fireEvent.click(btnRestday);
    });
    const btn = await waitForElement(() => getByTestId('P2-restday'));
    act(() => {
      fireEvent.click(btn);
    });
    const btnAdd = await waitForElement(() => getByTestId('P1-plus'));
    act(() => {
      fireEvent.click(btnAdd);
    });
    const btnMinus = await waitForElement(() => getByTestId('P1-minus'));
    act(() => {
      fireEvent.click(btnMinus);
    });
    const list = getByTestId('orders-container');
    expect(list.children).toHaveLength(1);
    const total = getByTestId('total-id');
    expect(total.textContent).toBe('0');
  }); */
});
