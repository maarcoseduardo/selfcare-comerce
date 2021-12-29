import React from "react";
import { useCard } from "../../Context";

import { Cards } from "./Cards";

import { Unlist } from "./styles";

export function Product() {

    const { card } = useCard();

    return (
        <React.Fragment>
            <Unlist >
                {card.map(product =>
                    <Cards
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        alt={product.name}
                        category={product.category}
                        price={product.price}
                        installments={product.installments}
                    />
                )}
            </Unlist>
        </React.Fragment>
    )
}