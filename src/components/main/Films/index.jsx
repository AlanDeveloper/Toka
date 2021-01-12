import React, { useEffect, useState } from 'react';

import { loadFilms } from "../../../api";

import BarSearch from '../../BarSearch';
import Item from '../../Item';

export default function Films() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        loadFilms().then(response => setItems(response.data)).catch(error => console.log(error));
    }, []);

    const createItem = () => {
        return (
            items.map(item => {
                let i = item.name.length > 19 ? 'long' : '';

                return (
                    <Item textLong={i} name={item.name} source={item.thumbnail} note={item.note} key={item.id} />
                )
            })
        )
    }

    return (
        <div className="container">
            <BarSearch />
            <div className="title">
                <h3>Navegar por Filmes</h3>
                <hr />
            </div>
            <div className="content">
                {createItem()}
            </div>
        </div>
    )
}