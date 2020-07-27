import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import { AcUnitRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        color: 'yellow',
        flex: 1,
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid item lg={1} sm={false} />
                <Grid item container lg={10} sm={12}>
                    <Typography className={classes.typographyStyles}>Arun's ecommerce</Typography>
                    <AcUnitRounded />
                </Grid>
                <Grid item lg={1} sm={false} />
            </Toolbar>
        </AppBar>)
}

export default Header