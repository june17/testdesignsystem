import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    banner: {
        backgroundColor: 'rgb(255, 140, 140)',
        minHeight: 400,
    }
})

const Banner = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.banner}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h2'>Best crockery in town</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    Buy now
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Banner