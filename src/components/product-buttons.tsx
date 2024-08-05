import React,{ CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./product-card";
import styles from '../styles/styles.module.css';

export interface Props {
    className? : string;
    style?: CSSProperties;
}

export const ProductButtons = ( { className,style } : Props ) => {

    const { counter,increaseBy,maxCount  } = useContext(ProductContext);


    //Retorna una funcion
    const isMaxReached = useCallback( 
      // '!!maxCount' => Si existe (true) lo transforma a boolea true/false
      () => !!maxCount && counter === maxCount,
    [counter,maxCount],
  );
  
    return (
      <div 
        style = { style }
        className={` ${styles.buttonsContainer } ${className} `} >
          <button
              className={ styles.buttonMinus } 
              onClick={ () => increaseBy ( -1 ) } > - </button>
          <button
              className={ styles.countLabel } 
              onClick={ () => increaseBy ( counter ) } > { counter } </button>
          <button
              className={ `${styles.buttonAdd}  ${ isMaxReached() && styles.disabled }` } 
              onClick={ () => increaseBy ( +1 ) } > + </button>        
      </div>
    )
  }