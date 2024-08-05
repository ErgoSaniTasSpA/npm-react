

import * as React from 'react';
import  renderer  from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { products } from './data/products';
/*
* Instalar
* - npm i react-test-renderer
* - npm add -D identity-obj-proxy
*/

describe('TEST Component ProductTitle', () => {

    test('Visualizar Component Product Titulo', () => {

    
        const wrapper = renderer.create(
            <ProductTitle title='Test Custom Product' />
        )
        expect (wrapper.toJSON()).toMatchSnapshot();
    });

    test('Visualizar Product Card con Product Title', () => {

    
        const wrapper = renderer.create(
            <ProductCard product= { products[0] } >
            {
                () => ( <ProductTitle /> )
            }    
            </ProductCard>     
        )
        expect (wrapper.toJSON()).toMatchSnapshot();
    });
    


});