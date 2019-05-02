import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Orders from '../orders';

describe('Orders', () => {
  beforeEach(cleanup);
  it('Se muestra item ordenado', () => {
    const orders = [
      {
        id: 1, nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 3, nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const trashOrder = (item) => {
      expect(item).toEqual('P1');
    };
    const setOrder = () => {
    };
    const { getByTestId } = render(<Orders orders={orders} setOrder={setOrder} trashOrder={trashOrder} />);
    const nameList = getByTestId('orders-container');
    expect(nameList.children).toHaveLength(2);
  });
  it('Muestra nombres del Menú del desayuno', () => {
    const orders = [
      {
        id: 1, nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 3, nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const trashOrder = (item) => {
      expect(item).toEqual('P1');
    };
    const setOrder = () => {
    };
    const { getAllByTestId } = render(<Orders orders={orders} setOrder={setOrder} trashOrder={trashOrder}/>);
    const nameList = getAllByTestId('name-order').map(button => button.textContent);
    const fakeData = orders.map(c => c.nombre);
    expect(nameList).toEqual(fakeData);
  });
  it('Realiza función al hacer click en botón plus', () => {
    const orders = [
      {
        id: 'P1', nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 'P3', nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const setOrder = () => {
    };
    const trashOrder = (item) => {
      expect(item).toEqual('P1');
    };
    const { getByTestId } = render(<Orders orders={orders} setOrder={setOrder} trashOrder={trashOrder}/>);
    fireEvent.click(getByTestId('P1-plus'));
  });
  it('Realiza función al hacer click en botón minus', () => {
    const orders = [
      {
        id: 'P1', nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 'P3', nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const setOrder = () => {
    };
    const trashOrder = (item) => {
      expect(item).toEqual('P1');
    };
    const { getByTestId } = render(<Orders orders={orders} trashOrder={trashOrder} setOrder={setOrder} />);
    fireEvent.click(getByTestId('P1-minus'));
  });
  it('Realiza la funciòn trashOrder', () => {
    const orders = [
      {
        id: 'P1', nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 'P3', nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const setOrder = () => {
    };
    const trashOrder = (item) => {
      expect(item).toEqual('P1');
    };
    const { getByTestId } = render(<Orders orders={orders} trashOrder={trashOrder} setOrder={setOrder} />);
    fireEvent.click(getByTestId('P1-trash'));
  });
});
