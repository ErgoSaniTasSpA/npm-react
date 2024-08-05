

import * as React from 'react';
import  renderer  from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { products } from './data/products';
/*
* Instalar
* - npm i react-test-renderer
* - npm add -D identity-obj-proxy
*/

const { act } = renderer; 


describe('TEST Component Product Card', () => {
    
    test('Visualizar Product Card', () => {

        const wrapper = renderer.create(
            <ProductCard product= { products[0] } >
            {
                () => ( <h1>Product Card</h1> )
            }    
            </ProductCard>     
        )
        expect (wrapper.toJSON()).toMatchSnapshot();
    });

    test('Incrementar Count', () => {

        const wrapper = renderer.create(
            <ProductCard product= { products[0] } >
            {
                ({counter,increaseBy}) => ( 
                    <>
                        <h1>Product Card</h1>
                        <span> { counter }</span>
                        <button onClick= { ()=> increaseBy(1) }>
                            Incrementar
                        </button>
                    </>
                )
            }    
            </ProductCard>     
        );
        let tree = wrapper.toJSON();

        expect( tree ).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        });

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe(' ');

    });

});