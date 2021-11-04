import { useEffect, useState } from "react"
import { api } from "../../Services/api";
import { Cards } from "./Cards";

import { Unlist } from './styles';

export function Product() {

    const [card, setCard] = useState([]);
    
    useEffect(() => {
        api.get('http://localhost:3000/')
        .then(response => setCard(response.data))
    }, [])

    return(
    <>
        <Unlist>
            {card.map( product =>
            <Cards 
            key={product.id}
            name={product.name} 
            img={product.img} 
            alt={product.name}
            category={product.category}
            price={product.price}
            />  
            )}
        </Unlist>
    </>
    )

}