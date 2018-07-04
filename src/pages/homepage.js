import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/products.json';
import {PageHeader} from 'react-bootstrap';

export default function HomePage(props){
    return(
    <div> <PageHeader>
    Book List <small> Select your book</small>
        </PageHeader>
        <ProductListing products={data.products}/>
    </div>)
}