import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import img from '../images/ropa_full.png';

export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        const task = new Promise ((resolve, reject)=>{
            const prod = {id:1, name:"Remera Estampada", price:450, image:img};
            setTimeout(()=> resolve(prod), 3000);
        });
        task.then(result => {
            setLoading(false);
            setItem(result);
        }, error => {
            console.log(error);
        }).catch(exception => {
            console.log(exception);
        });
    }, []);

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
