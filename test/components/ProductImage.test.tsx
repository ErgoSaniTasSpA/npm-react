import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { products } from './data/products';



describe('ProductImage', () => {
    
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {

        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });


    test('debe de mostrar el componente con la imagen del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ products[0] }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toBe;
        
        

    })
    
    

})