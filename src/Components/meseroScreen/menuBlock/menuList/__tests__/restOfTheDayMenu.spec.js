import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import RestOfTheDayMenu from '../restOfTheDayMenu';

describe('RestOfTheDayMenu', () => {
  beforeEach(cleanup);
  it('Filtra data con categoría "Resto del día"', () => {
    const data = [
      {
        id: 1, item: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 2, item: 'item 2', precio: 0, categoría: 'Resto del día',
      },
      {
        id: 3, item: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const addingItem = (item) => {
      expect(item).toEqual(data[0]);
    };
    const orders = [{}];
    const { getByTestId } = render(<RestOfTheDayMenu data={data} addingItem={addingItem} orders={orders} />);
    const container = getByTestId('container-restoftheday');
    expect(container.children).toHaveLength(1);
  });
  it('Muestra nombres del Menú del desayuno', () => {
    const data = [
      {
        id: 'P1', nombre: 'item 1', precio: 0, categoría: 'Resto del día',
      },
    ];
    const addItemSecond = (item) => {
      expect(item).toEqual(data[0]);
    };
    const orderSecond = [{}];
    const { getAllByTestId } = render(<RestOfTheDayMenu data={data} orders={orderSecond} addingItem={addItemSecond} />);
    const nameList = getAllByTestId('container-restoftheday').map(button => button.textContent);
    const fakeData = data.map(c => c.nombre);
    expect(nameList).toEqual(fakeData);
  });
  it('Realiza función al hacer click', () => {
    const data = [
      {
        id: 'P1', nombre: 'item 1', precio: 0, categoría: 'Resto del día',
      },
    ];
    const addItem = (item) => {
      expect(item).toEqual(data[0]);
    };
    const order = [{}];
    const { getByTestId } = render(<RestOfTheDayMenu data={data} addingItem={addItem} orders={order} />);
    fireEvent.click(getByTestId('P1-restday'));
  });
});
