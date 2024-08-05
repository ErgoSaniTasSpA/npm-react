# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Nicolas Ruz F

## Ejemplo - Curso Fernado Herrera
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'npm-count-product-card';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 1,
        maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```