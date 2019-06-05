import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    // no react, os atributos de classes são definidos sempre dentro do objeto state
    state = {
        products: []
    }

    componentDidMount() {
        // executa sempre que um componente é montado na tela
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        // seta o conteúdo do atributo state.products com o retorno da api
        this.setState({ products: response.data.docs });
    };

    render() {

        // sempre que usar um map em React, é preciso setar uma key única no primeiro elemento
        // a ser renderizado, isso pode ser feito  como no exemplo abaixo
        
        return <div className="product-list">
            {this.state.products.map(product => {
                return <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href={product.url}>Acessar</a>
                </article>
            })}
        </div>
    }
}