import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";


interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs ) => void;
    value?: number;
    initialValues? : InitialValues;
}

export const UseProduct = ( { onChange,product, value = 0,initialValues } : useProductArgs  ) => {

    const [counter,setCounter] = useState<number>( initialValues?.count ??  value ) // ?? => ||;

    const isMounted = useRef (false);

    //Se el counter cambia se ejecuta el onChange()
    const increaseBy = ( value : number ) => {

        let newValue = Math.max ( counter + value, 0 );

        //Valida el Maximo
        if ( initialValues?.maxCount ) 
            newValue = Math.min ( newValue, initialValues.maxCount );
    

        setCounter( newValue );

        onChange && onChange( { count : newValue, product });
    }


    const reset = () => {
        setCounter(initialValues?.count ?? value);
    }

    useEffect ( () => {
        isMounted.current = true;
    },[])

    useEffect ( () => {
        if ( !isMounted.current ) return;
        setCounter( value );
    },[value])


    return {
        //Parametros
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount:initialValues?.maxCount,
        //Funciones
        increaseBy,
        reset
    }

} 