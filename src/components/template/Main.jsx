import React from 'react';
import '../style/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Item from './Item';

import Vingadores from '../assets/thumbnail/ving.jfif';
import Joker from '../assets/thumbnail/joker.jfif';
import Pica_Pau from '../assets/thumbnail/pica-pau.jfif';
import Transformers from '../assets/thumbnail/transformers.jpg';
import Circulo_de_Fogo from '../assets/thumbnail/circulo de fogo.jpg';

import Vikings from '../assets/thumbnail/vikings.jpg';
import Supernatural from '../assets/thumbnail/supernatural.jpg';
import Punisher from '../assets/thumbnail/punisher.jpg';

export default props =>
    <div className="container">
        <div className="search">
            <form action="#" method="post">
                <input type="text" placeholder="Procure seus filmes e séries..."/>
                <div className="icon">
                    <input type="submit" value=""/>
                </div>
            </form>
        </div>
        <div className="title">
            <h3>Principais Filmes</h3>
            <hr/>
        </div>
        <Item name="Coringa" source={Joker} note="6.5" />
        <Item name="Pica-Pau" source={Pica_Pau} note="8" />
        <Item name="Transformers: O último cavaleiro" source={Transformers} note="9.6" />
        <Item name="Circulo de Fogo" source={Circulo_de_Fogo} note="7.5" />
        <Item name="Vingadores: Ultimato" source={Vingadores} note="7.1" />
        <div className="title">
            <h3>Principais Séries</h3>
            <hr/>
        </div>
        <Item name="Vikings" source={Vikings} note="7" />
        <Item name="Sobrenatural" source={Supernatural} note="8.6" />
        <Item name="Justiceiro" source={Punisher} note="7.2" />
    </div>