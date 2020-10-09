import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

export default function ItemDetailContainer() {

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {

        const db = getFirestore();
        const collection = db.collection("items");
        const item = collection.doc(params.id);

        item.get().then( (doc) => {

            if (!doc.exists) {
                console.log (`El item ${params.id} no existe`);
            } else {
                setItem ({id: doc.id, ...doc.data()});
            }

        }).catch( (error) => {
            console.log(`Se produjo un error al obtener el item ${params.id}`, error)
        }).finally ( () => {
            setLoading(false);
        });
        
    }, [params]);

    if (loading) {
        return (
            <Spinner/>
        )
    }
    return (
        <div className="mt-5">
            <ItemDetail item={item}/>
        </div>
    )

}
