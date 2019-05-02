import React from 'react';
import MockFirebase from 'mock-cloud-firestore';
import {
  render, fireEvent, cleanup, waitForElement, act,
} from 'react-testing-library';

import Waiter from '../menuBlock';

const fixtureData = {
  __collection__: {
    Menú: {
      __doc__: {
        abc1d: {
          cantidad: 0,
          categoría: 'Desayuno',
          id: 'P1-rest',
          nombre: 'Café americano',
          precio: 5,
          producto: 'Breakfast',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

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
  it('Agrega un nuevo item al pedido', async () => {
    const { getByTestId } = render(<Waiter />);
    const btn = await waitForElement(() => getByTestId('P1-rest'));
    // const btn2 = await waitForElement(() => getByTestId('P2-breakfast'));
    await act(() => {
      fireEvent.click(btn);
    });
    // await act(async () => {
    //   fireEvent.click(btn2);
    // });
    const list = getByTestId('orders-container');
    expect(list.children).toHaveLength(1);
    // const total = getByTestId('total-id');
    // expect(total.textContent).toBe('5');
  });
});
