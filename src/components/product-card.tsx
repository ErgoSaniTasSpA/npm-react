import React,{ createContext, CSSProperties  } from 'react';

import styles from '../styles/styles.module.css';

import { UseProduct } from '../hooks/use-product';
import { OnChangeArgs, Product, ProductContextProps,InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext( {} as ProductContextProps);
const { Provider } = ProductContext;


export interface ProductProps {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: ( args : OnChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

/**************************** NOTA IMPORTANTE ************************************************
* * Provider : Envuelve la aplicación React y se encarga de suministrar el STORE de REDUX a todos 
* * los componentes que se encuentren dentro de la aplicación. De esta manera, cualquier componente 
* * que necesite acceder al STORE (ProductContextProps) puede hacerlo utilizando los hooks 
* * o funciones específicas proporcionadas por React-Redux.
* *********************************************************************************************/

export const ProductCard = ( {children,product,className,style,onChange,value,initialValues }:ProductProps) => {

  const { counter , increaseBy,isMaxCountReached,maxCount,reset } = 
        UseProduct( { onChange , product, value ,initialValues } );

  return (

    <Provider value = {{ counter,increaseBy,product,maxCount }} >
      {/* Aqui va Body del page */}
      <div className={`${ styles.productCard } ${ className }`} style= { style } >
        {/*  Ejecuta una funcion JSX Element (jsx) renderizable, SI retorna parametros */}
        { 
          children({
            counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset
          })
        } 
      </div>
    
    </Provider>
  )
}
