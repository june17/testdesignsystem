import React from 'react'
import ProductCard from './ProductCard'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    loadingCard: {
        maxWidth: 375
    }
})

const ProductList = (props) => {
    const classes = useStyles()
    const { catalogue } = props


    if (catalogue.length === 0) {
        return (
            <div>
                Loading
            </div>
        )
    }

    return (
        <React.Fragment>
            {catalogue.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i} >
                    <ProductCard {...item} />
                </Grid>
            )
            )}
        </React.Fragment>
    )
}

export default ProductList