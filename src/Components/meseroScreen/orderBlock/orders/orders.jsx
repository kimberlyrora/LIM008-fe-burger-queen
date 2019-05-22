import React from 'react';
import PropTypes from 'prop-types';
import './orders.css';

const Orders = ({ orders, trashOrder, setOrder }) => {
  const plusOne = (id) => {
    const newOrders = orders.map((e) => {
      if (e.id === id) {
        const newElem = { ...e };
        newElem.cantidad += 1;
        return newElem;
      }
      return e;
    });
    setOrder(newOrders);
  };
  const minusOne = (id) => {
    const newOrders = orders.map((e) => {
      if (e.id === id) {
        const newElem = { ...e };
        newElem.cantidad -= 1;
        return newElem;
      }
      return e;
    });
    setOrder(newOrders);
  };
  return (
    <div data-testid="orders-container" className="all">
      {orders.map(elem => (
        <div key={elem.id} className="container-fluid">
          <div className="row">
            <div className="col-4 col-sm-5 col-md-5 col-lg-5 col-xl-5 common" data-testid="name-order">{elem.nombre}</div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 common">
              <button type="button" className="selection" data-testid={`${elem.id}-plus`} onClick={() => plusOne(elem.id)}><i className="fas fa-plus-circle" /></button>
              <span className="common">{elem.cantidad}</span>
              <button type="button" className="selection" data-testid={`${elem.id}-minus`} onClick={() => minusOne(elem.id)}><i className="fas fa-minus-circle" /></button>
              <button type="button" className="selection" data-testid={`${elem.id}-trash`} onClick={() => trashOrder(elem.id)}><i className="fas fa-trash-alt" /></button>
            </div>
            <div className="col-1 col-sm-2 col-md-2 col-lg-2 col-xl-2 common">{elem.cantidad * elem.precio}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  trashOrder: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};
