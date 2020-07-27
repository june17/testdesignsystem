import React from 'react'

import ProductCard from './ProductCard'

export const ProductData = {
    "id": 6,
    "fullname": "Laurie Braden",
    "avatar": "https://robohash.org/quasiomnisea.bmp?size=50x50&set=set1",
    "company": "Rau Inc",
    "product": "English Muffin",
    "imageSrc": "http://dummyimage.com/215x235.jpg/cc0000/ffffff",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis convallis tellus nisi eu orci.",
    "available": true
}

export default {
    component: ProductCard,
    title: 'ProductCard',
    excludeStories: /.*Data*/,
    decorators: [story => <div style={{ padding: '4rem' }}>{story()}</div>]
}

export const Default = () => <ProductCard {...ProductData} />
export const Loading = () => <ProductCard loading />