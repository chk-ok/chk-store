import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({products}) {

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        const prod = products[params.id - 1];
        const task = new Promise ((resolve, reject)=>{
            setTimeout(()=> resolve(prod), 1000);
        });
        task.then(result => {
            setLoading(false);
            setItem(result);
        }, error => {
            console.log(error);
        }).catch(exception => {
            console.log(exception);
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
