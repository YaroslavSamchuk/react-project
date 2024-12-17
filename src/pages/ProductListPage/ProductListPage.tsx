import { ProductsList } from "../../shared/ProductsList/ProductsList";


export function ProductListPage(){

    // в react есть возможность создавать пустые теги
    // react fragment это тег предоставляемый реактом в случае если лень создавать дополнительный Node елемент 
    return <>
            <ProductsList></ProductsList>
            </>
}