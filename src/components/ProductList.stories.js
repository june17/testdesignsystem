import React from 'react'

import ProductList from './ProductList'

export default {
    component: ProductList,
    title: 'Product Listing',
    excludeStories: /.*Data*/,
    decorators: [story => <div style={{ padding: '4rem' }}>{story()}</div>]
}

export const Empty = () => <ProductList catalogue={[]} />