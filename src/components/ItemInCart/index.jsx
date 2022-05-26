import React from "react";
import { Cards } from "./Cards";
import { useCard } from '../../Context'

export function ItemInCart() {

    const { card } = useCard();

    return (
        <React.Fragment>
             {card.map(item => item.inCart ?  
                    <Cards
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        alt={item.name}
                        price={item.price}
                        priceTotal={item.total}
                        count={item.count} 
                    /> 
                    :
                     '')}
        </React.Fragment>
    )
}