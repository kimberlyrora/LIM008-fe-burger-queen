import React from 'react';
import PropTypes from 'prop-types';
import './headerOrders.css';

const HeaderOrders = ({ nameInitial, setName }) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="title">Pedidos</div>
    </div>
    <form>
      <div className="name customer common">Cliente:</div>
      <input className="col-12 col-lg-8 col-xl-6 common" value={nameInitial.name} onChange={e => setName({ ...nameInitial, name: e.currentTarget.value })} data-testid="name-customer" />
    </form>
    <div className="row justify-content-center">
      <div className="col-4 col-sm-4 col-md-5 col-lg-5 col-xl-5 common">Descripción</div>
      <div className="col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 common">Cantidad</div>
      <div className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 common">Precio</div>
    </div>
  </div>
);
export default HeaderOrders;
HeaderOrders.propTypes = {
  nameInitial: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};
