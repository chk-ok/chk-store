import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import {getFirestore} from '../../firebase';

export default function Home(props) {

    const [products, setProducts] = useState ([]);

    useEffect(() => {

      /* Variable de control para evitar actualizar el estado cuando el componente se encuentra desmontado
      Ref: https://www.debuggr.io/react-update-unmounted-component/ */

      let mounted = true;

      const db = getFirestore();
      const itemCollection = db.collection("items");
  
      itemCollection.get().then( result => {
  
        if (result.size === 0) {
          console.log('No results!');
        } else {
          let items = result.docs.map (doc => {
            return {id: doc.id, ...doc.data()};
          });
          if (mounted) {
            setProducts(items);
          }
        }
  
      }).catch( error => {
        console.log("Error searching items", error);
      });

      return () => mounted = false;

    })


    if (products.length === 0) {
        return (
            <Spinner/>
        );
    }

    return (
        <div id="home">
            <div className="d-flex flex-column justify-content-center">
                <div id="welcomeMessage" className="p-4 welcomeCard rounded shadow my-5 mx-4">
                    <h2>
                        {props.greeting}
                    </h2>
                    <small className="mx-auto">Estamos trabajando para vos</small>
                </div>
            </div>
            <div>
                <ItemList items={products}/>
            </div>
        </div>
    )
}

