import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Watch extends Component {
    render() {
        return (
            <main className="container">
                <object>
                    <param name="movie" value="http://www.youtube.com/v/-TdbsZg6CC4"></param>
                    <param name="allowFullScreen" value="true"></param>
                    <param name="allowscriptaccess" value="always"></param>
                    <embed src="http://www.youtube.com/v/-TdbsZg6CC4"
                        type="application/x-shockwave-flash"
                        allowscriptaccess="always"
                        allowfullscreen="true"
                        width="426"
                        height="240">
                    </embed>
                </object>
                <div className="text-watch">
                    <h3>Sinopse</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aperiam beatae magni excepturi? Voluptas molestiae rerum nisi officia illum. Nemo, illo com
                        modi ea suscipit accusamus eaque eligendi atque aperiam voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consectetur quibusdam
                         reprehenderit, ratione rerum iusto cumque non tempora necessitatibus, optio nostrum laudantium quam quas tempore omnis quos rem amet aperiam.</p>
                    <div className="category no-left">Terror</div>
                    <div className="category">Suspense</div>
                    <form className="comentary" action="#">
                        <h5>Deixe um comentário</h5>
                        <div class="line">
                            <input type="text" className="no-left" placeholder="Digite seu nome"/>
                            <input type="email" className="no-right" placeholder="Digite seu e-mail"/>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Digite seu comentário"></textarea>
                        <button>Enviar</button>
                    </form>
                    <div className="user-comentary">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi et expedita ducimus eveniet veritatis cumque, odio similique tempora illum aliquam ex inventore delectus fugit omnis. Dolorum eligendi magnam tempore.</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}