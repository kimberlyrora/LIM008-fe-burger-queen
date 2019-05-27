import React, { useEffect, useState, Component } from 'react';
import firebase from '../../firebaseConfig';
import Header from '../header/header';

const db = firebase.firestore();
const ordersToCook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection('Orders').get()
      .then((json) => {
        const doc = [];
        json.forEach((docu) => {
          doc.push(docu.data());
        });
        setData(doc);
      });
  }, []);
  return (
    <div>
      <Header />
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.Precio}</div>
              <div>{item.Fecha}</div>
              <div>{item.Nombre.name}</div>
              <div>
                {item.Productos.map((elem) => {
                  return (
                    <div key={elem.id}>
                      <div>{elem.cantidad}</div>
                      <div>{elem.nombre}</div>
                      <div>{elem.precio}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ordersToCook;
