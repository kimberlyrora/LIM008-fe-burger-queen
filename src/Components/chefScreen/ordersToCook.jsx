import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import Header from '../header/header';
import './ordersToCook.css';

const db = firebase.firestore();
class OrdersToCook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    db.collection('Orders').get().then((snapShots) => {
      this.setState({
        orders: snapShots.docs.map(doc => ({ id: doc.id, data: doc.data() })),
      });
    });
  }

  render() {
    const { orders } = this.state;
    return (
      <>
        <Header />
        <div className="card-columns">
          {orders && orders !== undefined ? orders.map(order => (
            <div className="card bg-light mb-3" >
              <div>
                {order.data.Fecha.substring(0, 24)}
              </div>
              <div>
                <strong>{order.data.Nombre.name}</strong>
              </div>
              <div>
                {order.data.Precio}
              </div>
              <div>
                {order.data.Productos.map(product => (
                  <div className="row justify-content-center">
                    <div>
                      {product.nombre}
                    </div>
                    <div>
                      {product.cantidad}
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          )) : null }
        </div>
      </>
    );
  }
}

export default OrdersToCook;
